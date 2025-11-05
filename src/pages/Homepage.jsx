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
        <div className="max-w-7xl text-center space-y-6 md:space-y-8 translate-y-20 md:translate-y-">
          {/* Main Title */}
          <h1 className="text-4xl md:text-8xl lg:text-8xl sm:font-[1000] font-[1000] text-glow tracking-widest">
            {heroData.mainHeading}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-2xl font-bold text-destructive-color font-body px-3 ">
            {heroData.subHeading.sub1}{" "}
            <span className="text-white">{heroData.subHeading.highlight}</span>{" "}
            {heroData.subHeading.sub2}
          </p>

          {/* Description */}
          <p className="text-sm md:text-lg ading-relaxed text-white/90 max-w-3xl mx-auto">
            {heroData.bodyText}
          </p>

          {/* CTA Button */}
          <ButtonDestructive className="mt-6 md:mt-8 rounded-none border px-8 md:px-16 lg:px-24 py-6 md:py-7 text-base md:text-xl font-bold uppercase border-red-500 opacity-85 focus:outline-none focus-visible:ring-0 transition-all duration-300">
            Join Whitelist
          </ButtonDestructive>
        </div>

        <div className="flex flex-col justify-center items-center mt-20  md:mt-20 bg-black/80 px-6 md:px-12 lg:px-24 py-6 md:py-10 space-y-4 md:space-y-6 border-red-400 border-2 w-full max-w-2xl rounded-2xl translate-y-10">
          <h3 className="uppercase text-lg font-bold text-white">
            WL Mint Open In
          </h3>

            <Countdown
              targetDate="2025-12-31T23:59:59"
              boxClassName="bg-pink-800/80 text-white backdrop-blur-sm"
            />
        

          <p className="uppercase text-sm text-white">
            Prepare for the Apocalypse
          </p>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
