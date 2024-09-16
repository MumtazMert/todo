import TextLine from "./components/TextLine";
import DeleteButton from "./components/DeleteButton";
import ResetButton from "./components/ResetButton";

export default function Home() {
  return (
    <div>
      <TextLine />
      <DeleteButton />
      <ResetButton />
    </div>
  );
}
