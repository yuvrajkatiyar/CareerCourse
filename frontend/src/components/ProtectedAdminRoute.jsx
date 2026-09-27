import { Navigate } from "react-router-dom";

export default function ProtectedAdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }

  if (role !== "admin") {
    // alert("You do not have admin access.");

    return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 flex items-center justify-center px-4">
    <div className="w-full max-w-md">
      
      {/* Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-red-50">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m0 3.75h.007M10.29 3.86l-7.5 13A2 2 0 004.52 20h14.96a2 2 0 001.73-3.14l-7.5-13a2 2 0 00-3.42 0z"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Access Denied
        </h1>

        {/* Description */}
        <p className="text-gray-500 leading-relaxed mb-8">
          You don't have permission to access the admin dashboard.
          Please log in with an administrator account.
        </p>

        {/* Button */}
        {/* <a
          href="/admin-login"
          className="inline-flex items-center justify-center w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-indigo-700 transition duration-200 shadow-sm hover:shadow-md"
        >
          Go to Admin Login
        </a> */}

        {/* Secondary link */}
        <a
          href="/"
          className="inline-flex items-centre justify-center w-full bg-gray-200  py-3 px-6 rounded-xl text-gray-700 transition duration-200 hover:bg-gray-300 mt-4"
        >
          ← Back to CareerCourse
        </a>

      </div>

      {/* Footer */}
      <p className="text-center text-sm text-gray-400 mt-6">
        CareerCourse • Admin Portal
      </p>

    </div>
  </div>
);
  }

  return children;
}