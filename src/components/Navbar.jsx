// import { Link, useNavigate } from "react-router-dom";
// import { useAuthStore } from "../store/authStore";

// const Navbar = () => {
//   const { user, logout } = useAuthStore();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-white dark:bg-green-500 shadow-md p-4 flex justify-between items-center">
//       {user ? (
//         <div className="flex gap-6">
//           <Link
//             to="/dashboard"
//             className="text-white font-semibold hover:text-green-900"
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/categories"
//             className="text-white font-semibold hover:text-green-900"
//           >
//             Categories
//           </Link>
//           <Link
//             to="/tasks"
//             className="text-white font-semibold hover:text-green-900"
//           >
//             Tasks
//           </Link>
//         </div>
//       ) : (
//         <div className="text-green-900 font-bold hover:text-green-100 text-lg">
//           Task Manager
//         </div>
//       )}

//       <div>
//         {user ? (
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//           >
//             Logout
//           </button>
//         ) : (
//           <Link
//             to="/login"
//             className="bg-green-900 text-white font-medium px-4 py-2 rounded-lg"
//           >
//             Login
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Logo or Navigation */}
          {user ? (
            <div className="flex items-center space-x-8">
              {/* Logo/Brand */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TaskFlow
                </span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex space-x-6">
                <Link
                  to="/dashboard"
                  className="group relative px-3 py-2 text-gray-700 font-medium hover:text-blue-600 transition-all duration-200"
                >
                  <span className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5a2 2 0 012-2h4a2 2 0 012 2v4H8V5z"
                      ></path>
                    </svg>
                    <span>Dashboard</span>
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </Link>

                <Link
                  to="/categories"
                  className="group relative px-3 py-2 text-gray-700 font-medium hover:text-blue-600 transition-all duration-200"
                >
                  <span className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      ></path>
                    </svg>
                    <span>Categories</span>
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </Link>

                <Link
                  to="/tasks"
                  className="group relative px-3 py-2 text-gray-700 font-medium hover:text-blue-600 transition-all duration-200"
                >
                  <span className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      ></path>
                    </svg>
                    <span>Tasks</span>
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TaskFlow
                </h1>
                <p className="text-sm text-gray-500 -mt-1">
                  Organize. Prioritize. Achieve.
                </p>
              </div>
            </div>
          )}

          {/* Right side - User menu or Login */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                {/* User info */}
                <div className="hidden sm:flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {user.name?.charAt(0).toUpperCase() || "U"}
                    </span>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium text-gray-700">
                      Welcome, {user.name || "User"}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>

                {/* Logout button */}
                <button
                  onClick={handleLogout}
                  className="group flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  <svg
                    className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="group flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
              >
                <svg
                  className="w-4 h-4 group-hover:-rotate-12 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu for navigation (when user is logged in) */}
        {user && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 5a2 2 0 012-2h4a2 2 0 012 2v4H8V5z"
                  ></path>
                </svg>
                <span>Dashboard</span>
              </Link>
              <Link
                to="/categories"
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  ></path>
                </svg>
                <span>Categories</span>
              </Link>
              <Link
                to="/tasks"
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  ></path>
                </svg>
                <span>Tasks</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
