# 🔥 Firebase Script
* This is a project template for housing and executing Firebase scripts via Typescript and the [Firebase Admin SDK](https://www.npmjs.com/package/firebase-admin).

# 🎉 Getting started

- Execute `npm install` to install the dependencies.

## Setup DOTENV
- Create a `.env` file in the root of the project and place all your environment variables in that file.
- Make sure to include a `FIREBASE_SERVICE_ACCOUNT` variable containing the base64 encoded service account json file. For reference, see `.env.sample`.

## Creating a script
- Create a new file in the `src/scripts` directory.
- Make sure to set the script function as the `default export`.
- See `src/scripts/hello_world.ts` for an example.

## Running a script
- To run a single or multiple scripts, run:
  ```bash
  npm run scripts <script-name-1> <script-name-2> ...
  ```

- For example:
  ```bash
  npm run scripts hello_world hello_world
  ```