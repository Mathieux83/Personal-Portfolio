export const navItems = [
	{ name: "About", link: "#about", id: 1 },
	{ name: "Projects", link: "#projects", id: 2 },
	{ name: "Testimonials", link: "#testimonials", id: 3 },
	{ name: "Experiences", link: "#experiences", id: 4 },
	{ name: "Contact", link: "#contact", id: 5 },
];

export const gridItems = [
	{
		id: 1,
		title: "I prioritize client collaboration, fostering open communication ",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "/b1.svg",
		spareImg: "",
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title: "Currently building a JS Animation library",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: "GigiHesse 2.0 - Website",
		des: 'A simple site for "GigiHesse" and learn more about him and what he does',
		img: "/test.svg",
		iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/next.svg"],
		link: "https://gigihesse.com",
	},
	{
		id: 2,
		title: "ListMe - PWA Application",
		des: "Simplify your shopping with an all-in-one shopping list management PWA app",
		img: "/ListMe.svg",
		iconLists: ["/re.svg", "/re-rout.svg", "/tail.svg", "/js.svg", "/pwa.svg"],
		link: "https://listme.fr",
	},
];

export const testimonials = [
	{
		id: 1,
		quote:
			"Collaborating with Mathieux was an absolute pleasure. His professionalism, promptness and dedication to delivering outstanding results were evident throughout our project, even if he works alone. Mathieux’s enthusiasm for every facet of development really stands out. If you are looking to elevate your website and brand, Mathieux is the perfect partner.",
		name: "GigiHesse",
		title: "Artist - Independent",
		img: "/gigi.svg",
	},
	{
		id: 2,

		quote:
			"Travailler avec Mathieux a été une expérience exceptionnelle. Sa créativité et son sens du détail ont donné vie à notre projet bien au-delà de nos attentes. Toujours à l’écoute et réactif, c’est un véritable partenaire de confiance.",
		name: "Sophie Martin",
		title: "Responsable Communication chez Nova Créations",
		img: '/sophie.svg'
	},
	{
		id: 3,
		quote:
			"Mathieux is a highly skilled developer who not only understands technical challenges but also provides innovative solutions. His ability to adapt and deliver on time makes him an invaluable asset to any project.",
		name: "David Thompson",
		title: "Project Manager at BrightTech Solutions",
		img: '/david.svg'
	},
	{
		id: 4,
		quote:
			"Nous avons collaboré avec Mathieux sur la refonte de notre plateforme. Sa rigueur, son professionnalisme ainsi que sa disponibilité ont grandement contribué au succès du projet.",
		name: "Karim Benali",
		title: "CTO de StartUp Innov",
		img: '/karim.svg'
	},
	{
		id: 5,
		quote:
			"Working with Mathieux was seamless from start to finish. His enthusiasm, problem-solving mindset, and technical knowledge made the whole process smooth and efficient.",
		name: "Emily Rodriguez",
		title: "CEO of Visionary Web Agency",
		img: '/emily.svg'
	},
];

export const companies = [
	{
		id: 1,
		name: "ovh",
		img: "/vh.svg",
		nameImg: "/ovhName.svg",
	},
	{
		id: 2,
		name: "github",
		img: "/github-mark-white.svg",
		nameImg: "/GitHub_Logo_White.svg",
	},
	{
		id: 3,
		name: "HOSTINGER",
		img: "/host.svg",
		nameImg: "/hostName.svg",
	},
	{
		id: 4,
		name: "Vercel",
		img: "/vercel.svg",
		nameImg: "/vercelName.svg",
	},
	{
		id: 5,
		name: "docker.",
		img: "/dock.svg",
		nameImg: "/dockerName.svg",
	},
];

export const workExperience = [
	{
		id: 1,
		title: "Frontend Engineer Intern",
		desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
	},
	{
		id: 2,
		title: "Mobile App Dev - JSM Tech",
		desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp2.svg",
	},
	{
		id: 3,
		title: "Freelance App Dev Project",
		desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp3.svg",
	},
	{
		id: 4,
		title: "Lead Frontend Developer",
		desc: "Developed and maintained user-facing features using modern frontend technologies.",
		className: "md:col-span-2",
		thumbnail: "/exp4.svg",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		title: "GitHub",
		link: 'https://github.com/Mathieux83'
	},
	{
		id: 2,
		title: "Discord",
		img: "/discord.svg",
		link: "https://discord.com/users/480428304390684704"
	},
	
];
