import React, { useEffect, useState } from "react";

const Lessons = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  if (!userData) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Lessons</h2>
      <p>Currently Learning: <strong>{userData.currentCourse}</strong></p>
      <ul>
        <li>Lesson 1: Introduction to {userData.currentCourse}</li>
        <li>Lesson 2: Basics of {userData.currentCourse}</li>
        <li>Lesson 3: Real-world Applications</li>
      </ul>
    </div>
  );
};

export default Lessons;
