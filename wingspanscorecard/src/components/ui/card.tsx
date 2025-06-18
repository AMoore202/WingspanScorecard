interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  const cardClasses = `flex flex-col bg-surface-card rounded-card shadow-card overflow-hidden ${
    className || ""
  }`;

  return <div className={cardClasses}>{children}</div>;
}
