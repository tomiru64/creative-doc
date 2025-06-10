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
        // メイン背景グラデーション
        bgStart: "#1a1a1a",
        bgMiddle: "#2a2a2a",
        bgEnd: "#3a3a3a",

        // コンポーネント背景
        headerBg: "#1e1e1e",
        cardBg: "#232323",

        // アクセントカラー
        accent: "#00d4ff",

        // テキストカラー
        textPrimary: "#e2e8f0",
        textSecondary: "#cbd5e1",
        textMuted: "#94a3b8",
        textLight: "#f1f5f9",
        textAccent: "#f0f9ff",
      },
    },
  },
  plugins: [],
};

export default config;
