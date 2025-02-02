const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
	theme: {
		extend: {
			screens: {
				sm: "480px", // Kichik ekranlar
				md: "800px", // O'rta ekranlar
				lg: "1024px", // Katta ekranlar
				xl: "1280px", // Juda katta ekranlar
				"2xl": "1536px", // Juda katta ekranlar uchun (2x)
			},
		},
	},
	plugins: [flowbite.plugin()],
};
