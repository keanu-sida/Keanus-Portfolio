import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import PDFDocument from 'pdfkit';
import { profile } from '../src/lib/data/profile.js';
import { experience, education, certifications } from '../src/lib/data/resume.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '../static/resume.pdf');

const MARGIN = 50;
const PAGE_WIDTH = 612;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

function ensureSpace(doc, needed = 60) {
	if (doc.y + needed > doc.page.height - MARGIN) {
		doc.addPage();
	}
}

function sectionTitle(doc, text) {
	ensureSpace(doc, 40);
	doc.moveDown(0.5).font('Helvetica-Bold').fontSize(13).fillColor('#5b21b6').text(text);
	doc.moveDown(0.25);
	doc
		.moveTo(MARGIN, doc.y)
		.lineTo(PAGE_WIDTH - MARGIN, doc.y)
		.strokeColor('#c4b5fd')
		.lineWidth(1)
		.stroke();
	doc.moveDown(0.5);
}

function writeEntry(doc, { heading, subheading, period, description, bullets = [] }) {
	ensureSpace(doc, 80);
	doc.font('Helvetica-Bold').fontSize(11).fillColor('#111827').text(heading, { width: CONTENT_WIDTH * 0.7 });
	if (period) {
		doc.font('Helvetica').fontSize(9).fillColor('#6b7280').text(period, MARGIN, doc.y - 13, {
			width: CONTENT_WIDTH,
			align: 'right'
		});
	}
	doc.moveDown(0.15);
	if (subheading) {
		doc.font('Helvetica-Bold').fontSize(10).fillColor('#5b21b6').text(subheading);
		doc.moveDown(0.15);
	}
	if (description) {
		doc.font('Helvetica').fontSize(9.5).fillColor('#374151').text(description, { width: CONTENT_WIDTH });
		doc.moveDown(0.2);
	}
	for (const bullet of bullets) {
		ensureSpace(doc, 20);
		doc.font('Helvetica').fontSize(9).fillColor('#374151').text(`• ${bullet}`, {
			width: CONTENT_WIDTH,
			indent: 10
		});
	}
	doc.moveDown(0.6);
}

const doc = new PDFDocument({ margin: MARGIN, size: 'LETTER' });
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

doc.font('Helvetica-Bold').fontSize(22).fillColor('#111827').text(profile.name.full);
doc.moveDown(0.15);
doc.font('Helvetica').fontSize(12).fillColor('#5b21b6').text(profile.title);
doc.moveDown(0.35);
doc
	.font('Helvetica')
	.fontSize(9.5)
	.fillColor('#374151')
	.text(`${profile.email}  |  ${profile.links.github.replace('https://', '')}  |  ${profile.links.linkedin.replace('https://www.', '')}`, {
		width: CONTENT_WIDTH
	});
doc.moveDown(0.35);
doc.font('Helvetica').fontSize(9.5).fillColor('#374151').text(profile.headline, { width: CONTENT_WIDTH });
doc.moveDown(0.8);

sectionTitle(doc, 'Experience');
for (const role of experience) {
	writeEntry(doc, {
		heading: role.title,
		subheading: role.company,
		period: role.period,
		description: role.description,
		bullets: role.achievements
	});
}

sectionTitle(doc, 'Education');
for (const item of education) {
	writeEntry(doc, {
		heading: item.degree,
		subheading: item.school,
		period: item.year,
		description: item.description
	});
}

sectionTitle(doc, 'Certifications');
for (const cert of certifications) {
	writeEntry(doc, {
		heading: cert.name,
		subheading: `${cert.issuer} • ${cert.year}`,
		description: cert.description
	});
}

doc.end();

stream.on('finish', () => {
	console.log(`Resume PDF written to ${outputPath}`);
});

stream.on('error', (error) => {
	console.error('Failed to write resume PDF:', error);
	process.exit(1);
});
