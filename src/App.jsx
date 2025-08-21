import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Categories from "./pages/Categories";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const checkingAuth = useAuthStore((state) => state.checkingAuth);

  useEffect(() => {
    checkAuth();
  }, []);

  if (checkingAuth) {
    // ✅ show a loading spinner or blank page while checking token
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
