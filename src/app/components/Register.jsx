import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ userData, setUserData }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: userData.fullName || "",
    rollNumber: userData.rollNumber || "",
    registrationNumber: "",
    department: "",
    year: "",
    email: userData.email || "",
    preferredCells: [],
  });

  const [errors, setErrors] = useState({});
  const cells = ["Management", "Design", "Development", "Finance"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCellChange = (cell) => {
    setErrors((prev) => ({ ...prev, preferredCells: "" }));

    setFormData((prev) => {
      if (prev.preferredCells.includes(cell)) {
        return {
          ...prev,
          preferredCells: prev.preferredCells.filter((c) => c !== cell),
        };
      }
      if (prev.preferredCells.length === 2) return prev;
      return { ...prev, preferredCells: [...prev.preferredCells, cell] };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Required";
    if (!formData.rollNumber) newErrors.rollNumber = "Required";
    if (!formData.registrationNumber) newErrors.registrationNumber = "Required";
    if (!formData.department) newErrors.department = "Required";
    if (!formData.year) newErrors.year = "Required";

    if (!formData.email) newErrors.email = "Required";
    else if (!formData.email.endsWith("@nitdgp.ac.in"))
      newErrors.email = "Use college email";

    if (formData.preferredCells.length !== 2)
      newErrors.preferredCells = "Select exactly 2 cells";

    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    setUserData({ ...formData, isRegistered: true });
    navigate("/participate");
  };

  const inputClass = (error) =>
    `w-full rounded-xl border px-4 py-3 text-base transition
     focus:outline-none focus:ring-2
     ${
       error
         ? "border-red-400 focus:ring-red-300"
         : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-300"
     }`;

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 sm:p-8"
        >
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl font-bold text-center mb-1">
            <span className="text-gray-900">MNTC</span>{" "}
            <span className="text-indigo-700">Audition Registration</span>
          </h1>

          <p className="text-sm text-gray-500 text-center mb-6">
            Fill out the form below to register for auditions
          </p>

          {/* Full Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClass(errors.fullName)}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Roll Number */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Roll Number
            </label>
            <input
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              className={inputClass(errors.rollNumber)}
            />
            {errors.rollNumber && (
              <p className="text-sm text-red-500 mt-1">{errors.rollNumber}</p>
            )}
          </div>

          {/* Registration Number */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Registration Number
            </label>
            <input
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              className={inputClass(errors.registrationNumber)}
            />
            {errors.registrationNumber && (
              <p className="text-sm text-red-500 mt-1">
                {errors.registrationNumber}
              </p>
            )}
          </div>

          {/* Department */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <input
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={inputClass(errors.department)}
            />
            {errors.department && (
              <p className="text-sm text-red-500 mt-1">{errors.department}</p>
            )}
          </div>

          {/* Year */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Year
            </label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className={inputClass(errors.year)}
            >
              <option value="">Select Year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
            </select>
            {errors.year && (
              <p className="text-sm text-red-500 mt-1">{errors.year}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              College Email ID
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="@nitdgp.ac.in"
              className={inputClass(errors.email)}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Preferred Cells */}
          <div className="mb-7">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Preferred Cells ({formData.preferredCells.length}/2)
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cells.map((cell) => (
                <button
                  key={cell}
                  type="button"
                  onClick={() => handleCellChange(cell)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition
                    ${
                      formData.preferredCells.includes(cell)
                        ? "bg-indigo-600 text-white shadow"
                        : "border border-gray-300 text-gray-700 hover:bg-indigo-50"
                    }`}
                >
                  {cell}
                </button>
              ))}
            </div>

            {errors.preferredCells && (
              <p className="text-sm text-red-500 mt-2">
                {errors.preferredCells}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl text-base font-semibold hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
