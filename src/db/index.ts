export type Post = {
  id: number;
  title: string;
  likes: number;
};

const posts: Post[] = [
  { id: 1, title: "Post 1", likes: 0 },
  { id: 2, title: "Post 2", likes: 0 },
  { id: 3, title: "Post 3", likes: 0 },
];

export async function getPosts() {
  await new Promise((r) => setTimeout(r, 100));

  return posts;
}

export async function incrementLikes(postId: number) {
  await new Promise((r) => setTimeout(r, 100));

  const post = posts.find((p) => p.id === postId);
  if (post) {
    post.likes += 1;
  }
}
