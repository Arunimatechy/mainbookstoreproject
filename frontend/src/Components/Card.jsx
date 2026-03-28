


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateBook, deleteBook } from "../features/bookSlice";

const Card = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(book);

  
  useEffect(() => {
    setFormData(book);
  }, [book]);

  if (!book) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(updateBook({ id: book.id, formdata: formData }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(book);
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <div className="relative bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">

      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={formData?.title || ""}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />

          <input
            type="text"
            name="author"
            value={formData?.author || ""}
            onChange={handleChange}
            className="border p-2 mb-2 w-full"
          />

          <input
            type="number"
            name="price"
            value={formData?.price || ""}
            onChange={handleChange}
            className="border p-2 mb-3 w-full"
          />

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Save
            </button>

            <button
              onClick={handleCancel}
              className="bg-gray-400 text-white px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2
            onClick={() => navigate(`/bookdetail/${book.id}`)}
            className="text-xl font-semibold mb-2 text-gray-800 cursor-pointer"
          >
            {book.title}
          </h2>

          <p className="text-gray-500 mb-2">
            Author: {book.author}
          </p>

          <p className="text-green-600 font-bold mb-4">
            ₹ {book.price}
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}

      <div className="absolute bottom-4 right-4 text-gray-400 hover:text-red-500">
        <FaHeart size={20} />
      </div>
    </div>
  );
};

export default Card;