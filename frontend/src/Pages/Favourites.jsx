import React from 'react'
import { useNavigate } from 'react-router-dom'

const Favourites = () => {
    const navigate = useNavigate()
    const handleBack=()=>{
        navigate(-1)
    }
  return (
    <div className='p-6'>
    <h1 className="text-2xl font-bold mb-4">Favourites</h1>
<button
  onClick={handleBack}
  className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition duration-300"
>
   Back
</button>
    </div>
  )
}

export default Favourites

