import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterList from "../components/CharacterList.tsx";
import Header from "../components/Header.tsx";
import { Character } from "../types.ts";

type Data = {
  characters: Character[];
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    const characters = await res.json();
    return ctx.render({ characters });
  },
};

const Page = (props: PageProps<Data>) => {
  const characters = props.data.characters;

  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
};

export default Page;
