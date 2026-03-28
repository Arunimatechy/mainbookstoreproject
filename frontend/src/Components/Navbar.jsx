import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const Navbar = () => {
  const user = useSelector((s) => s.auth.user)
  const dp = useDispatch()

  return (
    <nav className='px-6 py-4 flex justify-between items-center bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md'>
      <h1 className="font-bold text-xl text-white tracking-wide">
        BOOK STORE
      </h1>

      <div className="flex gap-6 items-center">

        {user ? (
          <>
            <Link
              className="text-white font-medium hover:text-gray-200 transition"
              to="/"
            >
              Home
            </Link>

            <Link
  className="text-white font-medium hover:text-gray-200 transition"
  to="/addbook"
>
  Add Book
</Link>

<Link
  className="text-white font-medium hover:text-gray-200 transition"
  to="/favourites"
>
  Favourites
</Link>
            <button
              onClick={() => dp(logout())}
              className="bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition font-medium"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-white font-medium hover:text-gray-200 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-white text-purple-600 px-4 py-1.5 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Register
            </Link>
          </>
        )}

      </div>
    </nav>
  )
}

export default Navbar;