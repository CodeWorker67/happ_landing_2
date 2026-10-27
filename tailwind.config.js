/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        happ: {
          blue: '#0891B2',
          'blue-hover': '#0E7490',
          ink: '#111827',
          muted: '#64748B',
          faint: '#94A3B8',
          gray: '#F1F5F9',
          dark: '#1E293B',
          footer: '#0B0D12',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'Helvetica Neue', 'sans-serif'],
      },
      borderRadius: {
        pill: '980px',
        card: '22px',
        btn: '16px',
      },
    },
  },
  plugins: [],
}
