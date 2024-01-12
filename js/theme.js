import { getItem, setItem } from "./storage";

export const isDarkMode = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const getInitialTheme = () => {
  let initialTheme = isDarkMode() ? "dark" : "light";
  // console.log(isDarkMode());
  if (getItem("dudesTheme")) initialTheme = getItem("dudesTheme");
  return initialTheme;
};

export const setTheme = (theme) => {
  // set css link href
  setItem("dudesTheme", theme);
};
