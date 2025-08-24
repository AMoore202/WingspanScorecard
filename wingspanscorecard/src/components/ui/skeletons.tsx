import { LabelText } from "@/components/ui/typography";

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

export function GameInfoSkeleton() {
  return (
    <div className="flex flex-col gap-3 w-full my-2">
      <div className="flex gap-3 w-full">
        <div className="flex flex-col w-full">
          <LabelText text="Date" />
          <div
            className={`${shimmer} relative overflow-hidden w-[100px] h-[21px] rounded-2xl bg-surface-skeleton`}
          />
        </div>
        <div className="flex flex-col w-full">
          <LabelText text="Time" />
          <div
            className={`${shimmer} relative overflow-hidden w-[100px] h-[21px] rounded-2xl bg-surface-skeleton`}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <LabelText text="Expansions" />
        <div
          className={`${shimmer} relative overflow-hidden w-[120px] h-[28px] rounded-2xl bg-surface-skeleton`}
        />
      </div>
    </div>
  );
}

export function GameCardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`${shimmer} ${className} relative overflow-hidden w-[200px] min-w-[200px] h-[125px] rounded-2xl bg-surface-skeleton`}
    />
  );
}
