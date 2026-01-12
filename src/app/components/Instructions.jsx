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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-2xl mb-6 shadow-lg">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Audition{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Instructions
          </span>
        </h1>

        <p className="text-lg text-gray-600">
          Please read all instructions carefully before proceeding
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 space-y-8">
          
          {/* Important Notice */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Important Notice
                </h3>
                <p className="text-gray-700">
                  This round consists of descriptive questions only. Please
                  answer thoughtfully and make sure your responses truly
                  reflect your interest, skills, and motivation.
                </p>
              </div>
            </div>
          </div>

          {/* Rules */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Guidelines
            </h2>

            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-lg font-semibold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Audition Format */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Audition Format
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-gray-700">
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
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => navigate("/participate")}
              className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition"
            >
              Back
            </button>

            <button
              onClick={() => navigate("/questions")}
              className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
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
