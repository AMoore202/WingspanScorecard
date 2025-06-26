import clsx from "clsx";
import { fetchRawScoresById } from "@/lib/server-fetches";

function sumArray(array: number[]) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

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

export default async function GameTable({ id }: { id: number }) {
  const scores = await fetchRawScoresById(id);

  return (
    <div className="flex border border-border-table rounded-lg bg-surface-card overflow-hidden w-max">
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
      {scores.map((player) => (
        <div key={player.player} className="flex">
          <TableCol>
            <HeaderFooterCell text={player.player} />
            <TableCell text={player.bird_points.toString()} />
            <TableCell text={player.bonus_cards.toString()} />
            <TableCell text={player.end_of_round_goals.toString()} />
            <TableCell text={player.eggs.toString()} />
            <TableCell text={player.food_on_cards.toString()} />
            <TableCell text={player.tucked_cards.toString()} />
            <TableCell text={player.nectar.toString()} />
            <HeaderFooterCell
              text={sumArray(
                Object.values(player).filter(
                  (v): v is number => typeof v === "number"
                )
              ).toString()}
              className="border-none"
            />
          </TableCol>
        </div>
      ))}
    </div>
  );
}
