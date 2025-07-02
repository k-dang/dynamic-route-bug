import { getPosts } from "@/db";
import { Posts } from "@/components/Posts";

export default async function LikePage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Currently on: Second Page</h1>
      <Posts posts={posts} />
    </div>
  );
}
