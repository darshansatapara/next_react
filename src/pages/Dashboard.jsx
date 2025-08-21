import { useEffect, useState } from "react";
import { useTaskStore } from "../store/taskStore";
import { FiCheckCircle, FiClock, FiPlayCircle, FiClipboard } from "react-icons/fi";

const Dashboard = () => {
  const { tasks, fetchTasks } = useTaskStore();
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    inProgress: 0,
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((t) => t.status === "Completed").length;
    const pendingTasks = tasks.filter((t) => t.status === "Pending").length;
    const inProgress = tasks.filter((t) => t.status === "In Progress").length;

    setStats({ totalTasks, completedTasks, pendingTasks, inProgress });
  }, [tasks]);

  const statCards = [
    { title: "Total Tasks", value: stats.totalTasks, color: "blue", icon: <FiClipboard size={28} /> },
    { title: "Completed", value: stats.completedTasks, color: "green", icon: <FiCheckCircle size={28} /> },
    { title: "Pending", value: stats.pendingTasks, color: "red", icon: <FiClock size={28} /> },
    { title: "In Progress", value: stats.inProgress, color: "yellow", icon: <FiPlayCircle size={28} /> },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Dashboard</h1>

      {/* --- Stats Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card) => (
          <div
            key={card.title}
            className={`bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 transform transition-transform hover:scale-105`}
          >
            <div className={`p-4 rounded-full bg-${card.color}-100 text-${card.color}-600`}>
              {card.icon}
            </div>
            <div>
              <p className="text-gray-500">{card.title}</p>
              <p className={`text-2xl font-bold text-${card.color}-600`}>{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- Task List --- */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Recent Tasks</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-100 rounded-t-xl">
              <tr>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Priority</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3 text-gray-700 font-medium">{task.title}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                        task.status === "Completed"
                          ? "bg-green-500"
                          : task.status === "Pending"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        task.priority === "High"
                          ? "bg-red-200 text-red-700"
                          : task.priority === "Medium"
                          ? "bg-yellow-200 text-yellow-700"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </td>
                </tr>
              ))}
              {tasks.length === 0 && (
                <tr>
                  <td colSpan={3} className="p-3 text-center text-gray-400">
                    No tasks available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
