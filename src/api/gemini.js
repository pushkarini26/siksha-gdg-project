import axios from 'axios';

const askGemini = async (question) => {
  try {
    const response = await axios.post('/api/gemini', { question });
    return response.data.answer;
  } catch (error) {
    console.error('Error asking Gemini:', error);
    return 'Something went wrong.';
  }
};

export { askGemini };

