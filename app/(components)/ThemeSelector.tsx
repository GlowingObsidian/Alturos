"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const themes = [
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
  { name: "Sunset", gradient: "bg-gradient-to-r from-orange-500 to-blue-500" },
  { name: "Fire", gradient: "bg-gradient-to-r from-red-500 to-yellow-500" },
  { name: "Forest", gradient: "bg-gradient-to-r from-green-500 to-teal-500" },
  { name: "Ocean", gradient: "bg-gradient-to-r from-blue-500 to-purple-500" },
];

const styles = [
  { name: "default", class: "" },
  { name: "retro", class: "rounded-none" },
  { name: "border", class: "rounded-lg" },
];

export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0]);
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [showAllBackgrounds, setShowAllBackgrounds] = useState(false);

  const visibleBackgrounds = showAllBackgrounds
    ? backgrounds
    : backgrounds.slice(0, 4);

  return (
    <div className="w-72 rounded-lg p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Themes</h2>
          <Select
            value={selectedTheme.name}
            onValueChange={(value) =>
              setSelectedTheme(
                themes.find((theme) => theme.name === value) || themes[0]
              )
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              {themes.map((theme) => (
                <SelectItem key={theme.name} value={theme.name}>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {theme.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    {theme.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Background</h2>
          <div className="grid grid-cols-2 gap-2">
            {visibleBackgrounds.map((bg) => (
              <button
                key={bg.name}
                className={`h-12 rounded-md ${bg.gradient} ${
                  selectedBackground.name === bg.name
                    ? "ring-2 ring-blue-500"
                    : ""
                }`}
                onClick={() => setSelectedBackground(bg)}
              >
                {bg.name === "None" && <span className="text-black">None</span>}
              </button>
            ))}
          </div>
          {backgrounds.length > 4 && (
            <Button
              variant="outline"
              className="w-full mt-2"
              onClick={() => setShowAllBackgrounds(!showAllBackgrounds)}
            >
              {showAllBackgrounds ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show More
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Style</h2>
          <div className="grid grid-cols-3 gap-2">
            {styles.map((style) => (
              <button
                key={style.name}
                className={`h-12 bg-gray-100 ${style.class} ${
                  selectedStyle.name === style.name
                    ? "ring-2 ring-blue-500"
                    : ""
                }`}
                onClick={() => setSelectedStyle(style)}
              >
                <span className="text-sm">{style.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* <div className={`w-full md:w-1/2 p-6 ${selectedBackground.gradient}`}>
        <Card
          className={`${selectedStyle.class}`}
          style={{
            backgroundColor: selectedTheme.colors[2],
            borderColor: selectedTheme.colors[3],
            borderWidth:
              selectedStyle.name === "border"
                ? "4px"
                : selectedStyle.name === "retro"
                ? "2px"
                : "0px",
          }}
        >
          <CardHeader>
            <CardTitle style={{ color: selectedTheme.colors[0] }}>
              Welcome to our platform
            </CardTitle>
            <CardDescription style={{ color: selectedTheme.colors[1] }}>
              This card reflects your chosen styles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p style={{ color: selectedTheme.colors[3] }}>
              This is a preview of how your component will look with the
              selected theme, background, and style. Feel free to experiment
              with different combinations!
            </p>
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
}
