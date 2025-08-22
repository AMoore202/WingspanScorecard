export default function LeaderCard() {
  return (
    <div className="flex flex-col justify-center items-end w-[200px] lg:w-[250px] min-w-[200px] lg:min-w-[245px] h-[125px] bg-[linear-gradient(180deg,var(--surface-buttonPrimaryStartOrange,#E07A06)_0%,var(--surface-buttonPrimaryEndOrange,#C76C05)_100%)] rounded-2xl p-3 lg:p-4 shadow-buttonCard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus/75">
      <div className="flex items-center w-full justify-between">
        <p className="text-foreground-buttonPrimary text-2xl font-semibold">
          Katie
        </p>
        <p className="text-foreground-buttonPrimary text-5xl font-bold">142</p>
      </div>
      <p className="text-foreground-buttonPrimarySubtleOrange text-xs font-bold ">
        Highest Total Score
      </p>
    </div>
  );
}
