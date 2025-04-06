import React, { useState } from 'react';
import axios from 'axios';

const AskGemini = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await axios.post('http://localhost:5000/api/gemini', { prompt });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error fetching Gemini response:', error);
      setResponse('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Ask Gemini</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows="4"
          placeholder="Type your question..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Thinking...' : 'Ask Gemini'}
        </button>
      </form>
      {response && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-semibold mb-2">Gemini says:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default AskGemini;
