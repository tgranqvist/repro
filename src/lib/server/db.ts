import  { env } from "$env/dynamic/private";
import knex, { Knex } from "knex";

const db: Knex = knex({
	client: env.APP_DATABASE_TYPE,
	connection: {
		host: env.APP_DATABASE_HOST,
		user: env.APP_DATABASE_USER,
		database: env.APP_DATABASE_NAME,
		password: env.APP_DATABASE_PASSWORD
	}
});