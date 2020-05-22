import config from "../conf/config.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";

const getClients = async (
  { request, response }: { request: any; response: any },
) => {
  const client = new Client(config);
  await client.connect();
  const result = await client.query("SELECT * FROM client;");
  await client.end();
  response.status = 200;
  response.body = result.rows;
};

export { getClients };
