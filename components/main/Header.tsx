import Navbar from "@/components/sub/Navbar";
import Navbar_Available from "@/components/sub/Navbar_Available";
import Navbar_Signature from "@/components/sub/Navbar_Signature";

export default function Header() {
    return (
        <div className="flex w-screen h-30 px-10 items-center flex-col gap-4 min-[990px]:flex-row min-[990px]:justify-between min-[990px]:gap-0">
            {/* Signature */}
            <div className="order-2 min-[990px]:order-1 flex max-[990px]:hidden min-[990px]:pl-6">
                <Navbar_Signature />
            </div>

            {/* Navbar */}
            <div className="order-1 min-[990px]:order-2 flex">
                <Navbar />
            </div>

            {/* Available */}
            <div className="order-3 min-[990px]:order-3 flex min-[990px]:pr-6">
                <Navbar_Available />
            </div>
        </div>
    );
}