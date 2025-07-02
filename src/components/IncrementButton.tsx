"use client";

import { likePost } from "@/lib/actions";
import { useState } from "react";

export function IncrementPanel({ id, likes }: { id: number; likes: number }) {
  const [localLikes, setLocalLikes] = useState(likes);

  const handleClick = async () => {
    await likePost(id);
    setLocalLikes((prev) => prev + 1);
  };

  return (
    <div>
      <p>Likes: {localLikes}</p>
      <button
        onMouseDown={handleClick}
        className="px-4 py-2 border text-white rounded hover:cursor-pointer hover:bg-gray-700"
      >
        Increment Count
      </button>
    </div>
  );
}
