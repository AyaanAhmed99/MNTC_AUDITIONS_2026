import { useNavigate } from "react-router-dom";

export default function Participate({ isRegistered }) {
  const navigate = useNavigate();

  if (!isRegistered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
          You must register before participating
        </h1>

        <button
          onClick={() => navigate("/register")}
          className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Go to Registration
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
        Participation Area
      </h1>

      <button
        onClick={() => navigate("/instructions")}
        className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
      >
        Start Test
      </button>
    </div>
  );
}
