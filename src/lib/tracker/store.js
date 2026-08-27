import { STORAGE_KEY } from './constants.js';

function generateId() {
	return crypto.randomUUID?.() ?? `job-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function createApplication(overrides = {}) {
	const now = new Date().toISOString().slice(0, 10);
	return {
		id: generateId(),
		company: '',
		title: '',
		url: '',
		status: 'saved',
		appliedDate: now,
		notes: '',
		location: '',
		salary: '',
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		...overrides
	};
}

export function loadApplications() {
	if (typeof localStorage === 'undefined') return [];
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}

export function saveApplications(applications) {
	if (typeof localStorage === 'undefined') return;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
}

export function upsertApplication(applications, application) {
	const index = applications.findIndex((a) => a.id === application.id);
	const updated = { ...application, updatedAt: new Date().toISOString() };
	if (index >= 0) {
		const next = [...applications];
		next[index] = updated;
		return next;
	}
	return [updated, ...applications];
}

export function deleteApplication(applications, id) {
	return applications.filter((a) => a.id !== id);
}

export function filterApplications(applications, { search = '', status = 'all' } = {}) {
	const query = search.trim().toLowerCase();
	return applications.filter((app) => {
		const matchesStatus = status === 'all' || app.status === status;
		const matchesSearch =
			!query ||
			app.company.toLowerCase().includes(query) ||
			app.title.toLowerCase().includes(query) ||
			app.location?.toLowerCase().includes(query) ||
			app.notes?.toLowerCase().includes(query);
		return matchesStatus && matchesSearch;
	});
}

export function pipelineStats(applications) {
	const stats = { total: applications.length };
	for (const app of applications) {
		stats[app.status] = (stats[app.status] ?? 0) + 1;
	}
	return stats;
}
