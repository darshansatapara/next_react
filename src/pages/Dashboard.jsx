// import { useEffect, useState } from "react";
// import { useTaskStore } from "../store/taskStore";
// import { FiCheckCircle, FiClock, FiPlayCircle, FiClipboard } from "react-icons/fi";

// const Dashboard = () => {
//   const { tasks, fetchTasks } = useTaskStore();
//   const [stats, setStats] = useState({
//     totalTasks: 0,
//     completedTasks: 0,
//     pendingTasks: 0,
//     inProgress: 0,
//   });

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   useEffect(() => {
//     const totalTasks = tasks.length;
//     const completedTasks = tasks.filter((t) => t.status === "Completed").length;
//     const pendingTasks = tasks.filter((t) => t.status === "Pending").length;
//     const inProgress = tasks.filter((t) => t.status === "In Progress").length;

//     setStats({ totalTasks, completedTasks, pendingTasks, inProgress });
//   }, [tasks]);

//   const statCards = [
//     { title: "Total Tasks", value: stats.totalTasks, color: "blue", icon: <FiClipboard size={28} /> },
//     { title: "Completed", value: stats.completedTasks, color: "green", icon: <FiCheckCircle size={28} /> },
//     { title: "Pending", value: stats.pendingTasks, color: "red", icon: <FiClock size={28} /> },
//     { title: "In Progress", value: stats.inProgress, color: "yellow", icon: <FiPlayCircle size={28} /> },
//   ];

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-4xl font-bold mb-6 text-gray-800">Dashboard</h1>

//       {/* --- Stats Cards --- */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {statCards.map((card) => (
//           <div
//             key={card.title}
//             className={`bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 transform transition-transform hover:scale-105`}
//           >
//             <div className={`p-4 rounded-full bg-${card.color}-100 text-${card.color}-600`}>
//               {card.icon}
//             </div>
//             <div>
//               <p className="text-gray-500">{card.title}</p>
//               <p className={`text-2xl font-bold text-${card.color}-600`}>{card.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* --- Task List --- */}
//       <div className="bg-white shadow-lg rounded-2xl p-6">
//         <h2 className="text-2xl font-bold mb-4 text-gray-700">Recent Tasks</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full table-auto border-collapse">
//             <thead className="bg-gray-100 rounded-t-xl">
//               <tr>
//                 <th className="p-3 text-left">Title</th>
//                 <th className="p-3 text-left">Status</th>
//                 <th className="p-3 text-left">Priority</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tasks.map((task) => (
//                 <tr key={task.id} className="border-b hover:bg-gray-50 transition">
//                   <td className="p-3 text-gray-700 font-medium">{task.title}</td>
//                   <td className="p-3">
//                     <span
//                       className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
//                         task.status === "Completed"
//                           ? "bg-green-500"
//                           : task.status === "Pending"
//                           ? "bg-red-500"
//                           : "bg-yellow-500"
//                       }`}
//                     >
//                       {task.status}
//                     </span>
//                   </td>
//                   <td className="p-3">
//                     <span
//                       className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                         task.priority === "High"
//                           ? "bg-red-200 text-red-700"
//                           : task.priority === "Medium"
//                           ? "bg-yellow-200 text-yellow-700"
//                           : "bg-gray-200 text-gray-700"
//                       }`}
//                     >
//                       {task.priority}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//               {tasks.length === 0 && (
//                 <tr>
//                   <td colSpan={3} className="p-3 text-center text-gray-400">
//                     No tasks available
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect, useState } from "react";
import { useTaskStore } from "../store/taskStore";
import {
  FiCheckCircle,
  FiClock,
  FiPlayCircle,
  FiClipboard,
} from "react-icons/fi";

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
    {
      title: "Total Tasks",
      value: stats.totalTasks,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      icon: <FiClipboard size={28} />,
    },
    {
      title: "Completed",
      value: stats.completedTasks,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      icon: <FiCheckCircle size={28} />,
    },
    {
      title: "Pending",
      value: stats.pendingTasks,
      gradient: "from-red-500 to-pink-600",
      bgGradient: "from-red-50 to-pink-50",
      icon: <FiClock size={28} />,
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50",
      icon: <FiPlayCircle size={28} />,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-gradient-to-r from-green-500 to-emerald-600";
      case "Pending":
        return "bg-gradient-to-r from-red-500 to-pink-600";
      case "In Progress":
        return "bg-gradient-to-r from-yellow-500 to-orange-600";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700 border border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case "Low":
        return "bg-blue-100 text-blue-700 border border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400 to-pink-500 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome back! Here's your task overview
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card, index) => (
            <div
              key={card.title}
              className={`backdrop-blur-xl bg-white/70 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-gray-600 text-sm font-medium mb-2">
                    {card.title}
                  </p>
                  <p
                    className={`text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}
                  >
                    {card.value}
                  </p>
                </div>
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${card.bgGradient} group-hover:scale-110 transition-transform duration-300`}
                >
                  <div
                    className={`text-transparent bg-gradient-to-r ${card.gradient} bg-clip-text`}
                  >
                    {card.icon}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className={`h-1.5 bg-gradient-to-r ${card.gradient} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width:
                        card.title === "Total Tasks"
                          ? "100%"
                          : `${
                              stats.totalTasks > 0
                                ? (card.value / stats.totalTasks) * 100
                                : 0
                            }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Task List */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/20 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-gray-200/50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Recent Tasks
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Manage and track your task progress
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full opacity-80"></div>
                <div className="w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Task Title
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/50">
                {tasks.length > 0 ? (
                  tasks.map((task, index) => (
                    <tr
                      key={task.id}
                      className="hover:bg-white/50 transition-all duration-200 group"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors duration-200">
                            {task.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold text-white shadow-md ${getStatusColor(
                            task.status
                          )} hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                        >
                          {task.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold ${getPriorityColor(
                            task.priority
                          )} hover:shadow-md transform hover:scale-105 transition-all duration-200`}
                        >
                          {task.priority}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                          <FiClipboard className="w-8 h-8 text-gray-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-600 mb-1">
                            No tasks available
                          </h3>
                          <p className="text-gray-500 text-sm">
                            Start by creating your first task!
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
