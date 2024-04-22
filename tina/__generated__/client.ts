import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/content/4dcc82f5-6a9e-4a7c-976a-5c553c4bafea/github/master', token: '765f170408e3d2e3d8301dee07049fd6dfb31b59', queries, });
export default client;
