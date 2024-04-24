import { type AppType } from "server";
import { hc } from "hono/client";
import baseUrl from "../baseUrl";

const client = hc<AppType>(baseUrl);

export default async function Home() {
  const usersRes = await client.users.$get();
  // Todo: work out why `users` type is `any`
  const { users } = await usersRes.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
