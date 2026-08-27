/** Single source of truth for identity, contact links, and site metadata. */

export const profile = {
	name: { first: 'Keanu', last: 'Sida', full: 'Keanu Sida' },
	title: 'Full Stack Developer',
	headline: 'AI-forward full-stack developer building modern web apps with TypeScript, SvelteKit, and LLM tooling.',
	tagline:
		'AI‑forward stack: TypeScript, SvelteKit/Next.js, Node.js/Express, PostgreSQL, Tailwind CSS — plus LLM tooling (OpenAI/Claude, LangChain/LangGraph), RAG, and vector databases.',
	email: 'keanu.sida@gmail.com',
	image: { src: '/images/avatar.svg', alt: 'Portrait of Keanu Sida' },
	links: {
		email: 'mailto:keanu.sida@gmail.com',
		emailWithSubject:
			'mailto:keanu.sida@gmail.com?subject=Hey, Keanu!&body=I am emailing you because I came across your website and would like to get in touch!',
		github: 'https://github.com/keanu-sida',
		linkedin: 'https://www.linkedin.com/in/keanu-sida',
		resume: '/resume.pdf'
	}
};

export const siteMeta = {
	title: 'Keanu Sida | Full Stack Developer',
	description:
		'Full-stack developer specializing in TypeScript, SvelteKit, Node.js, PostgreSQL, and AI/LLM integrations. View projects, resume, and live demos.',
	url: 'https://keanucodes.netlify.app/',
	ogImage: '/og.png',
	themeColor: '#020617'
};

export const contactChannels = [
	{
		id: 'email',
		label: 'Email',
		href: profile.links.email,
		icon: 'fa-solid fa-envelope',
		description: profile.email
	},
	{
		id: 'github',
		label: 'GitHub',
		href: profile.links.github,
		icon: 'fa-brands fa-github',
		description: 'View my code'
	},
	{
		id: 'linkedin',
		label: 'LinkedIn',
		href: profile.links.linkedin,
		icon: 'fa-brands fa-linkedin',
		description: 'Connect with me'
	},
	{
		id: 'resume',
		label: 'Resume',
		href: profile.links.resume,
		icon: 'fa-solid fa-file-pdf',
		description: 'Download PDF'
	}
];
