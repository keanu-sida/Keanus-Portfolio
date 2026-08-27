/** Single source of truth for identity, contact links, and site metadata. */

export const profile = {
	name: { first: 'Keanu', last: 'Sida', full: 'Keanu Sida' },
	title: 'Full Stack Developer',
	headline:
		'Founder of PathTree. Frontend-led full-stack developer building products with TypeScript, Node.js, and LLM tooling.',
	tagline:
		'Frontend-led full-stack. I design the interface, then the system behind it — currently PathTree, an interactive career map.',
	email: 'keanu.sida@gmail.com',
	availability: 'Available for frontend and full-stack roles',
	links: {
		email: 'mailto:keanu.sida@gmail.com',
		emailWithSubject:
			'mailto:keanu.sida@gmail.com?subject=Hey, Keanu!&body=I am emailing you because I came across your website and would like to get in touch!',
		github: 'https://github.com/keanu-sida',
		linkedin: 'https://www.linkedin.com/in/keanu-sida',
		pathtree: 'https://pathtree.app',
		resume: '/resume.pdf'
	}
};

export const siteMeta = {
	title: 'Keanu Sida | Full Stack Developer',
	description:
		'Full-stack developer and founder of PathTree. TypeScript, SvelteKit, Node.js, and LLM tooling — selected work, resume, and live demos.',
	url: 'https://keanucodes.netlify.app/',
	ogImage: '/og.png',
	themeColor: '#0b0c0a'
};

export const colophon = {
	lede: 'This site is the stack, not a wrapper around it.',
	items: [
		'SvelteKit 1 + adapter-static + Vite',
		'Design tokens in Tailwind; content in src/lib/data',
		'Resume PDF generated from the same modules as this page',
		'Motion honors prefers-reduced-motion'
	]
};

export const contactChannels = [
	{
		id: 'github',
		label: 'GitHub',
		href: profile.links.github
	},
	{
		id: 'linkedin',
		label: 'LinkedIn',
		href: profile.links.linkedin
	},
	{
		id: 'resume',
		label: 'Resume',
		href: profile.links.resume
	}
];
