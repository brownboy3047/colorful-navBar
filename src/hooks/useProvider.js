import { ThemeContext } from "../components/ThemeContext";
import { useContext } from "react";

// creating a custom context hook
export const useProvider = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useProvider() is not use within the context");
  }

  return context;
};
