import Navbar from "@/components/sub/Navbar";
import Navbar_Available from "@/components/sub/Navbar_Available";
import Navbar_Signature from "@/components/sub/Navbar_Signature";

export default function Header() {
    return (
        <header className="w-screen fixed max-[295px]:hidden">
            <div className="grid grid-cols-3 items-center py-6 max-[960px]:grid-cols-2 max-[960px]:py-4">

                {/* Signature */}
                <div className="justify-self-start pl-[clamp(0.75rem,4vw,3rem)]">
                    <Navbar_Signature/>
                </div>

                {/* Navbar */}
                <div className="justify-self-center max-[960px]:hidden">
                    <Navbar/>
                </div>

                {/* Available */}
                <div className="justify-self-end pr-[clamp(0.75rem,4vw,3rem)]">
                    <Navbar_Available/>
                </div>

            </div>
        </header>
    );
}