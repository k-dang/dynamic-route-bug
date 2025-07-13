'use client';

import { increment } from '@/lib/actions';

export function IncrementCountButton() {
  const handleClick = async () => {
    await increment();
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
      onClick={handleClick}
    >
      Increment
    </button>
  );
}
