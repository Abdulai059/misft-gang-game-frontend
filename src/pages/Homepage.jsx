import Countdown from "@/features/timers/Countdown";
import { ButtonDestructive } from "@/ui/button";

const heroData = {
  mainHeading: "MISFIT GANG",
  subHeading: {
    sub1: "The Misfits",
    highlight: "weren't born,",
    sub2: "they were made",
  },
  bodyText:
    "A mad scientist stitched them together in secret, locking them away in his lab. For years, they hid from the world... until now. This Halloween, 19,999 Misfits break free. They're freaky. They're fearless. They're ready to spread chaos. Do you want your own Misfit in the gang?",
};

function HeroSection() {
  return (
    <main className="min-h-screen bg-hero text-white relative">
      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center items-center px-2 py-16">
        <div className="max-w-7xl text-center space-y-3 md:-translate-y-10 -mb-50 ">
          {/* Main Title */}
          <h1  className="text-4xl md:text-8xl lg:text-8xl sm:font-[1000] font-[1000] text-glow tracking-widest">
            {heroData.mainHeading}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-2xl font-bold text-destructive-color font-body px-3 ">
            {heroData.subHeading.sub1}{" "}
            <span className="text-white">{heroData.subHeading.highlight}</span>{" "}
            {heroData.subHeading.sub2}
          </p>

          {/* Description */}
          <p className="text-sm md:text-lg eading-relaxed text-white/90 max-w-3xl mx-auto">
            {heroData.bodyText}
          </p>

          {/* CTA Button */}
          <ButtonDestructive className="mt-4 rounded-none border md:px-23 py-6 sm:py-10 sm:text-xl font-bold outline uppercase  border-red-500 opacity-85 focus:outline-none focus-visible:ring-0 transition-all duration-300">
            Join Whitelist
          </ButtonDestructive>
        </div>

        <div className="flex flex-col justify-center items-center mt-10 bg-black opacity-80 md:px-24 py-6 space-y-4 sm:space-y-6 sm:p-10 sm:text-xl relative translate-y-55 outline border-red-400 border-2">
          <h3 className="uppercase text-lg font-bold text-white">
            WL Mint Open In
          </h3>
          <span className="mx-2">
            <Countdown
              targetDate="2025-12-31T23:59:59"
              boxClassName="bg-pink-800/80 text-white backdrop-blur-sm"
            />
          </span>

          <p className="uppercase text-sm text-white">
            Prepare for the Apocalypse
          </p>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
