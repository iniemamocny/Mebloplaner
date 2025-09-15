# Mebloplaner

## Project structure

- `web/` – front‑end application.
- `src/` – server and shared application code.

## Requirements

To work with the project you need:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Development

Install dependencies and start the application in development mode:

```bash
npm install
npm run dev
```

The `npm run dev` command starts the TypeScript server and the front‑end dev server concurrently.
Changes to `src/index.ts` are picked up automatically because the server runs through `ts-node`.

To launch only the server without the front‑end, run:

```bash
npm run server
```


