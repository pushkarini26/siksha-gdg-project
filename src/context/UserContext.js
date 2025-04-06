// src/context/UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    location: 'Hyderabad',
    course: 'BTech in Data Science',
    year: '2nd Year',
    interests: ['Web Dev', 'AI/ML', 'UI/UX'],
    achievements: ['Completed Python Basics', 'Won a hackathon'],
    currentLessons: ['Intro to Python', 'Functions & Loops'],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook
export const useUser = () => useContext(UserContext);
