export function MenuTitle({ text }: { text: string }) {
  return (
    <p className="text-foreground-accent text-xl font-semibold lg:text-[32px]">
      {text}
    </p>
  );
}

export function Header1({ text }: { text: string }) {
  return <h1 className="text-foreground text-2xl font-semibold">{text}</h1>;
}
