// import { useEffect, useState } from "react";
// import { useTaskStore } from "../store/taskStore";
// import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

// const TasksPage = () => {
//   const { tasks, fetchTasks, addTask, updateTask, deleteTask } = useTaskStore();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [currentTask, setCurrentTask] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     status: "Pending",
//     priority: "Medium",
//     due_date: "",
//   });

//   // Fetch tasks on load
//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   // Open modal for add or edit
//   const openModal = (task = null) => {
//     setCurrentTask(task);
//     if (task) {
//       setFormData({
//         title: task.title,
//         description: task.description || "",
//         status: task.status,
//         priority: task.priority,
//         due_date: task.due_date || "",
//       });
//     } else {
//       setFormData({
//         title: "",
//         description: "",
//         status: "Pending",
//         priority: "Medium",
//         due_date: "",
//       });
//     }
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setCurrentTask(null);
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (currentTask) {
//       await updateTask(currentTask.id, formData);
//     } else {
//       await addTask(formData);
//     }
//     closeModal();
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>
//         <button
//           onClick={() => openModal()}
//           className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition"
//         >
//           <FiPlus /> Add Task
//         </button>
//       </div>

//       {/* --- Task Table --- */}
//       <div className="overflow-x-auto bg-white shadow-lg rounded-2xl p-4">
//         <table className="w-full table-auto">
//           <thead className="bg-gray-100 text-left rounded-t-2xl">
//             <tr>
//               <th className="p-3">Title</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">Priority</th>
//               <th className="p-3">Due Date</th>
//               <th className="p-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => (
//               <tr
//                 key={task.id}
//                 className="border-b hover:bg-gray-50 transition"
//               >
//                 <td className="p-3 font-medium text-gray-700">{task.title}</td>
//                 <td className="p-3">
//                   <span
//                     className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
//                       task.status === "Completed"
//                         ? "bg-green-500"
//                         : task.status === "Pending"
//                         ? "bg-red-500"
//                         : "bg-yellow-500"
//                     }`}
//                   >
//                     {task.status}
//                   </span>
//                 </td>
//                 <td className="p-3">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                       task.priority === "High"
//                         ? "bg-red-200 text-red-700"
//                         : task.priority === "Medium"
//                         ? "bg-yellow-200 text-yellow-700"
//                         : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     {task.priority}
//                   </span>
//                 </td>
//                 <td className="p-3">{task.due_date || "-"}</td>
//                 <td className="p-3 flex justify-center gap-3">
//                   <button
//                     onClick={() => openModal(task)}
//                     className="text-yellow-500 hover:text-yellow-600 transition"
//                     title="Edit"
//                   >
//                     <FiEdit size={20} />
//                   </button>
//                   <button
//                     onClick={() => deleteTask(task.id)}
//                     className="text-red-500 hover:text-red-600 transition"
//                     title="Delete"
//                   >
//                     <FiTrash2 size={20} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {tasks.length === 0 && (
//               <tr>
//                 <td colSpan={5} className="text-center text-gray-400 p-4">
//                   No tasks available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* --- Modal --- */}
//       {modalOpen && (
//         <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
//             <h2 className="text-2xl font-bold mb-4 text-gray-800">
//               {currentTask ? "Edit Task" : "Add Task"}
//             </h2>
//             <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Title"
//                 value={formData.title}
//                 onChange={(e) =>
//                   setFormData({ ...formData, title: e.target.value })
//                 }
//                 className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//               <textarea
//                 placeholder="Description"
//                 value={formData.description}
//                 onChange={(e) =>
//                   setFormData({ ...formData, description: e.target.value })
//                 }
//                 className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <div className="flex gap-4">
//                 <select
//                   value={formData.status}
//                   onChange={(e) =>
//                     setFormData({ ...formData, status: e.target.value })
//                   }
//                   className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 >
//                   <option value="Pending">Pending</option>
//                   <option value="In Progress">In Progress</option>
//                   <option value="Completed">Completed</option>
//                 </select>
//                 <select
//                   value={formData.priority}
//                   onChange={(e) =>
//                     setFormData({ ...formData, priority: e.target.value })
//                   }
//                   className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 >
//                   <option value="Low">Low</option>
//                   <option value="Medium">Medium</option>
//                   <option value="High">High</option>
//                 </select>
//               </div>
//               <input
//                 type="date"
//                 value={formData.due_date}
//                 onChange={(e) =>
//                   setFormData({ ...formData, due_date: e.target.value })
//                 }
//                 className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <div className="flex justify-end gap-4 mt-2">
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition"
//                 >
//                   {currentTask ? "Update" : "Add"} Task
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TasksPage;

import { useEffect, useState } from "react";
import { useTaskStore } from "../store/taskStore";
import {
  FiEdit,
  FiTrash2,
  FiPlus,
  FiCalendar,
  FiList,
  FiClock,
} from "react-icons/fi";

const TasksPage = () => {
  const { tasks, fetchTasks, addTask, updateTask, deleteTask } = useTaskStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Medium",
    due_date: "",
  });

  // Fetch tasks on load
  useEffect(() => {
    fetchTasks();
  }, []);

  // Open modal for add or edit
  const openModal = (task = null) => {
    setCurrentTask(task);
    if (task) {
      setFormData({
        title: task.title,
        description: task.description || "",
        status: task.status,
        priority: task.priority,
        due_date: task.due_date || "",
      });
    } else {
      setFormData({
        title: "",
        description: "",
        status: "Pending",
        priority: "Medium",
        due_date: "",
      });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentTask(null);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentTask) {
      await updateTask(currentTask.id, formData);
    } else {
      await addTask(formData);
    }
    closeModal();
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-gradient-to-r from-green-500 to-emerald-600 text-white";
      case "In Progress":
        return "bg-gradient-to-r from-yellow-500 to-orange-600 text-white";
      case "Pending":
        return "bg-gradient-to-r from-red-500 to-pink-600 text-white";
      default:
        return "bg-gradient-to-r from-gray-400 to-gray-500 text-white";
    }
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700 border border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case "Low":
        return "bg-gray-100 text-gray-700 border border-gray-200";
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
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <FiList className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Tasks
                </h1>
                <p className="text-gray-600">
                  Manage your tasks and stay organized
                </p>
              </div>
            </div>
            <button
              onClick={() => openModal()}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              <FiPlus className="w-4 h-4" />
              <span>Add Task</span>
            </button>
          </div>
        </div>

        {/* Task Table */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/20 rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-b border-white/20">
                <tr>
                  <th className="p-4 text-left font-semibold text-gray-800">
                    <div className="flex items-center space-x-2">
                      <FiList className="w-4 h-4" />
                      <span>Title</span>
                    </div>
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-800">
                    Status
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-800">
                    Priority
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-800">
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>Due Date</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-semibold text-gray-800">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr
                    key={task.id}
                    className="border-b border-white/10 hover:bg-white/30 transition-all duration-200 group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <td className="p-4">
                      <div className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                        {task.title}
                      </div>
                      {task.description && (
                        <div className="text-sm text-gray-600 mt-1 truncate max-w-xs">
                          {task.description}
                        </div>
                      )}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${getStatusStyle(
                          task.status
                        )}`}
                      >
                        {task.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityStyle(
                          task.priority
                        )}`}
                      >
                        {task.priority}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2 text-gray-700">
                        {task.due_date ? (
                          <>
                            <FiClock className="w-4 h-4 text-gray-500" />
                            <span>{task.due_date}</span>
                          </>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center space-x-2  group-hover:opacity-100 transition-opacity duration-200">
                        <button
                          onClick={() => openModal(task)}
                          className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600  rounded-lg transition-all duration-200 transform hover:scale-110 shadow-md"
                          title="Edit task"
                        >
                          <FiEdit className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-lg transition-all duration-200 transform hover:scale-110 shadow-md"
                          title="Delete task"
                        >
                          <FiTrash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {tasks.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-12">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-6 shadow-lg">
                          <FiList className="w-12 h-12 text-gray-500" />
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-semibold text-gray-600 mb-2">
                            No tasks yet
                          </h3>
                          <p className="text-gray-500 max-w-sm">
                            Create your first task to get started with your
                            productivity journey!
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

        {/* Stats Section */}
        {tasks.length > 0 && (
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="backdrop-blur-xl bg-white/70 border border-white/20 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <FiList className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Total Tasks
                      </h3>
                      <p className="text-sm text-gray-600">All tasks</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {tasks.length}
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/70 border border-white/20 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <FiList className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Completed</h3>
                      <p className="text-sm text-gray-600">Finished tasks</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {tasks.filter((task) => task.status === "Completed").length}
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/70 border border-white/20 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <FiClock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Pending</h3>
                      <p className="text-sm text-gray-600">Awaiting tasks</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                    {tasks.filter((task) => task.status === "Pending").length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="backdrop-blur-xl bg-white/90 border border-white/20 rounded-2xl shadow-2xl w-full max-w-lg transform transition-all duration-300 scale-100">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <FiList className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {currentTask ? "Edit Task" : "Add New Task"}
                </h2>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiList className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Task title..."
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                    required
                  />
                </div>

                <textarea
                  placeholder="Task description (optional)..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500 resize-none"
                />

                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>

                  <select
                    value={formData.priority}
                    onChange={(e) =>
                      setFormData({ ...formData, priority: e.target.value })
                    }
                    className="px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="Low">Low Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="High">High Priority</option>
                  </select>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiCalendar className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    value={formData.due_date}
                    onChange={(e) =>
                      setFormData({ ...formData, due_date: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    {currentTask ? "Update" : "Create"} Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksPage;
