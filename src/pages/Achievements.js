import React from 'react';
import { useUser } from '../context/UserContext';

const YourAchievements = () => {
  const { user } = useUser();

  return (
    <div>
      <h2>Your Achievements</h2>
      <ul>
        {user.achievements.map((item, i) => (
          <li key={i}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourAchievements;
