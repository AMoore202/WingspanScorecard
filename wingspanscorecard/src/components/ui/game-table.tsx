import clsx from "clsx";

function HeaderFooterCell({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center h-10 w-24 pr-8 text-xs font-semibold text-foreground-subtle bg-surface-well border-b border-border-table ${className}`}
    >
      {text}
    </div>
  );
}

function TableCell({ text }: { text: string }) {
  return (
    <div className="flex items-center h-10 w-24 pr-8 text-xs text-foreground-tableText border-b border-border-table">
      {text}
    </div>
  );
}

function TableCol({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}

function RowLabel({
  text,
  header = false,
  className = "",
}: {
  text: string;
  header?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        `flex items-center h-10 w-[168px] pl-4 pr-8 text-xs font-semibold text-foreground border-b border-border-table ${className}`,
        {
          "bg-surface-well": header,
        }
      )}
    >
      {text}
    </div>
  );
}

export default function GameTable() {
  return (
    <div className="flex border border-border-table rounded-card bg-surface-card overflow-hidden w-max">
      <TableCol>
        <RowLabel header={true} text="" />
        <RowLabel text="Bird Points" />
        <RowLabel text="Bonus Cards" />
        <RowLabel text="End-of-Round Goals" />
        <RowLabel text="Eggs" />
        <RowLabel text="Food on Cards" />
        <RowLabel text="Tucked Cards" />
        <RowLabel text="Nectar" />
        <RowLabel header={true} text="Total" className="border-none" />
      </TableCol>
      <TableCol>
        <HeaderFooterCell text="Katie" />
        <TableCell text="40" />
        <TableCell text="20" />
        <TableCell text="17" />
        <TableCell text="8" />
        <TableCell text="16" />
        <TableCell text="12" />
        <TableCell text="5" />
        <HeaderFooterCell text="122" className="border-none" />
      </TableCol>
      <TableCol>
        <HeaderFooterCell text="Katie" />
        <TableCell text="40" />
        <TableCell text="20" />
        <TableCell text="17" />
        <TableCell text="8" />
        <TableCell text="16" />
        <TableCell text="12" />
        <TableCell text="5" />
        <HeaderFooterCell text="122" className="border-none" />
      </TableCol>
      <TableCol>
        <HeaderFooterCell text="Katie" />
        <TableCell text="40" />
        <TableCell text="20" />
        <TableCell text="17" />
        <TableCell text="8" />
        <TableCell text="16" />
        <TableCell text="12" />
        <TableCell text="5" />
        <HeaderFooterCell text="122" className="border-none" />
      </TableCol>
    </div>
  );
}
