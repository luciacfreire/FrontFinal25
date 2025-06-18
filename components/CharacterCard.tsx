import { FunctionComponent } from "preact/src/index.d.ts";
import { Character } from "../types.ts";
import MarkFavorite from "../islands/MarkFavorite.tsx";

type Props = {
  character: Character;
};

const CharacterCard: FunctionComponent<Props> = ({ character }) => {
  return (
    <div key={character.id}>
      <a href={`/characters/${character.id}`}>
        <h4>{character.name}</h4>
      </a>
      <img src={character.image} alt={character.name} />
      <p>
        <MarkFavorite id={character.id} />
      </p>
    </div>
  );
};

export default CharacterCard;
