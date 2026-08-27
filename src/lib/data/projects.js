/** Featured GitHub projects and live deployed applications. */

export const featuredProjects = [
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
		description:
			'Content-based recommendation system using collaborative filtering and machine learning algorithms.',
		tech: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Flask']
	}
];

export const liveProjects = [
	{
		name: 'Job Pipeline Tracker',
		description:
			'Full-stack job application tracker with pipeline stages, filters, and CSV import/export — built with SvelteKit.',
		url: '/tracker',
		liveUrl: '/tracker',
		image: null,
		tech: ['SvelteKit', 'JavaScript', 'Tailwind CSS', 'localStorage'],
		features: [
			'Pipeline status tracking',
			'Search and filter',
			'CSV import/export',
			'Responsive CRUD UI'
		],
		showDetails: false,
		isInternal: true
	},
	{
		name: 'Blotting Innovations',
		description:
			'Revolutionary biotech platform for high-throughput western blotting solutions, enhancing protein analysis efficiency and precision in laboratories',
		url: 'https://blottinginnovations.com',
		image: '/images/blotting-sample.svg',
		tech: ['HubSpot CMS', 'HTML', 'CSS', 'JavaScript'],
		features: [
			'96-well western blot systems',
			'Laboratory workflow optimization',
			'High-throughput protein analysis',
			'Responsive design'
		],
		showDetails: false
	},
	{
		name: 'EcoLink',
		description:
			'Community-driven platform to make sustainable living fun, easy, and social — join EcoSquads, discover your EcoPersona, and explore topics with EcoPods.',
		url: 'https://github.com/eduenez33/March-Code-jam',
		liveUrl: 'https://eduenez33.github.io/March-Code-jam/',
		image: '/images/ecolink-sample.svg',
		tech: ['HTML', 'CSS', 'JavaScript'],
		features: ['EcoSquads', 'EcoPersona', 'EcoPods', 'Responsive design']
	}
];
