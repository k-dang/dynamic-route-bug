"use server";

import { incrementCounter } from "@/db";
import { revalidatePath } from "next/cache";

export async function increment() {
  await incrementCounter();
  revalidatePath("/");
}
