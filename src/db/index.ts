import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL!);

export type Post = {
  id: number;
  title: string;
  likes: number;
};

export async function getPosts() {
  const posts = await sql`SELECT * FROM posts ORDER BY id`;
  
  return posts;
}

export async function incrementLikes(postId: number) {
  await sql`UPDATE posts SET likes = likes + 1 WHERE id = ${postId}`;
}
