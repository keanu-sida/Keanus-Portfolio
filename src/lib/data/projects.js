/**
 * Featured projects render as icon cards; live projects render as rich preview
 * cards. Either may omit `repo` (private source) or `href` (nothing deployed).
 */

export const featuredProjects = [
	{
		name: 'NeetMeet',
		icon: 'fa-solid fa-chart-simple',
		description:
			'FastAPI service that scores meeting equity from transcripts — talk-time, interruptions, and dominance — behind a REST API with a demo UI.',
		tech: ['Python', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'Docker'],
		highlights: [
			'REST endpoints with SQLite for local dev and Postgres in production',
			'Optional Celery/Redis workers for async transcript processing',
			'Docker-ready deployment'
		],
		private: true
	},
	{
		name: 'Cancellation Predictor',
		icon: 'fa-solid fa-hotel',
		href: 'https://keanu-sida.github.io/hotelML/index.html',
		description:
			'Machine learning model using Pandas, NumPy, and sklearn to predict hotel booking cancellations with 85% accuracy.',
		tech: ['Python', 'Pandas', 'NumPy', 'sklearn', 'Jupyter']
	},
	{
		name: 'Genomic Analysis Tool',
		icon: 'fa-solid fa-dna',
		href: 'https://keanu-sida.github.io/IUD-study.pdf',
		description:
			'Bioinformatics application for DNA sequence analysis using R and Python with interactive visualizations.',
		tech: ['R', 'Python', 'Bioconductor', 'Plotly', 'Shiny']
	},
	{
		name: 'Movie Recommender',
		icon: 'fa-solid fa-film',
		href: 'https://keanu-sida.github.io/MovieRecommendationSystem/index.html',
		repo: 'https://github.com/keanu-sida/movie-recommendation-system',
		description:
			'Content-based recommendation system using collaborative filtering and machine learning algorithms.',
		tech: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Flask']
	}
];

export const liveProjects = [
	{
		name: 'Pipeline',
		description:
			'Privacy-first job application tracker for managing an entry-level software engineering search. All data stays in your browser — kanban board, stats, and JSON export.',
		liveUrl: '/pipeline/',
		repo: 'https://github.com/keanu-sida/pipeline',
		image: '/images/pipeline-sample.svg',
		imageAlt: 'Pipeline job tracker kanban board',
		tech: ['React', 'TypeScript', 'IndexedDB', 'Tailwind CSS'],
		features: [
			'Kanban pipeline view',
			'Local-only private storage',
			'Resume version tracking',
			'JSON backup export'
		],
		// Separately built SPA served from /static — needs a full page load, not client routing.
		selfHosted: true
	},
	{
		name: 'Spots',
		description:
			'Responsive social platform for sharing photos — profile editing, post interactions, and a layout built to a Figma spec across three breakpoints.',
		liveUrl: 'https://keanu-sida.github.io/se_project_spots/',
		repo: 'https://github.com/keanu-sida/se_project_spots',
		image: '/images/spots-sample.svg',
		imageAlt: 'Spots responsive photo-sharing grid',
		tech: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
		features: [
			'Three-column desktop grid, single-column mobile',
			'Profile editing and post interactions',
			'CSS Grid, Flexbox, and custom properties',
			'Built to a Figma design spec'
		]
	},
	{
		name: 'Blotting Innovations',
		description:
			'Biotech platform for high-throughput western blotting solutions, enhancing protein analysis efficiency and precision in laboratories.',
		liveUrl: 'https://blottinginnovations.com',
		image: '/images/blotting-sample.svg',
		imageAlt: 'Blotting Innovations marketing site',
		tech: ['HubSpot CMS', 'HTML', 'CSS', 'JavaScript'],
		features: [
			'96-well western blot systems',
			'Laboratory workflow optimization',
			'High-throughput protein analysis',
			'Responsive design'
		]
	},
	{
		name: 'EcoLink',
		description:
			'Community-driven platform to make sustainable living fun, easy, and social — join EcoSquads, discover your EcoPersona, and explore topics with EcoPods.',
		liveUrl: 'https://eduenez33.github.io/March-Code-jam/',
		repo: 'https://github.com/eduenez33/March-Code-jam',
		image: '/images/ecolink-sample.svg',
		imageAlt: 'EcoLink sustainable living platform',
		tech: ['HTML', 'CSS', 'JavaScript'],
		features: ['EcoSquads', 'EcoPersona', 'EcoPods', 'Responsive design']
	}
];
