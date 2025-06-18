import { FreshContext } from "$fresh/server.ts";
import {getCookies} from "$std/http/cookie.ts"

type State = {
    favoriteIds?: string;
}

export async function handler(req:Request, ctx: FreshContext<State>) {
    const cookies = getCookies(req.headers);
    ctx.state.favoriteIds = cookies.favoriteIds;

    const {pathname} = new URL(req.url);
    if(pathname === "/favorites" && !ctx.state.favoriteIds){
        const url = new URL("/", req.url);
        return Response.redirect(url,303);
    }

    return await ctx.next();
}

