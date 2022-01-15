import ChoiceDeserve from "./ChoiceDeserve";
import ChoiceDrink from "./ChoiceDrink";
import ChoicePlate from "./ChoicePlate";

export default function ChoicesPages() {
  return (
    <main>
      <ChoicePlate />
      <ChoiceDrink />
      <ChoiceDeserve />
    </main>
  );
}
