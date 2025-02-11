import type { PageServerLoad } from "./$types";
// uncomment the line below to make the build fail
//import { db } from "$lib/server/db";

export const load: PageServerLoad = async ({ locals }) => {
	const { db } = locals; 

	const timestamp = await db.raw("SELECT CURRENT_TIMESTAMP");
	console.log(timestamp);
}