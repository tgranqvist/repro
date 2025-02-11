import { db } from "$lib/server/db";
import { env } from "$env/dynamic/private";
import type { Handle } from "@sveltejs/kit"; 

console.log(JSON.stringify(env));

export const handle: Handle = async ({event, resolve}) => {
	
	event.locals.db = db;
	return resolve(event);
}