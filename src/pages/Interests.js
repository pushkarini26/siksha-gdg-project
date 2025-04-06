import React, { useEffect, useState } from "react";

const Interests = () => {
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
      <h2>Your Interests</h2>
      <ul>
        {userData.interests.map((interest, index) => (
          <li key={index}>💡 {interest}</li>
        ))}
      </ul>
    </div>
  );
};

export default Interests;
