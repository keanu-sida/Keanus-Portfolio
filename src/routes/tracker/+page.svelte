<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { profile } from '$lib/data';
	import { appPath } from '$lib/paths';
	import Card from '$lib/components/Card.svelte';
	import {
		PIPELINE_STAGES,
		stageLabel,
		stageColor
	} from '$lib/tracker/constants.js';
	import {
		createApplication,
		loadApplications,
		saveApplications,
		upsertApplication,
		deleteApplication,
		filterApplications,
		pipelineStats
	} from '$lib/tracker/store.js';
	import { downloadCsv, importFromCsv } from '$lib/tracker/csv.js';

	let applications = [];
	let search = '';
	let statusFilter = 'all';
	let showForm = false;
	let editingId = null;
	let form = createApplication();
	let importError = '';

	$: filtered = filterApplications(applications, { search, status: statusFilter });
	$: stats = pipelineStats(applications);

	onMount(() => {
		applications = loadApplications();
	});

	function persist(next) {
		applications = next;
		saveApplications(applications);
	}

	function resetForm() {
		form = createApplication();
		editingId = null;
		showForm = false;
	}

	function openNew() {
		form = createApplication();
		editingId = null;
		showForm = true;
	}

	function openEdit(app) {
		form = { ...app };
		editingId = app.id;
		showForm = true;
	}

	function handleSubmit() {
		if (!form.company.trim() || !form.title.trim()) return;
		persist(upsertApplication(applications, { ...form, id: editingId ?? form.id }));
		resetForm();
	}

	function handleDelete(id) {
		if (!confirm('Remove this application from your pipeline?')) return;
		persist(deleteApplication(applications, id));
		if (editingId === id) resetForm();
	}

	function handleStatusChange(app, status) {
		persist(upsertApplication(applications, { ...app, status }));
	}

	function handleExport() {
		downloadCsv(applications);
	}

	function handleImport(event) {
		importError = '';
		const file = event.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			try {
				const imported = importFromCsv(reader.result, createApplication);
				if (!imported.length) {
					importError = 'No valid rows found in CSV.';
					return;
				}
				persist([...imported, ...applications]);
			} catch {
				importError = 'Could not parse CSV file.';
			}
			event.target.value = '';
		};
		reader.readAsText(file);
	}
</script>

<svelte:head>
	<title>Job Pipeline Tracker | {profile.name.full}</title>
	<meta
		name="description"
		content="Track job applications through your hiring pipeline with filters, status updates, and CSV import/export."
	/>
</svelte:head>

<main class="flex flex-col flex-1 p-4 pb-24">
	<div class="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
		<div>
			<a href={appPath('/', base)} class="text-sm text-violet-400 hover:text-violet-300 duration-200">
				← Back to portfolio
			</a>
			<h1 class="text-3xl sm:text-4xl font-semibold mt-2">
				Job <span class="poppins text-violet-400">Pipeline</span> Tracker
			</h1>
			<p class="text-slate-400 mt-2 max-w-xl">
				Track applications from saved to offer. Data stays in your browser — export anytime to sync with
				your spreadsheet or ATS.
			</p>
		</div>
		<div class="flex flex-wrap gap-2">
			<a
				href={appPath(profile.links.resume, base)}
				target="_blank"
				rel="noopener noreferrer"
				class="px-4 py-2 rounded-full border border-violet-700 text-violet-400 hover:border-violet-400 text-sm duration-200"
			>
				<i class="fa-solid fa-file-pdf mr-1"></i> Resume
			</a>
			<a
				href={profile.links.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				class="px-4 py-2 rounded-full border border-violet-700 text-violet-400 hover:border-violet-400 text-sm duration-200"
			>
				<i class="fa-brands fa-linkedin mr-1"></i> LinkedIn
			</a>
		</div>
	</div>

	<!-- Pipeline overview -->
	<div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
		{#each PIPELINE_STAGES as stage}
			<button
				type="button"
				class="rounded-lg border p-3 text-left duration-200"
				class:border-violet-400={statusFilter === stage.id}
				class:bg-violet-950={statusFilter === stage.id}
				class:border-violet-800={statusFilter !== stage.id}
				on:click={() => (statusFilter = statusFilter === stage.id ? 'all' : stage.id)}
			>
				<p class="text-xs text-slate-400">{stage.label}</p>
				<p class="text-xl font-semibold">{stats[stage.id] ?? 0}</p>
			</button>
		{/each}
	</div>

	<!-- Toolbar -->
	<div class="flex flex-col lg:flex-row gap-4 mb-6">
		<input
			type="search"
			bind:value={search}
			placeholder="Search company, title, location..."
			class="flex-1 bg-slate-900 border border-violet-800 rounded-lg px-4 py-2 focus:border-violet-400 focus:outline-none"
		/>
		<select
			bind:value={statusFilter}
			class="bg-slate-900 border border-violet-800 rounded-lg px-4 py-2 focus:border-violet-400 focus:outline-none"
		>
			<option value="all">All statuses ({stats.total})</option>
			{#each PIPELINE_STAGES as stage}
				<option value={stage.id}>{stage.label}</option>
			{/each}
		</select>
		<div class="flex flex-wrap gap-2">
			<button
				type="button"
				on:click={openNew}
				class="blueShadow px-4 py-2 rounded-full bg-white text-slate-950 font-medium text-sm"
			>
				+ Add Application
			</button>
			<button
				type="button"
				on:click={handleExport}
				disabled={!applications.length}
				class="px-4 py-2 rounded-full border border-violet-700 text-violet-400 hover:border-violet-400 text-sm disabled:opacity-40"
			>
				Export CSV
			</button>
			<label
				class="px-4 py-2 rounded-full border border-violet-700 text-violet-400 hover:border-violet-400 text-sm cursor-pointer"
			>
				Import CSV
				<input type="file" accept=".csv,text/csv" class="hidden" on:change={handleImport} />
			</label>
		</div>
	</div>

	{#if importError}
		<p class="text-rose-400 text-sm mb-4">{importError}</p>
	{/if}

	<!-- Form -->
	{#if showForm}
		<Card padding="p-6" interactive={true} class="mb-8">
			<h2 class="text-xl font-semibold mb-4">{editingId ? 'Edit' : 'New'} Application</h2>
			<form on:submit|preventDefault={handleSubmit} class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<label class="flex flex-col gap-1">
					<span class="text-sm text-slate-400">Company *</span>
					<input
						bind:value={form.company}
						required
						class="bg-slate-950 border border-violet-800 rounded-lg px-3 py-2 focus:border-violet-400 focus:outline-none"
					/>
				</label>
				<label class="flex flex-col gap-1">
					<span class="text-sm text-slate-400">Role *</span>
					<input
						bind:value={form.title}
						required
						class="bg-slate-950 border border-violet-800 rounded-lg px-3 py-2 focus:border-violet-400 focus:outline-none"
					/>
				</label>
				<label class="flex flex-col gap-1">
					<span class="text-sm text-slate-400">Job URL</span>
					<input
						bind:value={form.url}
						type="url"
						placeholder="https://..."
						class="bg-slate-950 border border-violet-800 rounded-lg px-3 py-2 focus:border-violet-400 focus:outline-none"
					/>
				</label>
				<label class="flex flex-col gap-1">
					<span class="text-sm text-slate-400">Status</span>
					<select
						bind:value={form.status}
						class="bg-slate-950 border border-violet-800 rounded-lg px-3 py-2 focus:border-violet-400 focus:outline-none"
					>
						{#each PIPELINE_STAGES as stage}
							<option value={stage.id}>{stage.label}</option>
						{/each}
					</select>
				</label>
				<label class="flex flex-col gap-1">
					<span class="text-sm text-slate-400">Applied date</span>
					<input
						bind:value={form.appliedDate}
						type="date"
						class="bg-slate-950 border border-violet-800 rounded-lg px-3 py-2 focus:border-violet-400 focus:outline-none"
					/>
				</label>
				<label class="flex flex-col gap-1">
					<span class="text-sm text-slate-400">Location</span>
					<input
						bind:value={form.location}
						class="bg-slate-950 border border-violet-800 rounded-lg px-3 py-2 focus:border-violet-400 focus:outline-none"
					/>
				</label>
				<label class="flex flex-col gap-1 md:col-span-2">
					<span class="text-sm text-slate-400">Notes</span>
					<textarea
						bind:value={form.notes}
						rows="3"
						class="bg-slate-950 border border-violet-800 rounded-lg px-3 py-2 focus:border-violet-400 focus:outline-none resize-y"
					></textarea>
				</label>
				<div class="md:col-span-2 flex gap-2">
					<button
						type="submit"
						class="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium"
					>
						{editingId ? 'Save changes' : 'Add to pipeline'}
					</button>
					<button
						type="button"
						on:click={resetForm}
						class="px-5 py-2 rounded-full border border-violet-700 text-violet-400 text-sm"
					>
						Cancel
					</button>
				</div>
			</form>
		</Card>
	{/if}

	<!-- Applications list -->
	{#if filtered.length === 0}
		<Card padding="p-12" class="text-center">
			<i class="fa-solid fa-briefcase text-4xl text-violet-400 mb-4"></i>
			<p class="text-lg font-medium mb-2">No applications yet</p>
			<p class="text-slate-400 text-sm mb-6">
				Add your first role or import a CSV to start tracking your job search.
			</p>
			<button
				type="button"
				on:click={openNew}
				class="blueShadow px-5 py-2 rounded-full bg-white text-slate-950 font-medium text-sm"
			>
				+ Add Application
			</button>
		</Card>
	{:else}
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			{#each filtered as app (app.id)}
				<Card padding="p-5" interactive={true}>
					<div class="flex items-start justify-between gap-3 mb-3">
						<div>
							<h3 class="text-lg font-semibold">{app.title}</h3>
							<p class="text-violet-400">{app.company}</p>
						</div>
						<span class="text-xs px-2 py-1 rounded-full text-white {stageColor(app.status)}">
							{stageLabel(app.status)}
						</span>
					</div>

					<div class="flex flex-wrap gap-3 text-sm text-slate-400 mb-3">
						{#if app.appliedDate}
							<span><i class="fa-regular fa-calendar mr-1"></i>{app.appliedDate}</span>
						{/if}
						{#if app.location}
							<span><i class="fa-solid fa-location-dot mr-1"></i>{app.location}</span>
						{/if}
					</div>

					{#if app.notes}
						<p class="text-sm text-slate-400 mb-3 line-clamp-2">{app.notes}</p>
					{/if}

					<div class="flex flex-wrap items-center gap-2">
						<select
							value={app.status}
							on:change={(e) => handleStatusChange(app, e.currentTarget.value)}
							class="text-xs bg-slate-950 border border-violet-800 rounded-lg px-2 py-1 focus:border-violet-400 focus:outline-none"
						>
							{#each PIPELINE_STAGES as stage}
								<option value={stage.id}>{stage.label}</option>
							{/each}
						</select>
						{#if app.url}
							<a
								href={app.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-xs text-violet-400 hover:text-violet-300"
							>
								<i class="fa-solid fa-external-link-alt mr-1"></i>Posting
							</a>
						{/if}
						<button
							type="button"
							on:click={() => openEdit(app)}
							class="text-xs text-slate-400 hover:text-violet-400 ml-auto"
						>
							Edit
						</button>
						<button
							type="button"
							on:click={() => handleDelete(app.id)}
							class="text-xs text-rose-400 hover:text-rose-300"
						>
							Delete
						</button>
					</div>
				</Card>
			{/each}
		</div>
	{/if}
</main>
