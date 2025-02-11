# Reproduction of error

This is the reproduction of an oddity I encountered with SvelteKit and Knex. Discussed to some extent here: <https://discord.com/channels/457912077277855764/1338236433533763606>.

Steps to reproduce this bug:

- Clone this repo
- Without doing any changes build the container: `docker build -t repro/app .`. It works.
- Uncomment the line in `src/routes/+page.server.ts` and rerun the build. It fails.

To better emulate how I usally run my apps, start the composefile: `docker compose up --build`.
