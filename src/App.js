import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Lessons from "./pages/Lessons";
import Achievements from "./pages/Achievements";
import Interests from "./pages/Interests";
import GetStarted from "./pages/GetStarted";
import Explore from "./pages/Explore";
import Account from "./pages/Account";
import AskGemini from "./pages/AskGemini"; // ✅ NEW IMPORT
import { UserProvider } from "./context/UserContext"; // ✅ import context

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/account" element={<Account />} />
          <Route path="/ask-gemini" element={<AskGemini />} /> {/* ✅ NEW ROUTE */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
