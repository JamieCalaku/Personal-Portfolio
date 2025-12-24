export default function Navbar_Available() {
    return (
        <div>
            <div className="inline-flex items-center gap-6 px-6 py-3.5 overflow-hidden rounded-[57px] outline-1 outline-navbar-stroke no-select">
                <div className="status-dot"/>
                <h2 className="text-base font-normal text-white font-['Arial']">
                    Available for projects
                </h2>
            </div>
        </div>
    );
}