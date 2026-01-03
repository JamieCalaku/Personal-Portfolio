export default function Navbar_Available() {
    return (
        <div>
            <div className="inline-flex items-center gap-6 px-[clamp(0.6rem,2vw,2rem)] py-3.5 overflow-hidden rounded-[57px] outline-1 outline-navbar-stroke no-select max-[960px]:py-2.5">
                <div className="status-dot size-[clamp(0.8rem,2vw,1rem)]"/>
                <h2 className="text-[clamp(0.6rem,3vw,0.9rem)] base text-nowrap font-normal text-white font-['Arial']">
                    Available for projects
                </h2>
            </div>
        </div>
    );
}