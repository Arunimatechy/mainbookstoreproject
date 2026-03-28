
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getBooks } from "../features/bookSlice";
// import Card from "../Components/Card";

// const Home = () => {
//   const dispatch = useDispatch();

//   const { books, loading, error } = useSelector((s) => s.books);

//   useEffect(() => {
//     dispatch(getBooks());
//   }, [dispatch]);

//   if (loading) return <p className="text-center">Loading...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <h1 className="text-3xl font-bold mb-8 text-center">
//         Book Store
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {books?.length > 0 ? (
//           books.map((book) => (
//             <Card key={book.id} book={book} />
//           ))
//         ) : (
//           <p>No books available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;










import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../features/bookSlice";
import Card from "../Components/Card";

const Home = () => {
  const dispatch = useDispatch();

  const { books, loading, error } = useSelector((s) => s.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Book Store
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.length > 0 ? (
          books.map((book) => (
            <Card key={book.id} book={book} />
          ))
        ) : (
          <p>No books available</p>
        )}
      </div>
    </div>
  );
};

export default Home;  




























