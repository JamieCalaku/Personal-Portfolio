"use client";

import { useEffect, useState } from "react";

type NavLink = { label: string; id: string };

const LINKS: NavLink[] = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "Contact" },
];

const OBSERVER_OPTIONS: IntersectionObserverInit = {
    rootMargin: "-40% 0px -40% 0px",
    threshold: 0.1,
};

export default function Navbar() {
    const [activeId, setActiveId] = useState<string>("home");

    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
            OBSERVER_OPTIONS
        );

        LINKS.forEach((l) => {
            const el = document.getElementById(l.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="w-[600px] max-[1300px]:w-[520px] max-[1150px]:w-[420px] h-16 bg-neutral-900 rounded-[100px] shadow-navbar-glow outline-1 outline-navbar-stroke inline-flex items-center px-3 overflow-hidden">
            <div className="flex items-center justify-between w-full px-2 max-[1150px]:px-0">
                {LINKS.map(({ id, label }) => (
                    <NavItem
                        key={id}
                        id={id}
                        label={label}
                        active={activeId === id}
                        onClick={scrollTo}
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
            className="relative flex items-center justify-center h-14 text-base max-[1300px]:text-sm max-[1150px]:text-xs font-bold text-white"
        >
      <span className="relative inline-flex items-center justify-center w-28 max-[1300px]:w-24 max-[1150px]:w-20 h-14">
        {active && <ActivePill />}
          <span className="relative z-10">{label}</span>
      </span>
        </a>
    );
}

function ActivePill() {
    return (
        <span className="absolute inset-0 bg-stone-950 rounded-[100px] transition-transform duration-300" />
    );
}