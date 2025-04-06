import React, { useState } from 'react';
import { askGemini } from '../api/gemini';
import { useUser } from '../context/UserContext';

const Account = () => {
  const { user } = useUser();
  const [summary, setSummary] = useState('');

  const getSummary = async () => {
    const prompt = `Summarize this user:
    Name: ${user.name}
    Course: ${user.course}
    Year: ${user.year}
    Interests: ${user.interests.join(', ')}
    Achievements: ${user.achievements.join(', ')}`;
    const result = await askGemini(prompt);
    setSummary(result);
  };

  return (
    <div>
      <h2>Account Information</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Location:</strong> {user.location}</p>

      <button onClick={getSummary}>Generate AI Summary</button>
      <p>{summary}</p>
    </div>
  );
};

export default Account;
