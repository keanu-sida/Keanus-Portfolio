<script>
	import { flagshipProject } from '$lib/data';

	export let href = flagshipProject.liveUrl;

	const NODES = [
		{ id: 'biochem', label: 'Biochem', x: 10, y: 70 },
		{ id: 'research', label: 'Research', x: 24, y: 28 },
		{ id: 'data', label: 'Data', x: 50, y: 16 },
		{ id: 'learn', label: 'Engineering', x: 40, y: 82 },
		{ id: 'freelance', label: 'Freelance', x: 64, y: 58 },
		{ id: 'pathtree', label: 'PathTree', x: 88, y: 36, featured: true }
	];

	const EDGES = [
		['biochem', 'research'],
		['research', 'data'],
		['biochem', 'learn'],
		['learn', 'freelance'],
		['freelance', 'pathtree'],
		['data', 'pathtree']
	];

	let hoverId = 'biochem';
	let svgEl;

	function nodeMap() {
		return Object.fromEntries(NODES.map((node) => [node.id, node]));
	}

	function neighbors() {
		const graph = {};
		for (const node of NODES) graph[node.id] = [];
		for (const [a, b] of EDGES) {
			graph[a].push(b);
			graph[b].push(a);
		}
		return graph;
	}

	function pathBetween(fromId, toId = 'pathtree') {
		if (fromId === toId) return [fromId];
		const graph = neighbors();
		const queue = [fromId];
		const prev = { [fromId]: null };
		while (queue.length) {
			const current = queue.shift();
			for (const next of graph[current]) {
				if (next in prev) continue;
				prev[next] = current;
				if (next === toId) {
					const path = [toId];
					let walk = toId;
					while (prev[walk]) {
						walk = prev[walk];
						path.push(walk);
					}
					return path.reverse();
				}
				queue.push(next);
			}
		}
		return [fromId];
	}

	$: active = new Set(pathBetween(hoverId));
	$: nodes = nodeMap();

	function control(from, to) {
		const midX = (from.x + to.x) / 2;
		const midY = (from.y + to.y) / 2;
		const dx = to.x - from.x;
		const dy = to.y - from.y;
		return { cx: midX - dy * 0.18, cy: midY + dx * 0.18 };
	}

	function edgePath(a, b) {
		const from = nodes[a];
		const to = nodes[b];
		const { cx, cy } = control(from, to);
		return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
	}

	function edgeActive(a, b) {
		return active.has(a) && active.has(b);
	}

	function onMove(event) {
		if (!svgEl) return;
		const rect = svgEl.getBoundingClientRect();
		const x = ((event.clientX - rect.left) / rect.width) * 100;
		const y = ((event.clientY - rect.top) / rect.height) * 100;
		let best = NODES[0].id;
		let bestDist = Infinity;
		for (const node of NODES) {
			const dist = (node.x - x) ** 2 + (node.y - y) ** 2;
			if (dist < bestDist) {
				bestDist = dist;
				best = node.id;
			}
		}
		hoverId = best;
	}
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="relative block h-full min-h-[320px] lg:min-h-[520px] w-full overflow-hidden border border-line bg-ink cursor-pointer"
	aria-label="Explore {flagshipProject.name} — interactive path map"
	on:pointermove={onMove}
	on:pointerleave={() => (hoverId = 'biochem')}
>
	<svg
		bind:this={svgEl}
		viewBox="0 0 100 100"
		preserveAspectRatio="xMidYMid meet"
		class="absolute inset-0 h-full w-full path-map"
		aria-hidden="true"
	>
		{#each EDGES as [a, b], i}
			<path
				d={edgePath(a, b)}
				class="path-edge {edgeActive(a, b) ? 'is-active' : ''}"
				style="--delay: {i * 120}ms"
			/>
		{/each}
		{#each NODES as node}
			{#if node.featured}
				<circle class="path-halo" cx={node.x} cy={node.y} r="4.2" />
			{/if}
			<circle
				class="path-node {node.featured ? 'is-featured' : ''} {active.has(node.id) ? 'is-active' : ''}"
				cx={node.x}
				cy={node.y}
				r={node.featured ? 1.7 : 1.15}
			/>
			<text
				class="path-label {node.featured ? 'is-featured' : ''} {active.has(node.id) ? 'is-active' : ''}"
				x={node.x > 70 ? node.x - 2.4 : node.x + 2.4}
				y={node.y - 2.6}
				text-anchor={node.x > 70 ? 'end' : 'start'}
			>
				{node.label}
			</text>
		{/each}
	</svg>
	<div class="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
		<p class="eyebrow hidden sm:block text-paper/80">Hover a node — every path leads here</p>
		<p class="eyebrow text-leaf truncate">
			{flagshipProject.liveUrl.replace(/^https?:\/\//, '')} ↗
		</p>
	</div>
</a>

<style>
	.path-edge {
		fill: none;
		stroke: var(--line);
		stroke-width: 0.35;
		stroke-linecap: round;
		opacity: 0.7;
		stroke-dasharray: 80;
		stroke-dashoffset: 80;
		animation: draw-edge 1.1s ease forwards;
		animation-delay: var(--delay, 0ms);
	}

	.path-edge.is-active {
		stroke: var(--leaf);
		stroke-width: 0.55;
		opacity: 1;
	}

	.path-node {
		fill: var(--paper-muted);
	}

	.path-node.is-active,
	.path-node.is-featured {
		fill: var(--leaf);
	}

	.path-halo {
		fill: color-mix(in srgb, var(--leaf) 18%, transparent);
	}

	.path-label {
		fill: var(--paper-muted);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 3.2px;
		font-weight: 400;
	}

	.path-label.is-active {
		fill: var(--paper);
	}

	.path-label.is-featured {
		fill: var(--leaf);
		font-weight: 500;
	}

	@keyframes draw-edge {
		to {
			stroke-dashoffset: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.path-edge {
			animation: none;
			stroke-dashoffset: 0;
		}
	}
</style>
