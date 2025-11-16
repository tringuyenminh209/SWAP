import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // SWAP Pastel Color Palette
      colors: {
        // Primary Colors
        'pastel-green': '#B8E6B8',
        'pastel-blue': '#A7C7E7',
        'cream': '#FFFDD0',

        // Accent Colors
        'mint': '#C1F0C1',
        'sky': '#B9D9EB',
        'sand': '#F5EFE0',

        // Neutral Colors (keeping defaults but adding custom grays)
        'gray': {
          50: '#FAFAFA',
          100: '#F4F4F5',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
      },

      // Typography
      fontFamily: {
        primary: ['Verdana', 'Geneva', 'Tahoma', 'system-ui', 'sans-serif'],
        rounded: ['var(--font-nunito)', 'Nunito', 'Quicksand', 'sans-serif'],
      },

      // Spacing (extending default Tailwind spacing)
      spacing: {
        '4': '1rem',      // 16px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
      },

      // Border Radius
      borderRadius: {
        'soft': '12px',
        'round': '20px',
      },

      // Box Shadows
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
      },

      // Container
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },

      // Transitions
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },

      // Animation
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
