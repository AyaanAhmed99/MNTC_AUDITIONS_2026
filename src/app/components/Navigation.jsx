import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Cells", path: "/cells" },
    { name: "Register", path: "/register" },
    { name: "Participate", path: "/participate" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="MNTC Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-xl font-bold">Audition Portal</h1>
        </div>

        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition ${
                location.pathname === item.path
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
