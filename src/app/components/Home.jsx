import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code2, Brain } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-72 sm:w-80 h-72 sm:h-80 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-40 -left-40 w-72 sm:w-80 h-72 sm:h-80 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full blur-3xl opacity-50" />

          <svg
            className="absolute inset-0 w-full h-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                Round 1 Auditions Now Open
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-bold tracking-tight">
              <span className="block text-3xl sm:text-5xl lg:text-7xl text-gray-900">
                Maths n Tech Club
              </span>
              <span className="block mt-2 text-3xl sm:text-5xl lg:text-7xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                NIT Durgapur
              </span>
            </h1>

            {/* Tagline */}
            <p className="max-w-2xl mx-auto text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium">
              Where Logic Meets Innovation
            </p>

            <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-gray-500">
              Join our community of problem solvers, innovators, and tech
              enthusiasts. Embark on a journey where mathematics and technology
              converge to create something extraordinary.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/register"
                className="w-full sm:w-auto group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Register for Auditions
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/participate"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-indigo-600 bg-white rounded-xl border-2 border-indigo-200 hover:bg-indigo-50 transition-all shadow-sm"
              >
                Participate in Round 1
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Audition Workflow
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              A simple, streamlined process to join MNTC
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-indigo-100"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                  <span className="text-xl sm:text-2xl font-bold text-white">
                    {step}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {step === 1 && "Register"}
                  {step === 2 && "Participate in Round 1"}
                  {step === 3 && "View Results"}
                </h3>

                <p className="text-sm sm:text-base text-gray-600">
                  {step === 1 &&
                    "Fill out the registration form with your details and preferred cell choices"}
                  {step === 2 &&
                    "Take the Round 1 test to showcase your skills and knowledge"}
                  {step === 3 &&
                    "Check your score and await further communication from the club"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-14 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Feature icon={Brain} title="Logic & Mathematics" />
            <Feature icon={Code2} title="Technology & Innovation" />
            <Feature icon={Sparkles} title="Creativity & Excellence" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon: Icon, title }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-indigo-100 rounded-2xl mb-4">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600">
        Explore excellence through structured learning and innovation
      </p>
    </div>
  );
}
