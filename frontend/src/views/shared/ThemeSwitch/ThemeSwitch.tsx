"use client";

import React from "react";
import { useTheme } from "next-themes";
import { THEME_MODE_DARK, THEME_MODE_LIGHT } from "core/consts";
import { Sun } from "lucide-react";
import { IoMdMoon } from "react-icons/io";

// TODO: Later we'll learn to import these svgs from public for static rendering and fix it.
// import MoonIcon from "/public/images/icon_moon.svg";
// import SunIcon from "/public/images/icon_sun.svg";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  // TODO: Understand the mount logic. Why it's been used then use it here.
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }

  const isThemeLight = theme === THEME_MODE_LIGHT || false;

  const handleThemeSwitch = () => {
    setTheme(isThemeLight ? THEME_MODE_DARK : THEME_MODE_LIGHT);
  };

  const IconLink = !isThemeLight ? <Sun width="20px" height="20px" /> : <IoMdMoon className="w-[18px] h-[18px]" />;

  return <button onClick={handleThemeSwitch}>{IconLink}</button>;
};

export default ThemeSwitch;
