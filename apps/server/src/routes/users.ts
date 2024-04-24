import { db } from "db/index";
import { type UserType, users } from "db/schema";
import { Hono } from "hono";

const app = new Hono().get("/", async (c) => {
  const result = await db.select().from(users);

  console.log("USERS:", result);

  return c.json({
    users: result,
  });
});

export default app;
