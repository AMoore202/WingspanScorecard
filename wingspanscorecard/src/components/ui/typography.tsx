import { Label } from "@radix-ui/react-label";

export function MenuTitle({ text }: { text: string }) {
  return (
    <p className="text-foreground-accent text-xl font-semibold lg:text-[32px]">
      {text}
    </p>
  );
}

export function Header1({ text }: { text: string }) {
  return (
    <h1 className="text-foreground text-2xl font-semibold lg:text-[32px]">
      {text}
    </h1>
  );
}

export function Header2({ text }: { text: string }) {
  return (
    <h2 className="text-foreground text-xl font-semibold lg:text-2xl pt-2 pb-[2px] w-full border-b border-b-border">
      {text}
    </h2>
  );
}

export function Text({ text }: { text: string }) {
  return (
    <p className="text-foreground text-base font-semibold lg:text-lg">{text}</p>
  );
}

export function LabelText({ text }: { text: string }) {
  return (
    <Label className="text-foreground-label text-xs font-semibold lg:text-sm">
      {text}
    </Label>
  );
}
