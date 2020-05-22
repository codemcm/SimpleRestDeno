import { Router } from "https://deno.land/x/oak/mod.ts";
import { getClients } from "../controller/client.ts";

const router = new Router();
router.get("/client", getClients);
export { router };
