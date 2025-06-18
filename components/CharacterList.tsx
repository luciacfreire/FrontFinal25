import { FunctionComponent } from "preact/src/index.d.ts";
import { Character } from "../types.ts";
import MarkFavorite from "../islands/MarkFavorite.tsx";
import CharacterCard from "./CharacterCard.tsx";

type Props = {
  characters: Character[];
};

const CharacterList: FunctionComponent<Props> = ({ characters }) => {
  return (
    <div class="card-container">
      {characters.map((ch) => <CharacterCard character={ch} />)}
    </div>
  );
};

export default CharacterList;
