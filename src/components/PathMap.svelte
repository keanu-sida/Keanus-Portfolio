<script>
	import { onDestroy } from 'svelte';
	import { flagshipProject } from '$lib/data';

	export let href = flagshipProject.liveUrl;

	const DEST = 'pathtree';

	const NODES = [
		{ id: 'biochem', label: 'Biochem', x: 22, y: 41, lx: 16.2, ly: 42.4, anchor: 'end' },
		{ id: 'research', label: 'Research', x: 38, y: 16, lx: 38, ly: 10.4, anchor: 'middle' },
		{ id: 'data', label: 'Data', x: 58, y: 14, lx: 58, ly: 8.4, anchor: 'middle' },
		{ id: 'learn', label: 'Engineering', x: 36, y: 56, lx: 36, ly: 63.8, anchor: 'middle' },
		{ id: 'freelance', label: 'Freelance', x: 62, y: 52, lx: 65.8, ly: 58.8, anchor: 'start' },
		{ id: 'pathtree', label: 'PathTree', x: 77, y: 33, lx: 85, ly: 26.6, anchor: 'start', featured: true }
	];

	const EDGES = [
		['biochem', 'research'],
		['research', 'data'],
		['data', 'pathtree'],
		['biochem', 'learn'],
		['learn', 'freelance'],
		['freelance', 'pathtree']
	];

	const nodeById = Object.fromEntries(NODES.map((node) => [node.id, node]));
	const outgoing = Object.fromEntries(NODES.map((node) => [node.id, []]));
	for (const [from, to] of EDGES) outgoing[from].push(to);

	const ALL_NODE_IDS = new Set(NODES.map((node) => node.id));
	const ALL_EDGE_KEYS = new Set(EDGES.map(([a, b]) => `${a}>${b}`));

	let hoverId = null;
	let leaveTimer;

	function enter(event, id) {
		if (event.pointerType === 'touch') return;
		clearTimeout(leaveTimer);
		hoverId = id;
	}

	function leaveNode(event) {
		if (event.pointerType === 'touch') return;
		clearTimeout(leaveTimer);
		leaveTimer = setTimeout(() => {
			hoverId = null;
		}, 70);
	}

	function allSimplePaths(fromId, toId = DEST) {
		if (fromId === toId) return [[fromId]];
		const paths = [];
		const walk = (node, trail) => {
			if (node === toId) {
				paths.push([...trail]);
				return;
			}
			for (const next of outgoing[node] ?? []) {
				if (trail.includes(next)) continue;
				trail.push(next);
				walk(next, trail);
				trail.pop();
			}
		};
		walk(fromId, [fromId]);
		return paths;
	}

	function highlightFor(fromId) {
		if (!fromId || fromId === DEST) {
			return { nodes: ALL_NODE_IDS, edges: ALL_EDGE_KEYS };
		}
		const nodes = new Set();
		const edges = new Set();
		for (const path of allSimplePaths(fromId)) {
			for (const id of path) nodes.add(id);
			for (let i = 0; i < path.length - 1; i += 1) {
				edges.add(`${path[i]}>${path[i + 1]}`);
			}
		}
		return { nodes, edges };
	}

	function control(from, to) {
		const midX = (from.x + to.x) / 2;
		const midY = (from.y + to.y) / 2;
		const dx = to.x - from.x;
		const dy = to.y - from.y;
		return { cx: midX - dy * 0.16, cy: midY + dx * 0.16 };
	}

	function edgePath(a, b) {
		const from = nodeById[a];
		const to = nodeById[b];
		const { cx, cy } = control(from, to);
		return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
	}

	function chevronPoints(a, b) {
		const from = nodeById[a];
		const to = nodeById[b];
		const { cx, cy } = control(from, to);
		const t = 0.7;
		const x = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * cx + t * t * to.x;
		const y = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * cy + t * t * to.y;
		const dx = 2 * (1 - t) * (cx - from.x) + 2 * t * (to.x - cx);
		const dy = 2 * (1 - t) * (cy - from.y) + 2 * t * (to.y - cy);
		const len = Math.hypot(dx, dy) || 1;
		const ux = dx / len;
		const uy = dy / len;
		const tipX = x + ux * 1.25;
		const tipY = y + uy * 1.25;
		const leftX = x - ux * 0.35 - uy * 0.8;
		const leftY = y - uy * 0.35 + ux * 0.8;
		const rightX = x - ux * 0.35 + uy * 0.8;
		const rightY = y - uy * 0.35 - ux * 0.8;
		return `${tipX},${tipY} ${leftX},${leftY} ${rightX},${rightY}`;
	}

	function leaveCard() {
		clearTimeout(leaveTimer);
		hoverId = null;
	}

	onDestroy(() => clearTimeout(leaveTimer));

	$: isolated = Boolean(hoverId && hoverId !== DEST);
	$: highlight = highlightFor(hoverId);
	$: origin = nodeById[hoverId];
	$: caption =
		isolated && origin ? `${origin.label} → PathTree` : 'Every path leads here';
	$: destination = flagshipProject.liveUrl.replace(/^https?:\/\//, '');
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="group/map relative flex h-full min-h-[320px] lg:min-h-[520px] w-full flex-col overflow-hidden border border-line bg-ink duration-200 hover:border-leaf/50"
	aria-label="Explore {flagshipProject.name}. Career map: biochemistry, research, data, and engineering all lead to PathTree."
	on:pointerleave={leaveCard}
>
	<div class="relative min-h-[248px] flex-1 lg:min-h-[448px]">
		<svg
			viewBox="0 0 104 68"
			preserveAspectRatio="xMidYMid meet"
			class="absolute inset-0 h-full w-full max-w-none"
			aria-hidden="true"
		>
			<defs>
				<radialGradient id="path-sink" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stop-color="#c6e05c" stop-opacity="0.22" />
					<stop offset="70%" stop-color="#c6e05c" stop-opacity="0.05" />
					<stop offset="100%" stop-color="#c6e05c" stop-opacity="0" />
				</radialGradient>
			</defs>

			<circle class="path-sink" cx="77" cy="33" r="14" fill="url(#path-sink)" />

			{#each EDGES as [a, b], i}
				{@const d = edgePath(a, b)}
				{@const active = highlight.edges.has(`${a}>${b}`)}
				<path
					d={d}
					class="path-edge-base {isolated && !active ? 'is-dim' : ''}"
					style="--delay: {i * 90}ms"
				/>
				<path d={d} class="path-edge-lit {active ? 'is-active' : ''}" />
				<path d={d} class="path-edge-flow {active ? 'is-active' : ''} {isolated ? 'is-isolated' : ''}" />
				{#if active}
					<polygon class="path-chevron {isolated ? 'is-isolated' : ''}" points={chevronPoints(a, b)} />
				{/if}
			{/each}

			{#each NODES as node}
				{@const onPath = highlight.nodes.has(node.id)}
				{#if node.featured}
					<circle class="path-halo" cx={node.x} cy={node.y} r="5" />
				{/if}
				<circle
					class="path-node {node.featured ? 'is-featured' : ''} {isolated && onPath ? 'is-active' : ''} {hoverId === node.id ? 'is-origin' : ''} {isolated && !onPath ? 'is-dim' : ''}"
					cx={node.x}
					cy={node.y}
					r={node.featured ? 1.85 : hoverId === node.id ? 1.45 : 1.15}
				/>
				<text
					class="path-label {node.featured ? 'is-featured' : ''} {isolated && onPath ? 'is-active' : ''} {hoverId === node.id ? 'is-origin' : ''} {isolated && !onPath ? 'is-dim' : ''}"
					x={node.lx}
					y={node.ly}
					text-anchor={node.anchor}
				>
					{node.label}
				</text>
				<circle
					class="path-hit"
					cx={node.x}
					cy={node.y}
					r="8"
					on:pointerenter={(event) => enter(event, node.id)}
					on:pointerleave={leaveNode}
				/>
			{/each}
		</svg>
	</div>

	<div class="flex items-center justify-between gap-3 border-t border-line px-4 py-3 sm:px-5">
		<p class="eyebrow min-w-0 truncate text-paper/85">
			{#key caption}
				<span class="caption-copy inline-block">{caption}</span>
			{/key}
		</p>
		<p class="eyebrow shrink-0 text-leaf">
			{destination}
			<span class="inline-block transition-transform duration-200 group-hover/map:translate-x-0.5">↗</span>
		</p>
	</div>
</a>

<style>
	.path-sink {
		pointer-events: none;
	}

	.path-edge-base,
	.path-edge-lit,
	.path-edge-flow {
		fill: none;
		stroke-linecap: round;
		stroke-linejoin: round;
		pointer-events: none;
	}

	.path-edge-base {
		stroke: var(--line);
		stroke-width: 0.38;
		opacity: 0.9;
		stroke-dasharray: 90;
		stroke-dashoffset: 90;
		animation: draw-edge 1s ease forwards;
		animation-delay: var(--delay, 0ms);
		transition: opacity 220ms ease;
	}

	.path-edge-base.is-dim {
		opacity: 0.28;
	}

	.path-edge-lit {
		stroke: var(--leaf);
		stroke-width: 0.5;
		opacity: 0;
		transition: opacity 220ms ease;
	}

	.path-edge-lit.is-active {
		opacity: 0.55;
	}

	.path-edge-flow {
		stroke: var(--leaf);
		stroke-width: 0.55;
		opacity: 0;
		stroke-dasharray: 4 2.2;
		transition: opacity 220ms ease, stroke-width 220ms ease;
	}

	.path-edge-flow.is-active {
		opacity: 0.85;
		animation: flow-edge 1.5s linear infinite;
	}

	.path-edge-flow.is-active.is-isolated {
		opacity: 1;
		stroke-width: 0.7;
	}

	.path-chevron {
		fill: var(--leaf);
		opacity: 0.8;
		pointer-events: none;
	}

	.path-chevron.is-isolated {
		opacity: 1;
	}

	.path-node {
		fill: var(--paper-muted);
		transition: fill 200ms ease, opacity 200ms ease;
		pointer-events: none;
	}

	.path-node.is-dim,
	.path-label.is-dim {
		opacity: 0.38;
	}

	.path-node.is-active {
		fill: var(--paper);
	}

	.path-node.is-featured,
	.path-node.is-origin {
		fill: var(--leaf);
	}

	.path-halo {
		fill: color-mix(in srgb, var(--leaf) 16%, transparent);
		transform-box: fill-box;
		transform-origin: center;
		animation: halo-pulse 2.8s ease-in-out infinite;
		pointer-events: none;
	}

	.path-label {
		fill: var(--paper-muted);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 3.3px;
		font-weight: 400;
		transition: fill 200ms ease, opacity 200ms ease;
		pointer-events: none;
	}

	.path-label.is-active {
		fill: var(--paper);
	}

	.path-label.is-featured,
	.path-label.is-origin {
		fill: var(--leaf);
		font-weight: 500;
	}

	.path-hit {
		fill: transparent;
		cursor: pointer;
	}

	.caption-copy {
		animation: caption-in 280ms ease;
	}

	@keyframes draw-edge {
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes flow-edge {
		to {
			stroke-dashoffset: -6.2;
		}
	}

	@keyframes halo-pulse {
		0%,
		100% {
			transform: scale(1);
			opacity: 0.85;
		}
		50% {
			transform: scale(1.28);
			opacity: 0.4;
		}
	}

	@keyframes caption-in {
		from {
			opacity: 0.35;
			transform: translateY(2px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.path-edge-base {
			animation: none;
			stroke-dashoffset: 0;
		}

		.path-edge-flow.is-active {
			animation: none;
			stroke-dasharray: none;
			opacity: 0.85;
		}

		.path-halo,
		.caption-copy {
			animation: none;
		}
	}
</style>
