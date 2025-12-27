"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const ServicesSearching = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;

    const params = new URLSearchParams(searchParams);

    if (searchTerm) {
      params.set("searchTerm", searchTerm);
    } else {
      params.delete("searchTerm"); // ✅ clear করলে সব data আসবে
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
      <div className="flex gap-2">
        <input
          name="search"
          placeholder="Search services..."
          className="w-full border px-4 py-2 rounded"
        />
        <button className="bg-primary text-white px-5 rounded">
          Search
        </button>
      </div>
    </form>
  );
};

export default ServicesSearching;
