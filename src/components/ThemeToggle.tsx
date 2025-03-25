
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const isDark = isDarkMode;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const handleThemeChange = () => {
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme") || "light";
        const prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        const isDark = savedTheme === "dark" || (savedTheme === null && prefersDark);
        setIsDarkMode(isDark);
        document.documentElement.classList.toggle("dark", isDark);
      }
    };

    handleThemeChange();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleThemeChange);

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full transition-all duration-300",
        "bg-secondary text-foreground hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "hover:scale-110 active:scale-95"
      )}
      aria-label="Toggle theme"
    >
      <Sun className={cn("h-5 w-5 rotate-0 scale-100 transition-all duration-300", isDarkMode ? "opacity-0 rotate-90 scale-0" : "opacity-100")} />
      <Moon className={cn("absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300", isDarkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0")} />
    </button>
  );
}
