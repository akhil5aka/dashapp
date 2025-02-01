"use client"; // Required for useState

import React from "react";
import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useColorMode } from "../../theme-context"; // Import the context hook

export default function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      <LightMode /> {/* Change this to DarkMode for dynamic icon switching */}
    </IconButton>
  );
}
