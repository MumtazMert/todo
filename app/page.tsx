import TextLine from "./components/TextLine";
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";
import ResetButton from "./components/ResetButton";

export default function Home() {
  return (
    <div>
      <TextLine />
      <AddButton />
      <DeleteButton />
      <ResetButton />
    </div>
  );
}
