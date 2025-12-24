import Navbar from "@/components/sub/Navbar";
import Navbar_Available from "@/components/sub/Navbar_Available";
import Navbar_Signature from "@/components/sub/Navbar_Signature";

export default function Header() {
    return (
        <header className="w-screen">
            <div className="grid grid-cols-3 items-center h-30">

                {/* Signature */}
                <div className="justify-self-start">
                    <Navbar_Signature/>
                </div>

                {/* Navbar */}
                <div className="justify-self-center">
                    <Navbar/>
                </div>

                {/* Available */}
                <div className="justify-self-end">
                    <Navbar_Available/>
                </div>

            </div>
        </header>
    );
}