import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBook } from "../features/bookSlice";

const Bookdetail = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  const { currentBook, loading } = useSelector((state) => state.books)

  useEffect(() => {
    dispatch(getSingleBook(id))
  }, [dispatch, id])

  if(loading){
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
        <h2 className="text-xl font-semibold text-gray-700 animate-pulse">
          Loading...
        </h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg border border-gray-200">
        
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          {currentBook?.title}
        </h1>

        <div className="space-y-4 text-center">
          
          <p className="text-gray-600 text-lg">
            <span className="font-semibold text-gray-700">Author:</span> {currentBook?.author}
          </p>

          <p className="text-green-600 font-bold text-2xl">
            ₹ {currentBook?.price}
          </p>

        </div>

      </div>

    </div>
  )
}

export default Bookdetail