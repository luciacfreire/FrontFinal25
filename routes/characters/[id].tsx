import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterDetails from "../../components/CharacterDetails.tsx";
import { Character } from "../../types.ts";


export const handler: Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown, Character>) =>{
        const {id} = ctx.params;
        const res = await fetch(`https://hp-api.onrender.com/api/characters`);
        const character:Character[] = await res.json();
        const found = character.find((ch) => ch.id === id);
        return ctx.render(found);
    }
}

const Page = ({data} : PageProps<Character>) => {
    return(
        <div>
            <CharacterDetails character={data} />
        </div>
    )

}

export default Page;