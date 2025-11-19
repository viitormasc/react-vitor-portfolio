import { WavyBackground } from "./ui/shadcn-io/wavy-background";

export default function GradientHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <WavyBackground
        backgroundFill="#0f0f23"
        colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9"]}
        waveWidth={50}
        blur={10}
        speed="fast"
        waveOpacity={0.5}
        containerClassName="h-full w-full"
        className="flex items-center justify-center"
      >
        {/* Your content flows above */}
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4">
            Flow Into Color
          </h1>
          <p className="text-xl opacity-80">
            Where gradients come alive
          </p>
        </div>
      </WavyBackground>
    </div>
  );
}
