import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-20 items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center max-w-5xl">
        <Button className="mb-4 sm:mb-6 shadow-2xl rounded-full bg-transparent border border-primary text-black dark:text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base hover:bg-primary/10 transition-all duration-300">
          Let&apos;s Build Your Vision !
        </Button>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white mb-4 sm:mb-6 leading-tight">
          Custom <span className="text-primary">Software That Builds</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline"> Your Business</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70 mb-6 sm:mb-8 max-w-3xl leading-relaxed px-4 sm:px-0">
          We don&apos;t just write code — we solve problems, accelerate growth,
          and empower your digital journey.
        </p>

        <Button className="px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-2 text-white rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105">
          Build With Us Now
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>
    </div>
  );
}
