import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your Gemini API key
const API_KEY = "YOUR_GEMINI_API_KEY";

const genAI = new GoogleGenerativeAI(API_KEY);

export const fetchGeminiData = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error fetching data from Gemini API:", error);
    return "Failed to load data.";
  }
};
