// Svelte actions for small, tasteful effects

/**
 * Reveal on scroll using IntersectionObserver
 * Usage: use:reveal={{ threshold: 0.2, once: true, delay: 0 }}
 */
export function reveal(node, options = {}) {
  const { threshold = 0.2, root = null, rootMargin = '0px', once = true, delay = 0 } = options;

  node.style.opacity = '0';
  node.style.transform = 'translateY(12px)';
  node.style.transition = `opacity 500ms ease, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
        });
        if (once) observer.unobserve(node);
      } else if (!once) {
        node.style.opacity = '0';
        node.style.transform = 'translateY(12px)';
      }
    });
  }, { threshold, root, rootMargin });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

/**
 * Subtle 3D tilt and spotlight on hover
 * Usage: use:tilt={{ max: 8, scale: 1.02 }}
 */
export function tilt(node, options = {}) {
  const { max = 8, scale = 1.02, perspective = 700 } = options;

  node.style.transformStyle = 'preserve-3d';
  node.style.willChange = 'transform';

  function handleMove(event) {
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width; // 0..1
    const py = (event.clientY - rect.top) / rect.height; // 0..1
    const rx = (py - 0.5) * (max * -2);
    const ry = (px - 0.5) * (max * 2);

    node.style.transform = `perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
    node.style.setProperty('--spotlight-x', `${px * 100}%`);
    node.style.setProperty('--spotlight-y', `${py * 100}%`);
  }

  function reset() {
    node.style.transform = 'perspective(0) rotateX(0deg) rotateY(0deg) scale(1)';
  }

  node.addEventListener('mousemove', handleMove);
  node.addEventListener('mouseleave', reset);

  return {
    destroy() {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', reset);
    }
  };
}


