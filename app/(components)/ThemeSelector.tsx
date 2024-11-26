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
import { themes, backgrounds, borders } from "../services/colors";
import { useThemeContext } from "../(context)/FormThemeContext";
import axios from "axios";
import { Form } from "@prisma/client";

export default function ThemeSelector({ form }: { form: Form }) {
  const theme = useThemeContext();

  const currentTheme = theme!.currentTheme && { ...theme!.currentTheme };

  const [selectedTheme, setSelectedTheme] = useState(
    theme?.currentTheme.name || 0
  );
  const [selectedBackground, setSelectedBackground] = useState(
    theme?.currentTheme.background || 0
  );
  const [selectedStyle, setSelectedStyle] = useState(
    theme?.currentTheme.style || 0
  );
  const [showAllBackgrounds, setShowAllBackgrounds] = useState(false);

  const [status, setStatus] = useState("idle");

  const visibleBackgrounds = showAllBackgrounds
    ? backgrounds
    : backgrounds.slice(0, 4);

  return (
    <div className="w-72 rounded-lg p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Themes</h2>
          <Select
            value={themes[selectedTheme].name}
            onValueChange={(value) => {
              const index = themes.findIndex((theme) => theme.name === value);
              theme?.setTheme({
                name: index,
                background: currentTheme.background,
                style: currentTheme.style,
              });
              setSelectedTheme(index);
            }}
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
            {visibleBackgrounds.map((bg, index) => (
              <button
                key={bg.name}
                className={`h-12 rounded-md ${bg.gradient} ${
                  backgrounds[selectedBackground].name === bg.name
                    ? "ring-2 ring-blue-500"
                    : ""
                }`}
                onClick={() => {
                  theme?.setTheme({
                    name: currentTheme.name,
                    background: index,
                    style: currentTheme.style,
                  });
                  setSelectedBackground(index);
                }}
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
            {borders.map((border, index) => (
              <button
                key={border.name}
                className={`h-12 bg-gray-100 ${border.class} ${
                  borders[selectedStyle].name === border.name
                    ? "ring-2 ring-blue-500"
                    : ""
                }`}
                onClick={() => {
                  theme?.setTheme({
                    name: currentTheme.name,
                    background: currentTheme.background,
                    style: index,
                  });
                  setSelectedStyle(index);
                }}
              >
                <span className="text-sm">{border.name}</span>
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={() => {
            setStatus("saving");
            axios
              .patch(`/api/form/${form.id}`, {
                theme:
                  currentTheme.name == 0 &&
                  currentTheme.background == 0 &&
                  currentTheme.style == 0
                    ? null
                    : JSON.stringify(currentTheme),
              })
              .then(() => {
                setStatus("saved");
                setTimeout(() => {
                  setStatus("idle");
                }, 2000);
              })
              .catch(() => {
                setStatus("error");
                setTimeout(() => {
                  setStatus("idle");
                }, 2000);
              });
          }}
          disabled={status === "saving"}
        >
          {status === "idle" ? (
            <span>Save</span>
          ) : status === "saving" ? (
            <span>Saving...</span>
          ) : status === "saved" ? (
            <span>Saved!</span>
          ) : (
            <span>Error!</span>
          )}
        </Button>
      </div>
    </div>
  );
}
