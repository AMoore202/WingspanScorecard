"use client";

import { useState, useRef, useEffect, use } from "react";
import { MenuTitle } from "@/components/ui/typography";
import {
  LogoIcon,
  HamburgerIcon,
  HomeIcon,
  GamesIcon,
} from "@/components/ui/icons";
import Link from "next/link";

// Todo: User shouldn't be able navigate from their keyboard to the menu links

export default function MenuBar() {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    setShowPopover(!showPopover);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setShowPopover(false);
      }
    }

    if (showPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopover]);

  return (
    <div className="flex justify-between items-center w-full p-4">
      <Link
        href="/"
        className="flex items-center justify-center size-9 lg:size-14 bg-[linear-gradient(180deg,var(--Seagull-600,#187FA9)_0%,var(--Seagull-800,#0C3C50)_100%)] rounded-full shadow-[0px_0px_1px_0px_rgba(0,0,0,0.5)_inset,4px_4px_8px_0px_rgba(0,0,0,0.05)_inset,-4px_4px_8px_0px_rgba(255,255,255,0.05)_inset,0px_0px_2px_0px_rgba(0,0,0,0.15),-2px_2px_4px_0px_rgba(0,0,0,0.25),-0.5px_0.5px_1px_0px_rgba(255,255,255,0.05)_inset,1px_-1px_2px_0px_rgba(0,0,0,0.1)_inset,-1px_1px_2px_0px_rgba(255,255,255,0.05)_inset,-1px_1px_2px_0px_rgba(0,0,0,0.15)] focus-visible:outline-none focus-visible:ring-[3px] lg:focus-visible:ring-4 focus-visible:ring-border-focusBlue/75 disabled:pointer-events-none"
      >
        <LogoIcon className="w-[17px] h-auto lg:w-[25.5px]" />
      </Link>
      <MenuTitle text="Wingspan Scorecard" />
      <div className="relative" ref={popoverRef}>
        <button
          onClick={handleMenuClick}
          className="flex items-center justify-center rounded-lg
           size-9 lg:size-14 focus-visible:outline-none focus-visible:ring-[3px] lg:focus-visible:ring-4 focus-visible:ring-border-focusBlue/75 disabled:pointer-events-none"
        >
          <HamburgerIcon className="" />
        </button>
        <div
          className={`absolute right-0 top-full p-2 w-[120px] rounded-lg bg-surface-popover shadow-card transition-all duration-150 ease-in-out z-10 ${
            showPopover
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-96 pointer-events-none -translate-y-1"
          }`}
        >
          <Link href="/" className="px-[6px] py-2 flex items-center gap-[6px]">
            <HomeIcon />
            <p className="font-semibold text-base text-foreground-subtle">
              Home
            </p>
          </Link>
          <Link
            href="/games?page=1&player=0"
            className="px-[6px] py-2 flex items-center gap-[6px]"
          >
            <GamesIcon />
            <p className="font-semibold text-base text-foreground-subtle">
              Games
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
