import { useNavigate } from "react-router-dom";

export default function Participate({ isRegistered }) {
  const navigate = useNavigate();

  if (!isRegistered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-2xl font-bold mb-4">
          You must register before participating
        </h1>

        <button
          onClick={() => navigate("/register")}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Go to Registration
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Participation Area</h1>

      <button
        onClick={() => navigate("/instructions")}
        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Start Test
      </button>
    </div>
  );
}
