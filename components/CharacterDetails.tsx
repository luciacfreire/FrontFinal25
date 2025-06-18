import { FunctionComponent } from "preact/src/index.d.ts";
import { Character } from "../types.ts";
import MarkFavorite from "../islands/MarkFavorite.tsx";

type Props = {
  character: Character;
};

const CharacterDetails: FunctionComponent<Props> = ({ character }) => {
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>
        <MarkFavorite id={character.id} />
      </p>
      <p>House: {character.house}</p>
      <p>{character.alive ? "Vivo" : "Muerto"}</p>
      <div>
        <a href="/">
          <strong>Volver</strong>
        </a>
      </div>
    </div>
  );
};

export default CharacterDetails;
