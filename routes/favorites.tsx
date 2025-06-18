import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterList from "../components/CharacterList.tsx";
import { Character } from "../types.ts";

type State = {
    favoriteIds: string,
}

export const handler: Handlers = {
    GET: async(_req: Request, ctx: FreshContext<State>) =>{
        const ids = ctx.state.favoriteIds?.split(",") ?? [];
        const res = await fetch("https://hp-api.onrender.com/api/characters");
        const all: Character[] = await res.json();
        const favs = all.filter((ch) => ids.includes(ch.id));
        return ctx.render(favs);
    }
}

const Page = ({data} : PageProps<Character[]>) => {
    return(
        <div>
            <CharacterList characters={data} />
        </div>
    )


}

export default Page;