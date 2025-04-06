const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

let genAI;

if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not set in the environment variables.');
} else {
  genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
}

async function generateResponse(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API error:', error);
    return 'Gemini API call failed.';
  }
}

module.exports = generateResponse;
