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
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center">
      {user ? (
        <div className="flex gap-6">
          <Link
            to="/dashboard"
            className="text-white font-semibold hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            to="/categories"
            className="text-white font-semibold hover:text-white"
          >
            Categories
          </Link>
          <Link
            to="/tasks"
            className="text-white font-semibold hover:text-white"
          >
            Tasks
          </Link>
        </div>
      ) : (
        <div className="text-white font-bold text-lg">Task Manager</div>
      )}

      <div>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
