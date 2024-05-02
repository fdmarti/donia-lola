/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {
			backgroundImage: {
				'nosotros-banner': "url('/images/nosotros/nosotros-banner.webp')",
				'contacto-banner': "url('/images/contacto/contacto-banner.webp')",
				'productos-banner': "url('/images/productos/productos-banner.webp')",
				'recetas-banner': "url('/images/recetas/recetas-banner.webp')",
			},
		},
		fontFamily: {
			title: ['brush script mt, curiseve'],
		},
	},
	plugins: [require('flowbite/plugin')],
	safelist: ['bg-nosotros-banner', 'bg-contacto-banner', 'bg-productos-banner', 'bg-recetas-banner'],
};
