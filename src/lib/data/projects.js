/**
 * Selected work renders as case studies (problem / approach / result).
 * Compact “also shipped” rows cover the rest. Either may omit `repo`
 * (private source) or `liveUrl` (nothing deployed).
 */

export const caseStudies = [
	{
		slug: 'pathtree',
		name: 'PathTree',
		kicker: 'Flagship product',
		year: '2025',
		problem:
			'Career advice is a list of job titles. People cannot see the branches — time, credentials, salary — or what they can still plant.',
		approach:
			'Treat careers as maps. A WebGL helix home, a Pixi orchard of skills, filterable credential trees, and Trellis — an in-app agent — on a Node/Express + SQLite API.',
		result: 'A live product at pathtree.app: browse a path, tend skills, share what you plant.',
		tech: ['Vite', 'Three.js', 'Pixi.js', 'Node.js', 'Express', 'SQLite'],
		liveUrl: 'https://pathtree.app',
		image: '/images/pathtree-sample.svg',
		imageAlt: 'PathTree helix home with career-path scenes',
		featured: true
	},
	{
		slug: 'pipeline',
		name: 'Pipeline',
		kicker: 'Personal tool',
		year: '2025',
		problem:
			'Tracking applications in spreadsheets leaks data to the cloud and hides the shape of the funnel.',
		approach:
			'A local-only React + TypeScript kanban. IndexedDB, no account, resume versions, JSON export. The app is served from this site.',
		result: 'A private tracker you can run in the browser — nothing leaves the machine.',
		tech: ['React', 'TypeScript', 'IndexedDB', 'Tailwind CSS'],
		liveUrl: '/pipeline/',
		repo: 'https://github.com/keanu-sida/pipeline',
		image: '/images/pipeline-sample.svg',
		imageAlt: 'Pipeline job tracker kanban board',
		selfHosted: true
	},
	{
		slug: 'ecoblox',
		name: 'ECOBLOX',
		kicker: 'Client site',
		year: '2025',
		problem:
			'A modular AI/HPC data center company needed a public site that could carry product, partner, and news content without reading like a generic industrial brochure.',
		approach:
			'Six months on WordPress: custom theme work, layout, media, and ongoing front-end so the story stayed product-first as announcements scaled.',
		result: 'ecoblox.com — the live marketing site for ECOBLOX MDCs, partners, and newsroom.',
		tech: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
		liveUrl: 'https://ecoblox.com',
		image: '/images/ecoblox-sample.svg',
		imageAlt: 'ECOBLOX marketing site for modular AI/HPC data centers'
	},
	{
		slug: 'blotting',
		name: 'Blotting Innovations',
		kicker: 'Client site',
		year: '2024',
		problem:
			'A biotech company needed to explain high-throughput western blotting without looking like a generic lab-equipment catalog.',
		approach:
			'Custom HTML, CSS, and JavaScript on HubSpot CMS — product story first, responsive layout, lab-accurate copy.',
		result: 'blottinginnovations.com, used as the public face of the 96-well blot systems.',
		tech: ['HubSpot CMS', 'HTML', 'CSS', 'JavaScript'],
		liveUrl: 'https://blottinginnovations.com',
		image: '/images/blotting-sample.svg',
		imageAlt: 'Blotting Innovations marketing site'
	}
];

export const alsoShipped = [
	{
		name: 'Spots',
		description: 'Photo-sharing UI built to a Figma spec across three breakpoints.',
		tech: ['HTML5', 'CSS3', 'JavaScript'],
		liveUrl: 'https://keanu-sida.github.io/se_project_spots/',
		repo: 'https://github.com/keanu-sida/se_project_spots'
	},
	{
		name: 'EcoLink',
		description: 'Community sustainable-living jam site — squads, personas, pods.',
		tech: ['HTML', 'CSS', 'JavaScript'],
		liveUrl: 'https://eduenez33.github.io/March-Code-jam/',
		repo: 'https://github.com/eduenez33/March-Code-jam'
	},
	{
		name: 'NeetMeet',
		description: 'FastAPI service that scores meeting equity from transcripts.',
		tech: ['Python', 'FastAPI', 'PostgreSQL'],
		private: true
	},
	{
		name: 'Cancellation Predictor',
		description: 'Hotel booking cancellation model, 85% accuracy.',
		tech: ['Python', 'scikit-learn'],
		liveUrl: 'https://keanu-sida.github.io/hotelML/index.html'
	},
	{
		name: 'Genomic Analysis',
		description: 'DNA sequence analysis with R/Python and interactive viz.',
		tech: ['R', 'Python', 'Shiny'],
		liveUrl: 'https://keanu-sida.github.io/IUD-study.pdf'
	},
	{
		name: 'Movie Recommender',
		description: 'Content-based recommendations with collaborative filtering.',
		tech: ['Python', 'Flask', 'scikit-learn'],
		liveUrl: 'https://keanu-sida.github.io/MovieRecommendationSystem/index.html',
		repo: 'https://github.com/keanu-sida/movie-recommendation-system'
	}
];

export const flagshipProject = caseStudies.find((project) => project.featured) ?? caseStudies[0];
