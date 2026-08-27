import { PIPELINE_STAGES } from './constants.js';

const CSV_HEADERS = ['company', 'title', 'url', 'status', 'appliedDate', 'location', 'salary', 'notes'];

function escapeCsv(value) {
	const str = String(value ?? '');
	if (str.includes(',') || str.includes('"') || str.includes('\n')) {
		return `"${str.replace(/"/g, '""')}"`;
	}
	return str;
}

export function exportToCsv(applications) {
	const rows = [
		CSV_HEADERS.join(','),
		...applications.map((app) => CSV_HEADERS.map((h) => escapeCsv(app[h])).join(','))
	];
	return rows.join('\n');
}

function parseCsvLine(line) {
	const result = [];
	let current = '';
	let inQuotes = false;

	for (let i = 0; i < line.length; i++) {
		const char = line[i];
		if (inQuotes) {
			if (char === '"' && line[i + 1] === '"') {
				current += '"';
				i++;
			} else if (char === '"') {
				inQuotes = false;
			} else {
				current += char;
			}
		} else if (char === '"') {
			inQuotes = true;
		} else if (char === ',') {
			result.push(current);
			current = '';
		} else {
			current += char;
		}
	}
	result.push(current);
	return result;
}

export function importFromCsv(text, createApplication) {
	const lines = text.trim().split(/\r?\n/).filter(Boolean);
	if (lines.length < 2) return [];

	const headers = parseCsvLine(lines[0]).map((h) => h.trim().toLowerCase());
	const validStatuses = new Set(PIPELINE_STAGES.map((s) => s.id));

	return lines.slice(1).map((line) => {
		const values = parseCsvLine(line);
		const row = {};
		headers.forEach((header, i) => {
			row[header] = values[i]?.trim() ?? '';
		});

		const status = validStatuses.has(row.status) ? row.status : 'saved';

		return createApplication({
			company: row.company ?? '',
			title: row.title ?? '',
			url: row.url ?? '',
			status,
			appliedDate: row.applieddate || row.appliedDate || new Date().toISOString().slice(0, 10),
			location: row.location ?? '',
			salary: row.salary ?? '',
			notes: row.notes ?? ''
		});
	});
}

export function downloadCsv(applications, filename = 'job-applications.csv') {
	const blob = new Blob([exportToCsv(applications)], { type: 'text/csv;charset=utf-8;' });
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = filename;
	link.click();
	URL.revokeObjectURL(url);
}
