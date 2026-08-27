/** Shared navigation — portfolio sections and external apps. */

export const navTabs = [
	{ name: 'Skills', link: '#skills', isRoute: false },
	{ name: 'Projects', link: '#projects', isRoute: false },
	{ name: 'Live', link: '#live-projects', isRoute: false },
	{ name: 'Resume', link: '#resume', isRoute: false },
	// Separately built SPA served from /static, so it needs a full page load.
	{ name: 'Pipeline', link: '/pipeline/', isRoute: true, selfHosted: true },
	{ name: 'About', link: '#about', isRoute: false },
	{ name: 'Contact', link: '#contact', isRoute: false }
];
