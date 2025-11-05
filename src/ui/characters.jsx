import React from 'react';
import { Play, Shield, Star, Trophy, Crosshair } from 'lucide-react';
import { Stars01 } from '@untitledui/icons';
import { Button } from './button';
import * as motion from 'motion/react-client';

export default function SpaceRevengeLanding() {
  return (
    <div
      className=" text-primary relative overflow-hidden max-w-7xl
        mx-auto"
    >
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
          }}
        ></div>
      </div>

      {/* Header */}
      <header
        className="relative z-10 flex flex-col md:flex-row md:items-center
          justify-between items-center md:px-0 py-6 px-4 gap-6"
      >
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
        <nav
          className="flex justify-center items-center md:flex-col gap-6
            text-right text-sm border p-2 rounded-lg bg-white/10 md:mr-10
            backdrop-blur-sm"
        >
          <a
            href="#"
            className="text-primary hover:text-cyan-400 transition-colors
              font-medium"
          >
            STORE
          </a>
          <a
            href="#"
            className="text-primary hover:text-cyan-400 transition-colors
              font-medium"
          >
            CHARACTER
          </a>
          <a
            href="#"
            className="text-primary hover:text-cyan-400 transition-colors
              font-medium hidden"
          >
            NFS
          </a>
          <a
            href="#"
            className="text-primary hover:text-cyan-400 transition-colors
              font-medium"
          >
            WEAPONS
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mt-12 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - CTAs and Stats */}
          <div className="space-y-12 mb-12 md:mb-0">
            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                variant="default"
                size="default"
                className="rounded font-semibold transition-all transform
                  hover:scale-105 shadow-lg"
              >
                Download Now!
              </Button>

              <button
                variant="secondary"
                size="default"
                className="h-9 px-4 py-6 rounded font-semibold flex items-center
                  gap-2 transition-all transform hover:scale-105 shadow-lg
                  border border-secondary"
              >
                <Play className="w-5 h-5 fill-gray-800" />
                Play Demo
              </button>
            </div>


            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Champions */}
              <div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex
                  items-center gap-4 hover:bg-white/15 transition-all"
              >
                <div className="bg-cyan-500 rounded-full p-3">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-3xl font-bold">72</p>
                  <p className="text-sm text-gray-300">Champions</p>
                </div>
              </div>

              {/* Skins */}
              <div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex
                  items-center gap-4 hover:bg-white/15 transition-all"
              >
                <div className="bg-purple-400 rounded-full p-3">
                  <Stars01 className="w-6 h-6 text-stone-100" />
                </div>
                <div>
                  <p className="text-3xl font-bold">32</p>
                  <p className="text-sm text-gray-300">Skins</p>
                </div>
              </div>

              {/* Mastery Points */}
              <div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex
                  items-center gap-4 hover:bg-white/15 transition-all"
              >
                <div className="bg-accent rounded-full p-3">
                  <Trophy className="w-6 h-6 text-destructive-color" />
                </div>
                <div>
                  <p className="text-3xl font-bold">412</p>
                  <p className="text-sm text-gray-300">Mastery Points</p>
                </div>
              </div>

              {/* Skins */}
              <div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex
                  items-center gap-4 hover:bg-white/15 transition-all"
              >
                <div className="bg-orange-400 rounded-full p-3">
                  <Crosshair className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-3xl font-bold">32</p>
                  <p className="text-sm text-gray-300">Skins</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop version */}
          <CharaterCard  />
        </div>
      </main>
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

export function CharaterCard() {
  return (
    <div className="flex justify-center flex-col md:mr-10 space-y-14 mt-10 relative">
      <div>
        <h2
          className="text-2xl text-accent-foreground font-bold tracking-wide
            uppercase items-center"
        >
          The legend sets sail.
        </h2>
        <p className="text-gray-400 mt-2 items-center">
          Join the crew. Conquer the chain.
        </p>
      </div>
      <div>
        <motion.img
          src="/public/assets/ch07.png"
          alt=""
          className="w-70 h-60 z-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </div>
  );
}
