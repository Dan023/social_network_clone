"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      variant={"ghost"}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      aria-label="Change theme"
      isRound
      onClick={toggleColorMode}
    />
  );
};
