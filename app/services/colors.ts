const themes = [
  {
    name: "default",
    colors: [
      "#000000",
      "hsl(220 8.9% 46.1%)",
      "hsl(0 0% 100%)",
      "hsl(224 71.4% 4.1%)",
    ],
  },
  { name: "aqua", colors: ["#00FFFF", "#800080", "#0000FF", "#000000"] },
  { name: "black", colors: ["#000000", "#FFFFFF", "#333333", "#666666"] },
  { name: "bumblebee", colors: ["#FFFF00", "#FFA500", "#000080", "#333333"] },
  { name: "cmyk", colors: ["#00FFFF", "#FF00FF", "#FFFF00", "#000000"] },
  { name: "corporate", colors: ["#4B0082", "#0000FF", "#000000", "#FFFFFF"] },
  { name: "cupcake", colors: ["#FFB6C1", "#FFA07A", "#20B2AA", "#000000"] },
  { name: "cyberpunk", colors: ["#FF1493", "#00FFFF", "#800080", "#000000"] },
  { name: "dark", colors: ["#4B0082", "#FF00FF", "#006400", "#FFFFFF"] },
  { name: "dracula", colors: ["#FF69B4", "#00FFFF", "#FFA500", "#000000"] },
  { name: "emerald", colors: ["#50C878", "#0000FF", "#FF0000", "#000000"] },
  { name: "fantasy", colors: ["#800080", "#0000FF", "#FFA500", "#000000"] },
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
