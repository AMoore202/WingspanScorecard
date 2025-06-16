export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-surface-card rounded-card shadow-card">
      {children}
    </div>
  );
}
