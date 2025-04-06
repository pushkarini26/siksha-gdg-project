import React, { useEffect, useState } from "react";

const Explore = () => {
  const [paths, setPaths] = useState([]);
  const [error, setError] = useState("");

  const fetchPaths = async () => {
    try {
      const prompt = "Give me a list of top learning paths across tech, arts, science, sports, government jobs. For each path, give: title, description, category. Respond in JSON format with a 'paths' array.";

      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      const data = await res.json();
      const parsed = JSON.parse(data.response); // Gemini responds with JSON string
      setPaths(parsed.paths);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch learning paths.");
    }
  };

  useEffect(() => {
    fetchPaths();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Explore Learning Paths</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paths.map((path, index) => (
          <div key={index} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{path.title}</h2>
            <p className="text-gray-600">{path.description}</p>
            <span className="text-sm text-blue-500">{path.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
