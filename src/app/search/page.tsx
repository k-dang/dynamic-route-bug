import { getCounter } from "@/db";
import { IncrementCountButton } from "@/components/IncrementCountButton";

export default async function CountPage({
  searchParams,
}: {
  searchParams?: Promise<{ term?: string }>;
}) {
  const term = (await searchParams)?.term;

  const count = await getCounter();

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Count {term}</h1>
      <p className="mb-4">Current count: {count}</p>
      <IncrementCountButton />
    </main>
  );
}
