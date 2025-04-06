import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 font-bold text-2xl flex items-center">
        <img src="/logo.png" alt="Siksha Logo" className="w-13 h-12 mr-2" />
        <span className="text-5xl font-extrabold">Siksha</span>
      </nav>

      {/* Main Content */}
      <div className="p-4 max-w-5xl mx-auto">
        {/* Sections */}
        <div className="space-y-4">
          <Link to="/lessons">
            <div className="flex items-center p-4 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
              <img src="/images/lessons.png" alt="Lessons" className="w-12 h-12 mr-4" />
              <span className="text-lg font-medium">Your Lessons</span>
            </div>
          </Link>
          <Link to="/achievements">
            <div className="flex items-center p-4 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
              <img src="/images/achievements.png" alt="Achievements" className="w-12 h-12 mr-4" />
              <span className="text-lg font-medium">Your Achievements</span>
            </div>
          </Link>
          <Link to="/interests">
            <div className="flex items-center p-4 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer">
              <img src="/images/interests.png" alt="Interests" className="w-12 h-12 mr-4" />
              <span className="text-lg font-medium">Your Interests</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center p-6 bg-blue-100 mt-6">
        <h2 className="text-xl font-semibold">"Find your own interests"</h2>
        <p className="text-gray-700">Don’t let others decide your career. It's in your hands.</p>
        <Link to="/get-started">
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">Let's Get Started</button>
        </Link>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-blue-600 text-white flex justify-around p-4 z-10">
        <Link to="/">
          <div className="flex flex-col items-center">
            <img src="/images/home-icon.png" alt="Home" className="w-8 h-8" />
            <span className="text-sm">Home</span>
          </div>
        </Link>
        <Link to="/explore">
          <div className="flex flex-col items-center">
            <img src="/images/library-icon.png" alt="Explore" className="w-8 h-8" />
            <span className="text-sm">Explore</span>
          </div>
        </Link>
        <Link to="/account">
          <div className="flex flex-col items-center">
            <img src="/images/account-icon.png" alt="Account" className="w-8 h-8" />
            <span className="text-sm">Account</span>
          </div>
        </Link>
      </div>

      {/* 🧠 Floating Ask Gemini Button */}
      <Link to="/ask-gemini">
        <div className="fixed bottom-20 right-4 z-20 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-100 transition">
          <img src="/images/chatbot-icon.png" alt="Ask Gemini" className="w-10 h-10" />
        </div>
      </Link>
    </div>
  );
};

export default Homepage;
