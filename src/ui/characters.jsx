import React from "react";
import { Play, Shield, Star, Trophy, Crosshair } from "lucide-react";
import { Stars01 } from "@untitledui/icons";
import { Button } from "./button";
import * as motion from "motion/react-client";

export default function SpaceRevengeLanding() {
  return (
    <div className="min-h-screen text-primary relative overflow-hidden max-w-7xl mx-auto  ">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex flex-col md:flex-row md:items-center justify-between items-center md:px-0 py-6 px-4 gap-6">
        <div>
          <p className="text-sm font-bold text-destructive mb-1">
            Top Reviews and GamersArena
          </p>
          <h1 className="text-5xl font-bold tracking-tight">
            Space Revenge <span className="text-destructive">4</span>
          </h1>
          <p className="text-sm text-primary mt-2 max-w-md">
            Delta - Magnifier is a minimal light created by Netherlands-based
            designers Formafantasma.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center items-center md:flex-col gap-6 text-right text-sm border p-2 rounded-lg bg-white/10 backdrop-blur-sm">
          <a
            href="#"
            className="text-primary hover:text-cyan-400 transition-colors font-medium"
          >
            STORE
          </a>
          <a
            href="#"
            className="text-primary hover:text-cyan-400 transition-colors font-medium"
          >
            CHARACTER
          </a>
          <a
            href="#"
            className="text-primary hover:text-cyan-400 transition-colors font-medium hidden"
          >
            NFS
          </a>
          <a
            href="#"
            className="text-primary hover:text-cyan-400 transition-colors font-medium"
          >
            WEAPONS
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <CharacterCard />
    </div>
  );
}

export function AppStoreButton() {
  return (
    <div className="flex flex-col items-start gap-3 md:flex-row">
      <GooglePlayButtonOutline size="md" />
      <GooglePlayButtonOutline size="lg" />
    </div>
  );
}

export function CharacterCard() {
  return (
    <div className="flex justify-center flex-col md:mr-10 space-y-14">
      <div>
        <h2 className="text-4xl text-accent-foreground font-bold tracking-wide">
          The legend sets sail.
        </h2>
        <p className="text-gray-400 mt-2">Join the crew. Conquer the chain.</p>
      </div>
      <div>
        <motion.img
          src="./public/character-bg/ch-2.png"
          alt=""
          className="w-2xs h-2xs"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}
