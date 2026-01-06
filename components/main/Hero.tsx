import CTA_Buttons from "@/components/sub/CTA_Buttons";

export default function Hero() {
    return (
        <main className="flex h-screen">
            <div className="flex w-full justify-between items-center px-20 mb-10">
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
                        <h2 className="text-white/80 text-2xl leading-8">I’m Jamie Calaku a 14 year old developer working with React<br/>and Spring Boot. Upcoming Internship at Data Reply Munich.</h2>
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
