/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Figtree: ["Figtree", "sans-serif"],
			},

			colors: {
				primary: "#fff",
				secondary: "#213170",
				trinary: "#C5E5FF",
				text: "#171717",
			},

			borderRadius: {
				xxl: "40px",
			},
			backgroundImage: {
				Pharmacy: "url('../../assets/Rectangle 70.svg')",
				Clinic: "url('../../assets/Rectangle 71.svg')",
				Disease: "url('../../assets/Rectangle 75.svg')",
				Drugs: "url('../../assets/Rectangle 74.svg')",
				Clinic2: "url('../../assets/Rectangle 73.svg')",
				Jinx: "url('../../assets/Rectangle 76.svg')",
				Dyven: "url('../../assets/Rectangle 77.svg')",
				
			},
		},
	},
	plugins: [],
};
