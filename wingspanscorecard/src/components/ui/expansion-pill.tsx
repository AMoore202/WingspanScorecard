import clsx from "clsx";

interface ExpansionPillProps {
  expansion: "europe" | "oceania" | "asia";
}

export default function ExpansionPill({ expansion }: ExpansionPillProps) {
  const text =
    expansion === "europe"
      ? "Europe"
      : expansion === "oceania"
      ? "Oceania"
      : "Asia";

  return (
    <div
      className={clsx(
        "px-3 py-[6px] text-xs font-bold text-foreground rounded-lg shadow-[0px_0px_8px_-6px_rgba(0,0,0,0.05),0px_-1px_1px_0px_rgba(0,0,0,0.05)_inset,0px_1px_1px_0px_rgba(255,255,255,0.1)_inset,0px_3px_3px_-1.5px_rgba(0,0,0,0.05),0px_2px_2px_-1px_rgba(0,0,0,0.05),0px_1px_1px_-0.5px_rgba(0,0,0,0.05)]",
        {
          "bg-[linear-gradient(180deg,#AAE5EE_0%,#80D8E5_100%)]":
            expansion === "europe",
          "bg-[linear-gradient(180deg,#EEDEAA_0%,#E5CD80_100%)]":
            expansion === "oceania",
          "bg-[linear-gradient(180deg,#EEAADA_0%,#E580C7_100%)]":
            expansion === "asia",
        }
      )}
    >
      {text}
    </div>
  );
}
