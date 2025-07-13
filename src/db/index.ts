import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL!);

export async function getCounter() {
  const result = await sql`SELECT count FROM counter`;
  return result[0].count as number;
}

export async function incrementCounter() {
  await sql`UPDATE counter SET count = count + 1`;
}
