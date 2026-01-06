"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {smoothScrollTo} from "@/components/scroll/ScrollTo";

type NavLink = { label: string; id: string };

const LINKS: NavLink[] = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
];

const OBSERVER_OPTIONS: IntersectionObserverInit = {
    rootMargin: "-40% 0px -40% 0px",
    threshold: 0.1,
};

export default function Navbar() {
    const [activeId, setActiveId] = useState<string>("home");

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const visible = entries.filter(e => e.isIntersecting);
            if (!visible.length) return;

            visible.sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
            setActiveId(visible[0].target.id);
        }, OBSERVER_OPTIONS);

        LINKS.forEach((l) => {
            const el = document.getElementById(l.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="inline-flex h-16 px-1 overflow-hidden bg-neutral-900 rounded-full shadow-navbar-glow border border-white/20 no-select">
            <div className="flex">
                {LINKS.map(({ id, label }) => (
                    <NavItem
                        key={id}
                        id={id}
                        label={label}
                        active={activeId === id}
                        onClick={smoothScrollTo}
                    />
                ))}
            </div>
        </nav>
    );
}

type NavItemProps = {
    id: string;
    label: string;
    active: boolean;
    onClick: (id: string) => void;
};

function NavItem({ id, label, active, onClick }: NavItemProps) {
    return (
        <a
            href={`#${id}`}
            onClick={(e) => {
                e.preventDefault();
                onClick(id);
            }}
            className="flex items-center font-bold text-white text-[clamp(0.5rem,1.1rem,2rem)]"
        >
      <span className="relative inline-flex items-center px-[clamp(0.8rem,1.6vw,10rem)] h-14">
        {active && (
            <motion.span
                layoutId="active-pill"
                className="absolute inset-0 bg-stone-950 rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 100 }}
            />
        )}
          <span className="z-10">{label}</span>
      </span>
        </a>
    );
}
