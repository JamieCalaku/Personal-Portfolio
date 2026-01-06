export default function Navbar_Available() {
    return (
        <div>
            <div className="inline-flex items-center gap-6 px-[clamp(0.6rem,2vw,2rem)] py-3.5 rounded-full border border-white/20 no-select max-[1000px]:py-3">
                <div className="status-dot size-[clamp(0.8rem,2vw,1rem)]"/>
                <h2 className="text-[clamp(0.6rem,3vw,0.9rem)] text-nowrap text-white ">
                    Available for projects
                </h2>
            </div>
        </div>
    );
}