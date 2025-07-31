/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Button variants and colors
    'bg-primary',
    'bg-primary/90',
    'text-primary-foreground',
    'bg-secondary',
    'bg-secondary/80',
    'text-secondary-foreground',
    'bg-accent',
    'bg-accent/90',
    'bg-accent/20',
    'text-accent-foreground',
    'bg-destructive',
    'bg-destructive/90',
    'text-destructive-foreground',
    'bg-background',
    'text-primary',
    'border-primary',
    'hover:bg-primary',
    'hover:text-primary-foreground',
    'hover:bg-secondary/80',
    'hover:bg-accent/90',
    'hover:bg-accent/20',
    'hover:bg-destructive/90',
    'focus-visible:ring-ring',
    'focus-visible:ring-offset-2',
    // Card colors
    'bg-card',
    'text-card-foreground',
    'bg-muted',
    'bg-muted/50',
    'text-muted-foreground',
    // Status colors
    'text-success',
    'text-warning',
    'text-info',
    'bg-success/20',
    'bg-info/10',
    // Common layout classes
    'shadow-sm',
    'shadow-md',
    'hover:shadow-md',
    'hover:shadow-xl',
    'ring-primary/30'
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}