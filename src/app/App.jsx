import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Cells from "./components/Cells";
import Register from "./components/Register";
import Participate from "./components/Participate";
import Instructions from "./components/Instructions";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

export default function App() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    rollNumber: "",
    branch: "",
    preferredCells: [],
    isRegistered: false,
  });

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
        <Navigation />

        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cells" element={<Cells />} />

            <Route
              path="/register"
              element={
                <Register
                  userData={userData}
                  setUserData={setUserData}
                />
              }
            />

            <Route
              path="/participate"
              element={
                <Participate isRegistered={userData.isRegistered} />
              }
            />

            <Route path="/instructions" element={<Instructions />} />

            <Route
              path="/questions"
              element={
                <Questions
                  answers={answers}
                  setAnswers={setAnswers}
                  setScore={setScore}
                  setTotalQuestions={setTotalQuestions}
                />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
