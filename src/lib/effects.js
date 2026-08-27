// Svelte actions — motion is opt-in and honors reduced-motion.

/**
 * Reveal on scroll using IntersectionObserver.
 * Usage: use:reveal={{ threshold: 0.15, once: true, delay: 0 }}
 */
export function reveal(node, options = {}) {
	const { threshold = 0.15, root = null, rootMargin = '0px', once = true, delay = 0 } = options;

	const prefersReducedMotion =
		typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReducedMotion) {
		return { destroy() {} };
	}

	node.style.opacity = '0';
	node.style.transform = 'translateY(8px)';
	node.style.transition = `opacity 420ms ease, transform 520ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;

	let failsafe;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					clearTimeout(failsafe);
					requestAnimationFrame(() => {
						node.style.opacity = '1';
						node.style.transform = 'translateY(0)';
					});
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.style.opacity = '0';
					node.style.transform = 'translateY(8px)';
				}
			});
		},
		{ threshold, root, rootMargin }
	);

	observer.observe(node);

	failsafe = setTimeout(() => {
		node.style.opacity = '1';
		node.style.transform = 'translateY(0)';
	}, 900);

	return {
		destroy() {
			clearTimeout(failsafe);
			observer.disconnect();
		}
	};
}
