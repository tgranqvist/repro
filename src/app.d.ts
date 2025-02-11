// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import { Knex } from "knex";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			db: Knex;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
