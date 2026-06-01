import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const token = localStorage.getItem("token");

const name = localStorage.getItem("name");

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-100 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}

          <Link to="/" className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>

            <span className="text-2xl font-bold text-gray-900">
              CareerCourse
            </span>
          </Link>

          {/* NAV LINKS */}

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Home
            </Link>

            <Link to="/course" className="text-gray-600 hover:text-indigo-600 transition font-medium">
              Courses
            </Link>

            <Link
              to="/carrerquiz"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Career Quiz
            </Link>
          </div>

          {/* LOGIN BUTTON */}

          {token ? (
            <div className="flex items-center gap-4">
              <h2 className="font-semibold text-indigo-600">Welcome {name}</h2>

              <button
                onClick={() => {
                  localStorage.removeItem("token");

                  localStorage.removeItem("name");

                  window.location.reload();
                }}
                className="px-6 py-2 rounded-xl border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-6 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
