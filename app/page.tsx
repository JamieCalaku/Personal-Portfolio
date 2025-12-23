import Header from "@/components/main/Header";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-bg overflow-hidden">

            {/* Blurred Light */}
            <div className="pointer-events-none absolute -top-130 -left-180 z-50">
                <div className="w-600 h-100 -rotate-[20deg] bg-orange-300/50 rounded-full blur-[220px]"/>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <Header />
            </div>
        </div>
    );
}