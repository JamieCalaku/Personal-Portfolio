import Header from "@/components/main/Header";
import Hero from "@/components/main/Hero";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-bg overflow-hidden">

            {/* Blurred Light */}
            <div className="pointer-events-none absolute -top-130 -left-180 z-100 opacity-40">
                <div className="w-600 h-100 -rotate-[20deg] bg-orange-300/50 rounded-full blur-[220px]"/>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <Header/>
                <section id="home"><Hero/></section>
                 <section id="about" className="h-[2000px] bg-amber-600 w-screen"/>
                <section id="skills" className="h-[2000px] bg-blue-600 w-screen"/>
                <section id="projects" className="h-[2000px] bg-red-600 w-screen"/>
                <section id="contact" className="h-[2000px] bg-purple-600 w-screen"/>
            </div>
f
        </div>
    );
}