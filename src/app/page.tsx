import { getPosts } from "@/db";
import { Posts } from "@/components/Posts";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Currently on: Home Page</h1>
      <Posts posts={posts} />
    </div>
  );
}
