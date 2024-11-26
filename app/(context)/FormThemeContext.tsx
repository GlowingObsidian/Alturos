"use client ";

import { Form } from "@prisma/client";
import { createContext, useContext, useState } from "react";

interface theme {
  name: number;
  background: number;
  style: number;
}

export interface themeContext {
  currentTheme: theme;
  setTheme: (newTheme: theme) => void;
}

const FormThemeContext = createContext<themeContext | undefined>(undefined);

export function FormThemeWrapper({
  form,
  children,
}: {
  form: Form;
  children: React.ReactNode;
}) {
  const [currentTheme, setTheme] = useState(
    form.theme
      ? JSON.parse(form.theme)
      : {
          name: 0,
          background: 0,
          style: 0,
        }
  );

  return (
    <FormThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
      }}
    >
      {children}
    </FormThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(FormThemeContext);
}
