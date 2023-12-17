import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        editorial: ["Editorial", ...fontFamily.sans],
        editorialul: ["EditorialUltraLight", ...fontFamily.sans],
        fonty: ['Fonty', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
