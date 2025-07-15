import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
          glow: "hsl(var(--primary-glow))",
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
        cyber: {
          blue: "hsl(var(--cyber-blue))",
          glow: "hsl(var(--cyber-blue-glow))",
          dark: "hsl(var(--cyber-dark))",
          card: "hsl(var(--cyber-card))",
          border: "hsl(var(--cyber-border))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'fade-in': {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        'beat-glow': {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.8",
            boxShadow: "0 0 0 rgba(0, 247, 255, 0.1)",
          },
          "50%": {
            transform: "scale(1.08)",
            opacity: "1",
            boxShadow:
              "0 0 25px rgba(0, 247, 255, 0.6), 0 0 40px rgba(0, 247, 255, 0.3)",
          },
        },
      },
      animation: {
        'fade-in': "fade-in 0.6s ease-out",
        'beat-glow': "beat-glow 1.6s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-cyber': "var(--gradient-primary)",
        'gradient-subtle': "var(--gradient-subtle)",
        'gradient-hero': "var(--gradient-hero)",
        'dot-grid': "radial-gradient(circle, #00f7ff 1px, transparent 1px)",
      },
      boxShadow: {
        'cyber': "var(--shadow-cyber)",
        'cyber-glow': "var(--glow-cyber)",
        'card-cyber': "var(--shadow-card)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
