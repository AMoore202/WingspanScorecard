import { MenuTitle } from "@/components/ui/typography";
import { LogoIcon, HamburgerIcon } from "@/components/ui/icons";

export default function MenuBar() {
  return (
    <div className="flex justify-between items-center w-full p-4">
      <div className="flex items-center justify-center size-9 lg:size-14 bg-[linear-gradient(180deg,var(--Seagull-600,#187FA9)_0%,var(--Seagull-800,#0C3C50)_100%)] rounded-full shadow-[0px_0px_1px_0px_rgba(0,0,0,0.5)_inset,4px_4px_8px_0px_rgba(0,0,0,0.05)_inset,-4px_4px_8px_0px_rgba(255,255,255,0.05)_inset,0px_0px_2px_0px_rgba(0,0,0,0.15),-2px_2px_4px_0px_rgba(0,0,0,0.25),-0.5px_0.5px_1px_0px_rgba(255,255,255,0.05)_inset,1px_-1px_2px_0px_rgba(0,0,0,0.1)_inset,-1px_1px_2px_0px_rgba(255,255,255,0.05)_inset,-1px_1px_2px_0px_rgba(0,0,0,0.15)]">
        <LogoIcon className="w-[17px] h-auto lg:w-[25.5px]" />
      </div>
      <MenuTitle text="Wingspan Scorecard" />
      <div className="flex items-center justify-center size-9 lg:size-14">
        <HamburgerIcon className="" />
      </div>
    </div>
  );
}
