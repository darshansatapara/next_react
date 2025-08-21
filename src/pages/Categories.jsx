import { useEffect, useState } from "react";
import { useCategoryStore } from "../store/categoryStore";
import { FiEdit, FiTrash2, FiCheck, FiX } from "react-icons/fi";

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

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Categories</h1>

      {/* Add Category */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New category name"
          className="flex-1 p-2 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition"
        >
          Add
        </button>
      </div>

      {/* Category List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-2xl shadow-lg p-4 flex justify-between items-center hover:shadow-xl transition"
          >
            {editId === cat.id ? (
              <div className="flex-1 flex gap-2 items-center">
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
                <button
                  onClick={() => handleUpdate(cat.id)}
                  className="text-green-600 hover:text-green-700 transition"
                  title="Save"
                >
                  <FiCheck size={20} />
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="text-gray-400 hover:text-gray-600 transition"
                  title="Cancel"
                >
                  <FiX size={20} />
                </button>
              </div>
            ) : (
              <>
                <span className="font-medium text-gray-700">{cat.name}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(cat)}
                    className="text-yellow-500 hover:text-yellow-600 transition"
                    title="Edit"
                  >
                    <FiEdit size={20} />
                  </button>
                  <button
                    onClick={() => deleteCategory(cat.id)}
                    className="text-red-500 hover:text-red-600 transition"
                    title="Delete"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
        {categories.length === 0 && (
          <p className="text-gray-400 col-span-full text-center">
            No categories yet
          </p>
        )}
      </div>
    </div>
  );
};

export default Categories;
