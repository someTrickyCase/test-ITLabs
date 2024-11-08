import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "placeholder-gray": "#737373",
                brown: "#4E3000",
                "primary-green": "#4CAF50",
                "secondary-green": "#80BB00",
                orange: "#EC5937",
                gray: "#666",
            },
        },
    },
    plugins: [],
};
export default config;
