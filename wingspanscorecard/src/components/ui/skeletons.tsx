const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function TableSkeleton() {
  return (
    <div
      className={`${shimmer} relative size-[360px] rounded-lg bg-sirocco-100 overflow-hidden border border-border-table`}
    />
  );
}
