import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
  books: [],
  loading:false,
  error:null
};

export const createBook = createAsyncThunk('books/createBook',async (formdata,{rejectWithValue}) => {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/books/`,formdata,{
            headers:{
                Authorization:`Bearer ${token}`,
                "Content-Type":"application/json"
            }
        })
        return res.data
    } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong") 
    }
})

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {

  },
  extraReducers:(builder) => {
    builder.addCase(createBook.pending,(state) => {
        state.loading = true
    })
    .addCase(createBook.fulfilled,(state,action) => {
        state.books = action.payload
        state.loading = false
    })
    .addCase(createBook.rejected,(state,action) => {
        state.error = action.payload
    })
  }
});

export const { } = bookSlice.actions;
export default bookSlice.reducer;




