import { useEffect, useState } from "react";

export default function ApiPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">API Data</h1>

      {/* Search */}
      <input
        className="w-full px-3 py-2 border rounded mb-6 dark:bg-gray-700 dark:border-gray-600"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* List */}
      <div className="space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white dark:bg-gray-800 rounded shadow"
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Previous
        </button>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
