"use server";

import { incrementLikes } from "@/db";

export async function likePost(id: number) {
  await incrementLikes(id);
}
