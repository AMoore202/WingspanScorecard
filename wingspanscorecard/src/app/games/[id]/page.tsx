import MenuBar from "@/components/ui/menu-bar";
import Card from "@/components/ui/card";
import { Header1, Header2, Text, LabelText } from "@/components/ui/typography";
import ExpansionPill from "@/components/ui/expansion-pill";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  console.log("Game ID:", id);

  return (
    <div className="flex flex-col items-center w-full h-full bg-background">
      <MenuBar />
      <div className="flex flex-col w-full gap-4 p-3 max-w-[1200px]">
        <Card>
          <div className="flex w-full justify-between items-center p-4">
            <Header1 text="Game Details" />
          </div>
          <div className="flex w-full justify-between items-center p-4">
            <Header2 text="Scores" />
          </div>
          <div className="flex flex-col p-4">
            <LabelText text="Date" />
            <Text text="06/15/2025" />
          </div>
          <div className="flex flex-col p-4 gap-1">
            <LabelText text="Expansions" />
            <div className="flex gap-[6px]">
              <ExpansionPill expansion="europe" />
              <ExpansionPill expansion="oceania" />
              <ExpansionPill expansion="asia" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
