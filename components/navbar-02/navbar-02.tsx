"use client";

import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { SunIcon, MoonIcon, Volume2 } from "lucide-react";
import { useTheme } from "./theme/ThemeProvider";
import { useRef } from "react";

const Navbar02Page = () => {
  const { theme, toggleTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAlarm = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current
      .play()
      .catch((err) => console.log("Error al reproducir audio:", err));
  };

  return (
    <div className="bg-muted">
      <audio ref={audioRef} src="/audio/alarma.mp3" preload="auto" />

      <nav className="sticky top-0 z-50 h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo y frase */}
          <div className="flex items-center gap-12">
            <Logo />
            <NavMenu className="hidden md:block" />
          </div>

          {/* Links y botones */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <a href="#historia" className="text-base font-medium hover:underline">
                Historia
              </a>
             <a href="#estadstica" className="text-base font-medium hover:underline">
                Estadísticas
              </a>

              <a href="#recuerdos" className="text-base font-medium hover:underline">
                Recuerdos
              </a>
            </div>

            {/* Botón de alarma */}
            <button
              onClick={playAlarm}
              className="p-2 rounded border border-gray-300 dark:border-gray-600 hover:bg-muted"
              aria-label="Reproducir alarma"
            >
              <Volume2 className="w-5 h-5" />
            </button>

            <button
              className="ml-2 p-2 rounded border border-gray-300 dark:border-gray-600"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            </button>

            <div className="md:hidden ml-2">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar02Page;
