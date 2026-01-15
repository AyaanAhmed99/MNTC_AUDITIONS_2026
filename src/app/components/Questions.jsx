import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Questions({
  answers,
  setAnswers,
  setScore,
  setTotalQuestions,
}) {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: "Why do you want to join MNTC?",
      placeholder:
        "Explain your interest in Maths N Tech Club and what excites you about it.",
    },
    {
      id: 2,
      question: "Why should MNTC choose you?",
      placeholder:
        "Describe what makes you a suitable candidate for the club.",
    },
    {
      id: 3,
      question: "Do you have any special quality or skill?",
      placeholder:
        "Mention any quality or skill that makes you stand out.",
    },
    {
      id: 4,
      question: "Do you have any prior experience to showcase?",
      placeholder:
        "This can include events, projects, competitions, or teamwork experience.",
    },
    {
      id: 5,
      question: "What is your biggest plus point?",
      placeholder:
        "Example: consistency, leadership, creativity, discipline, etc.",
    },
    {
      id: 6,
      question: "What is one drawback you have, and how are you working on it?",
      placeholder: "Be honest and explain how you plan to improve.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [localAnswers, setLocalAnswers] = useState(
    new Array(questions.length).fill("")
  );
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const updated = [...localAnswers];
    updated[currentQuestion] = e.target.value;
    setLocalAnswers(updated);
  };

  const handleNext = () => {
    if (!localAnswers[currentQuestion].trim()) {
      alert("Please answer the question before proceeding.");
      return;
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Format answers
      const formattedAnswers = {};
      questions.forEach((q, i) => {
        formattedAnswers[q.id] = localAnswers[i];
      });

      setAnswers(formattedAnswers);
      setScore(0);
      setTotalQuestions(questions.length);

      // Show success popup
      setShowPopup(true);

      // Redirect after 2 seconds
      setTimeout(() => {
        setShowPopup(false);
        navigate("/");
      }, 2000);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const q = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 relative">
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-2xl w-full">
          
          {/* Progress */}
          <h2 className="text-sm font-medium text-gray-500 mb-2">
            Question {currentQuestion + 1} of {questions.length}
          </h2>

          {/* Question */}
          <p className="text-base sm:text-lg font-semibold mb-4 text-gray-800">
            {q.question}
          </p>

          {/* Answer Box */}
          <textarea
            placeholder={q.placeholder}
            value={localAnswers[currentQuestion]}
            onChange={handleChange}
            className="w-full min-h-[160px] sm:min-h-[200px] p-4 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-medium transition ${
                currentQuestion === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition"
            >
              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black opacity-20"></div>

          {/* Popup */}
          <div className="relative bg-white shadow-2xl rounded-3xl p-6 sm:p-8 max-w-md w-full text-center animate-bounceIn border-t-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              🎉 Responses Submitted! ✅
            </h3>
            <p className="text-gray-700 text-base sm:text-lg">
              Thank you for participating in the MNTC Auditions.
              <br />
              Redirecting to home page...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
