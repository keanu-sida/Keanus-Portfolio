/** Job application pipeline stages. */

export const PIPELINE_STAGES = [
	{ id: 'saved', label: 'Saved', color: 'bg-slate-600' },
	{ id: 'applied', label: 'Applied', color: 'bg-blue-600' },
	{ id: 'phone', label: 'Phone Screen', color: 'bg-cyan-600' },
	{ id: 'technical', label: 'Technical', color: 'bg-violet-600' },
	{ id: 'onsite', label: 'Onsite', color: 'bg-amber-600' },
	{ id: 'offer', label: 'Offer', color: 'bg-emerald-600' },
	{ id: 'rejected', label: 'Rejected', color: 'bg-rose-600' }
];

export const STORAGE_KEY = 'keanu-job-tracker-v1';

export function stageLabel(stageId) {
	return PIPELINE_STAGES.find((s) => s.id === stageId)?.label ?? stageId;
}

export function stageColor(stageId) {
	return PIPELINE_STAGES.find((s) => s.id === stageId)?.color ?? 'bg-slate-600';
}
