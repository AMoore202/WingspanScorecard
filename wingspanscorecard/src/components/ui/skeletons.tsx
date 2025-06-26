const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

function TableRowSkeleton() {
  return (
    <div className="flex items-center h-10 w-max border-b border-border-table">
      <div className="flex items-center h-10 w-[168px] pl-4 pr-8 border-b border-border-table">
        <div className="w-full h-4 rounded-2xl bg-surface-skeleton" />
      </div>
      <div className="flex items-center h-10 w-24 pr-8 border-b border-border-table">
        <div className="w-full h-4 rounded-2xl bg-surface-skeleton" />
      </div>
      <div className="flex items-center h-10 w-24 pr-8 border-b border-border-table">
        <div className="w-full h-4 rounded-2xl bg-surface-skeleton" />
      </div>
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex flex-col border border-border-table rounded-lg bg-surface-card overflow-hidden w-max`}
    >
      <div className="h-10 w-full bg-surface-well border-b border-border-table" />
      <TableRowSkeleton />
      <TableRowSkeleton />
      <TableRowSkeleton />
      <TableRowSkeleton />
      <TableRowSkeleton />
      <TableRowSkeleton />
      <TableRowSkeleton />
      <div className="h-10 w-full bg-surface-well" />
    </div>
  );
}
