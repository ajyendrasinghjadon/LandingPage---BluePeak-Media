/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#3B82F6",      // soft blue
                secondary: "#8B5CF6",    // soft purple
                accent: "#6366F1",       // indigo accent
                darkBg: "#0F172A",
                lightBg: "#F8FAFC"
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
            },
            plugins: [],
        }
    }
}