import CTA_Buttons from "@/components/sub/CTA_Buttons";
import Noise_Background from "@/components/sub/Noise_Background";

export default function Hero() {
    return (
        <main className="flex w-screen h-screen">

            {/* Noise Background */}
            <div className="w-screen h-screen absolute z-0 opacity-10">
                <Noise_Background
                    speed={4}
                    scale={0.7}
                    color="#643601"
                    noiseIntensity={2}
                    rotation={220}
                />
            </div>

            {/* Content */}
            <div className="flex w-full justify-between items-center px-25 mb-10 z-50">
                {/* Left */}
                <div>
                    {/* Location Pill */}
                    <div className="px-5 py-3 mb-15 bg-white/5 rounded-full border border-white/20 inline-flex">
                        <h2 className="text-white">
                            Darmstadt, Germany
                        </h2>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-7 font-['Switzer_Variable']">
                        <h2 className="text-white/60 text-3xl leading-5 tracking-widest">Student · Aspiring Full-stack Engineer</h2>
                        <h1 className="text-white text-7xl leading-17">Focused on building,<br/>not proving.</h1>
                        <h2 className="text-white/80 text-2xl leading-8">Currently building full-stack projects with <span className="font-medium text-[#A87A45]">React <span className="font-normal text-white/80">&</span> Spring Boot</span>.<br/>Incoming intern at Data Reply Munich.</h2>
                    </div>


                    {/* CTA Buttons */}
                    <div className="mt-10">
                        <CTA_Buttons/>
                    </div>

                </div>

                {/* Right */}
                <div className="">
                    <div className="bg-blue-950 rounded-full w-100 h-100 "></div>
                </div>

            </div>
        </main>
    );
}
