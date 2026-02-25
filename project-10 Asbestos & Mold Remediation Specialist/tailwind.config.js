/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#F0FDFA',
                    100: '#D1FAE5',
                    200: '#99F6E4',
                    300: '#5EEAD4',
                    400: '#2D1917',
                    500: '#0D9488',
                    600: '#115E59',
                    700: '#0F766E',
                    800: '#115E59',
                    900: '#134E4A',
                    950: '#042F2E',
                },
                secondary: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                    950: '#030712',
                }
            },
            fontFamily: {
                'body': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
                'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
