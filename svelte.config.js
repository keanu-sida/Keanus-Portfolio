import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const base = process.env.BASE_PATH ?? '';

/**
 * Directories under static/ that hold separately built apps. They resolve via
 * their own index.html at runtime, which the prerender crawler can't follow.
 */
const SELF_HOSTED_APPS = ['/pipeline'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base
		},
		prerender: {
			handleHttpError({ path, message }) {
				if (SELF_HOSTED_APPS.some((app) => path.startsWith(app))) return;
				throw new Error(message);
			},
			handleMissingId({ path, id }) {
				if (SELF_HOSTED_APPS.some((app) => path.startsWith(app))) return;
				throw new Error(`Missing element id="${id}" on ${path}`);
			}
		}
	},
	preprocess: vitePreprocess()
};

export default config;
