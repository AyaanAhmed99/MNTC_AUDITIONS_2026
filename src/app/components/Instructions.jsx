import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, AlertTriangle } from "lucide-react";

export default function Instructions() {
  const navigate = useNavigate();

  const rules = [
    "Read each question carefully before answering",
    "All questions are descriptive in nature",
    "Answer honestly and clearly in your own words",
    "You can move between questions using Next and Previous buttons",
    "Ensure you complete all questions before final submission",
    "Once submitted, answers cannot be edited",
    "Do not refresh the page while answering the questions",
    "Make sure you have a stable internet connection",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-12 sm:py-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-2xl mb-4 sm:mb-6 shadow-lg">
          <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
          Audition{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Instructions
          </span>
        </h1>

        <p className="text-sm sm:text-lg text-gray-600">
          Please read all instructions carefully before proceeding
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 space-y-8">
          {/* Important Notice */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 sm:p-6 border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mt-1" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  Important Notice
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  This round consists of descriptive questions only. Please
                  answer thoughtfully and ensure your responses reflect your
                  interest, skills, and motivation.
                </p>
              </div>
            </div>
          </div>

          {/* Rules */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Guidelines
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-indigo-600 text-white rounded-lg font-semibold mr-3 sm:mr-4 text-sm">
                    {index + 1}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 pt-0.5">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Audition Format */}
          <div className="bg-gray-50 rounded-xl p-5 sm:p-6 border border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              Audition Format
            </h3>
            <div className="grid gap-2 sm:grid-cols-2 text-sm sm:text-base text-gray-700">
              <div>
                <b>Question Type:</b> Descriptive
              </div>
              <div>
                <b>Total Questions:</b> 6
              </div>
              <div>
                <b>Time Limit:</b> No time limit
              </div>
              <div>
                <b>Evaluation:</b> Based on quality of responses
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 sm:pt-4">
            <button
              onClick={() => navigate("/participate")}
              className="w-full sm:flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition"
            >
              Back
            </button>

            <button
              onClick={() => navigate("/questions")}
              className="w-full sm:flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Start
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
