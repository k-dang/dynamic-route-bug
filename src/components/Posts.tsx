import { Post } from "@/db";
import { IncrementPanel } from "./IncrementButton";

export async function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-2">
      {posts.map((post) => (
        <div key={post.id} className="p-3 border rounded-md">
          <h2 className="text-lg font-bold">{post.title}</h2>
          <IncrementPanel id={post.id} likes={post.likes} />
        </div>
      ))}
    </div>
  );
}
