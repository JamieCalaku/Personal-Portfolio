"use client";
import {smoothScrollTo} from "@/components/scroll/ScrollTo";
import {LuBoxes} from "react-icons/lu";

export default function CTA_Buttons(){
    return (
        <div className="flex flex-row gap-3">
            <button onClick={() => smoothScrollTo("projects")} className="w-56 h-14 flex flex-row justify-between items-center bg-gray-50 rounded-full outline outline-white/20">
                <h1 className="pl-3 text-black/90 text-xl text-nowrap font-medium ">Explore Projects</h1>
                <div className="w-14 h-14 flex items-center justify-center pr-0 mr-0 rounded-full bg-zinc-300">
                    <LuBoxes className="w-full h-full opacity-80 p-4" color="black" opacity="80%"/>
                </div>
            </button>

            <button onClick={() => smoothScrollTo("about")} className="w-56 h-14 flex flex-row justify-center items-center bg-gradient-to-br from-black/10 to-stone-950 rounded-full outline outline-white/20">
                <h1 className="text-white text-xl text-nowrap font-medium ">More About me</h1>
            </button>
        </div>
    )
}