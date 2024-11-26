const themes = [
  {
    name: "default",
    colors: [
      "hsl(var(--primary))",
      "hsl(var(--muted-foreground))",
      "hsl(var(--card))",
      "hsl(var(--card-foreground))",
    ],
  },
  { name: "light", colors: ["#1a365d", "#718096", "#ffffff", "#2d3748"] },
  { name: "dark", colors: ["#81e6d9", "#9ae6b4", "#1a202c", "#e2e8f0"] },
  { name: "cupcake", colors: ["#d53f8c", "#805ad5", "#fefcbf", "#44337a"] },
  { name: "bumblebee", colors: ["#744210", "#975a16", "#fffbeb", "#2b2c34"] },
  { name: "emerald", colors: ["#046c4e", "#2c7a7b", "#ecfdf5", "#1a202c"] },
  { name: "corporate", colors: ["#3182ce", "#63b3ed", "#ebf8ff", "#2a4365"] },
  { name: "synthwave", colors: ["#e779c1", "#9f7aea", "#2d3748", "#fefcbf"] },
  { name: "retro", colors: ["#c53030", "#e53e3e", "#fffaf0", "#2d3748"] },
  { name: "cyberpunk", colors: ["#ff0080", "#7928ca", "#011627", "#fdf6e3"] },
  { name: "valentine", colors: ["#9b2c2c", "#feb2b2", "#fff5f7", "#63171b"] },
  { name: "halloween", colors: ["#d97706", "#fbbf24", "#292524", "#f8fafc"] },
  { name: "garden", colors: ["#047857", "#10b981", "#ecfdf5", "#064e3b"] },
  { name: "forest", colors: ["#2f855a", "#48bb78", "#f0fff4", "#1a202c"] },
  { name: "aqua", colors: ["#0e7490", "#06b6d4", "#ecfeff", "#164e63"] },
  { name: "lofi", colors: ["#1f2937", "#6b7280", "#f9fafb", "#111827"] },
  { name: "pastel", colors: ["#7c3aed", "#a78bfa", "#f5f3ff", "#4c1d95"] },
  { name: "fantasy", colors: ["#92400e", "#f59e0b", "#fffbeb", "#451a03"] },
  { name: "wireframe", colors: ["#374151", "#6b7280", "#f3f4f6", "#1f2937"] },
  { name: "black", colors: ["#f8fafc", "#94a3b8", "#020617", "#e2e8f0"] },
  { name: "luxury", colors: ["#b91c1c", "#fecaca", "#fffbeb", "#7f1d1d"] },
  { name: "dracula", colors: ["#ff79c6", "#bd93f9", "#282a36", "#f8f8f2"] },
  { name: "cmyk", colors: ["#0891b2", "#ec4899", "#fefce8", "#164e63"] },
  { name: "autumn", colors: ["#78350f", "#d97706", "#fffbeb", "#451a03"] },
  { name: "business", colors: ["#1e40af", "#3b82f6", "#eff6ff", "#1e3a8a"] },
  { name: "acid", colors: ["#84cc16", "#22d3ee", "#f8fafc", "#365314"] },
  { name: "lemonade", colors: ["#65a30d", "#facc15", "#f7fee7", "#3f6212"] },
  { name: "night", colors: ["#6d28d9", "#8b5cf6", "#1e1b4b", "#e0e7ff"] },
  { name: "coffee", colors: ["#78350f", "#92400e", "#fef3c7", "#44403c"] },
  { name: "winter", colors: ["#0369a1", "#0ea5e9", "#f0f9ff", "#0c4a6e"] },
];

const backgrounds = [
  { name: "None", gradient: "" },
  {
    name: "Sunset",
    gradient: "bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500",
  },
  {
    name: "Fire",
    gradient: "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500",
  },
  { name: "Ocean", gradient: "bg-gradient-to-r from-green-400 to-blue-500" },
  { name: "Forest", gradient: "bg-gradient-to-r from-green-500 to-green-700" },
  {
    name: "Twilight",
    gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400",
  },
  {
    name: "Autumn",
    gradient: "bg-gradient-to-r from-red-700 via-orange-700 to-yellow-700",
  },
  { name: "Night", gradient: "bg-gradient-to-r from-gray-900 to-black" },
  { name: "Azure", gradient: "bg-gradient-to-r from-blue-400 to-cyan-300" },
  { name: "Rose", gradient: "bg-gradient-to-r from-pink-300 to-pink-200" },
  { name: "Mint", gradient: "bg-gradient-to-r from-green-300 to-green-200" },
];

const borders = [
  { name: "default", class: "" },
  { name: "retro", class: "rounded-none border-r-4 border-b-4 border-black" },
  { name: "border", class: "rounded-lg border-2 border-black shadow-xl" },
];

export { themes, backgrounds, borders };
