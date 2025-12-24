import Header from "@/components/main/Header";
import Hero from "@/components/main/Hero";
import About from "@/components/main/About";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-bg overflow-hidden">

            {/* Blurred Light */}
            <div className="pointer-events-none absolute -top-130 -left-180 z-100">
                <div className="w-600 h-100 -rotate-[20deg] bg-orange-300/50 rounded-full blur-[220px]"/>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <Header/>
                <Hero/>
                <About/>
            </div>

        </div>
    );
}