import Image from "next/image";

export default function Banner() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      <div className="relative w-full border border-primary/20 bg-primary/20 p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl md:rounded-4xl flex flex-col items-center justify-center">
        {/* macOS Traffic Lights */}
        <div className="absolute top-0.5 sm:top-1 left-4 sm:left-8 z-10 flex space-x-1.5 sm:space-x-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full shadow-sm"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full shadow-sm"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full shadow-sm"></div>
        </div>
        <div className="w-full border border-primary/20 bg-secondary p-1 sm:p-2 rounded-2xl sm:rounded-3xl md:rounded-4xl flex flex-col items-center justify-center">
          <Image
            src="/landingpage/hero-bg.jpg"
            alt="Hero Image"
            width={1200}
            height={600}
            className="w-full h-auto mx-auto rounded-xl sm:rounded-2xl md:rounded-3xl object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[700px]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
