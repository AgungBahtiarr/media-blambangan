import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '765f170408e3d2e3d8301dee07049fd6dfb31b59', queries,  });
export default client;
  