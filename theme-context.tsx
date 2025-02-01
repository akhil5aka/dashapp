// theme-context.tsx
"use client"; // Ensure it runs on the client side

import React, { createContext, useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Create a context for color mode
const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Create a theme based on the mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode, // Use light or dark mode
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Ensures consistent styling */}
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

// Export the context hook for easy use
export function useColorMode() {
  return useContext(ColorModeContext);
}
