// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createBook } from "../features/bookSlice";

// const AddBook = () => {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [price, setPrice] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!title || !author || !price) {
//       alert("All fields are required");
//       return;
//     }
//     const newbook = {
//       title, author, price
//     }

//     dispatch(createBook(newbook));

//     setTitle("");
//     setAuthor("");
//     setPrice("");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-5 border border-gray-200"
//       >
//         <h2 className="text-2xl font-semibold text-center text-gray-800">
//           Add Book
//         </h2>

//         <input
//           type="text"
//           name="title"
//           placeholder="Book Title"
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <input
//           type="text"
//           name="author"
//           placeholder="Author Name"
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />

//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />

//         <button
//           type="submit"
//           className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition duration-200"
//         >
//           Add Book
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddBook;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBook } from "../features/bookSlice";
import toast from "react-hot-toast";
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !price) {
      toast.error("All fields are required"); // ✅ replaced alert
      return;
    }

    const newbook = {
      title, author, price
    }

    dispatch(createBook(newbook));

    toast.success("Book added successfully 📚"); // ✅ added

    setTitle("");
    setAuthor("");
    setPrice("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-5 border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Add Book
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Book Title"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition duration-200"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;

