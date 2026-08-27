/** Resolve app paths with the configured SvelteKit base path. */

/**
 * @param {string} path
 * @param {string} [base]
 */
export function appPath(path, base = '') {
	if (!path) return base || '/';
	if (path.startsWith('http') || path.startsWith('mailto:')) return path;
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${base}${normalized}`;
}

/**
 * @param {string} hash
 * @param {string} [base]
 */
export function homeHash(hash, base = '') {
	const fragment = hash.startsWith('#') ? hash : `#${hash}`;
	return `${base || ''}/${fragment}`.replace('//', '/');
}
