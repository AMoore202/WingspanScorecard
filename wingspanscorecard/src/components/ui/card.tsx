export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-surface-card rounded-card shadow-card overflow-hidden">
      {children}
    </div>
  );
}
