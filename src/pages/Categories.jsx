import { useEffect, useState } from "react";
import { useCategoryStore } from "../store/categoryStore";
import { FiEdit, FiTrash2, FiCheck, FiX, FiPlus, FiTag } from "react-icons/fi";

const Categories = () => {
  const {
    categories,
    fetchCategories,
    addCategory,
    deleteCategory,
    updateCategory,
  } = useCategoryStore();
  const [newName, setNewName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = async () => {
    if (!newName) return;
    await addCategory(newName);
    setNewName("");
  };

  const startEdit = (cat) => {
    setEditId(cat.id);
    setEditName(cat.name);
  };

  const handleUpdate = async (id) => {
    if (!editName) return;
    await updateCategory(id, editName);
    setEditId(null);
    setEditName("");
  };

  const handleKeyPress = (e, action) => {
    if (e.key === "Enter") {
      if (action === "add") {
        handleAdd();
      } else if (action === "edit") {
        handleUpdate(editId);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400 to-pink-500 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative p-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <FiTag className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Categories
              </h1>
              <p className="text-gray-600">
                Organize your tasks with custom categories
              </p>
            </div>
          </div>
        </div>

        {/* Add Category Section */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/20 rounded-2xl p-6 shadow-xl mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FiPlus className="w-5 h-5 mr-2 text-blue-600" />
            Create New Category
          </h2>
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiTag className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, "add")}
                placeholder="Enter category name..."
                className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
              />
            </div>
            <button
              onClick={handleAdd}
              disabled={!newName.trim()}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg ${
                newName.trim()
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <FiPlus className="w-4 h-4" />
              <span>Add</span>
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              className="backdrop-blur-xl bg-white/70 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {editId === cat.id ? (
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiTag className="w-4 h-4 text-gray-400" />
                    </div>
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      onKeyPress={(e) => handleKeyPress(e, "edit")}
                      className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      autoFocus
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => handleUpdate(cat.id)}
                      className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                      title="Save changes"
                    >
                      <FiCheck className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setEditId(null);
                        setEditName("");
                      }}
                      className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                      title="Cancel editing"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 truncate">
                      {cat.name}
                    </span>
                  </div>
                  <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => startEdit(cat)}
                      className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white rounded-lg transition-all duration-200 transform hover:scale-110 shadow-md"
                      title="Edit category"
                    >
                      <FiEdit className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => deleteCategory(cat.id)}
                      className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-lg transition-all duration-200 transform hover:scale-110 shadow-md"
                      title="Delete category"
                    >
                      <FiTrash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {categories.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <FiTag className="w-12 h-12 text-gray-500" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No categories yet
                </h3>
                <p className="text-gray-500 max-w-sm">
                  Create your first category to start organizing your tasks
                  better!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Stats Section */}
        {categories.length > 0 && (
          <div className="mt-8">
            <div className="backdrop-blur-xl bg-white/70 border border-white/20 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FiTag className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Total Categories
                    </h3>
                    <p className="text-sm text-gray-600">
                      Active organization tags
                    </p>
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {categories.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
