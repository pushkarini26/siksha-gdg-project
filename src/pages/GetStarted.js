// src/pages/GetStarted.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();
  const [currentLesson, setCurrentLesson] = useState(null);

  useEffect(() => {
    // You can replace this with Gemini API or fetch from backend
    const mockUserLesson = {
      title: 'Introduction to AI',
      progress: '40%',
      lessonId: 'ai-intro-lesson-1',
    };

    setCurrentLesson(mockUserLesson);
  }, []);

  const handleContinue = () => {
    // Navigate to a detailed lesson page or just /lessons for now
    navigate('/lessons');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Let’s Get Started 🚀</h1>
      {currentLesson ? (
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
          <h2>{currentLesson.title}</h2>
          <p>Progress: {currentLesson.progress}</p>
          <button onClick={handleContinue}>Continue Lesson</button>
        </div>
      ) : (
        <p>Loading your lesson...</p>
      )}
    </div>
  );
};

export default GetStarted;
