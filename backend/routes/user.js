// routes/user.js
const express = require("express");
const router = express.Router();

let userData = {
  id: "user123",
  name: "User Name", // This will be dynamic later
  interests: ["AI", "Web Development"],
  currentLesson: {
    title: "Intro to AI",
    progress: "40%",
    lessonId: "ai-intro-1"
  },
  achievements: [
    { title: "Completed HTML Basics", date: "2025-03-28" }
  ]
};

router.get("/", (req, res) => {
  res.json(userData);
});

module.exports = router;
