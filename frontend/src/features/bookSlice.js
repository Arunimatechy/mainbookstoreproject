// import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
// import axios from 'axios'
// const initialState = {
//   books: [],
//   loading:false,
//   error:null
// };

// export const createBook = createAsyncThunk('books/createBook',async (formdata,{rejectWithValue}) => {
//     try {
//         const token = localStorage.getItem('token')
//         const res = await axios.post(`${import.meta.env.VITE_API_URL}/books/`,formdata,{
//             headers:{
//                 Authorization:`Bearer ${token}`,
//                 "Content-Type":"application/json"
//             }
//         })
//         return res.data
//     } catch (error) {
//         return rejectWithValue(error.response?.data || "Something went wrong") 
//     }
// })

// const bookSlice = createSlice({
//   name: "books",
//   initialState,
//   reducers: {

//   },
//   extraReducers:(builder) => {
//     builder.addCase(createBook.pending,(state) => {
//         state.loading = true
//     })
//     .addCase(createBook.fulfilled,(state,action) => {
//         state.books = action.payload
//         state.loading = false
//     })
//     .addCase(createBook.rejected,(state,action) => {
//         state.error = action.payload
//     })
//   }
// });

// export const { } = bookSlice.actions;
// export default bookSlice.reducer;



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   books: [],
//   currentBook: null,
//   loading: false,
//   error: null,
// };

// // ✅ CREATE BOOK
// export const createBook = createAsyncThunk(
//   "books/createBook",
//   async (formdata) => {
//     const token = JSON.parse(localStorage.getItem("token"));

//     if (!token) {
//       alert("Not authenticated. Login to add book");
//       return;
//     }

//     const res = await axios.post(
//       `${import.meta.env.VITE_API_URL}/books/`,
//       formdata,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return res.data;
//   }
// );

// // ✅ GET BOOKS
// export const getBooks = createAsyncThunk("books/getBooks", async () => {
//   const token = JSON.parse(localStorage.getItem("token"));

//   const res = await axios.get(
//     `${import.meta.env.VITE_API_URL}/books/`,
//     {
//       headers:{
//         Authorization:`Bearer ${token}`
//       }
//     }
//   );

//   return res.data;
// });

// // ✅ GET SINGLE BOOK
// export const getSingleBook = createAsyncThunk(
//   "books/getSingleBook",
//   async (id) => {
//     const token = JSON.parse(localStorage.getItem("token"));

//     const res = await axios.get(
//       `${import.meta.env.VITE_API_URL}/books/${id}`,
//       {
//         headers: {Authorization: `Bearer ${token}` }
//       }
//     );

//     return res.data;
//   }
// );

// const bookSlice = createSlice({
//   name: "books",
//   initialState,
//   reducers: {
//     clearError: (state) => {
//       state.error = null;
//     },
//     resetBooks: (state) => {
//       state.books = [];
//       state.loading = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // CREATE
//       .addCase(createBook.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(createBook.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(createBook.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       // GET BOOKS
//       // .addCase(getBooks.pending, (state) => {
//       //   state.loading = true;
//       // })
//       .addCase(getBooks.fulfilled, (state, action) => {
//         state.loading = false;
//         state.books = action.payload;
//       })
//       // .addCase(getBooks.rejected, (state, action) => {
//       //   state.loading = false;
//       //   state.error = action.error.message;
//       // })

//       // GET SINGLE BOOK
//       .addCase(getSingleBook.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getSingleBook.fulfilled, (state, action) => {
//         state.loading = false;
//         state.currentBook = action.payload;
//       })
//       .addCase(getSingleBook.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { clearError, resetBooks } = bookSlice.actions;
// export default bookSlice.reducer;






// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   books: [],
//   currentBook: null,
//   loading: false,
//   error: null,
// };

// // ✅ CREATE BOOK
// export const createBook = createAsyncThunk(
//   "books/createBook",
//   async (formdata) => {
//     const token = JSON.parse(localStorage.getItem("token"));

//     if (!token) {
//       alert("Not authenticated. Login to add book");
//       return;
//     }

//     const res = await axios.post(
//       `${import.meta.env.VITE_API_URL}/books/`,
//       formdata,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return res.data;
//   }
// );

// // ✅ GET BOOKS
// export const getBooks = createAsyncThunk("books/getBooks", async () => {
//   const token = JSON.parse(localStorage.getItem("token"));

//   const res = await axios.get(
//     `${import.meta.env.VITE_API_URL}/books/`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   return res.data;
// });

// // ✅ GET SINGLE BOOK
// export const getSingleBook = createAsyncThunk(
//   "books/getSingleBook",
//   async (id) => {
//     const token = JSON.parse(localStorage.getItem("token"));

//     const res = await axios.get(
//       `${import.meta.env.VITE_API_URL}/books/${id}`,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     return res.data;
//   }
// );

// // ✅ UPDATE BOOK (NEW)
// export const updateBook = createAsyncThunk(
//   "books/updateBook",
//   async ({ id, formdata }) => {
//     const token = JSON.parse(localStorage.getItem("token"));

//     const res = await axios.put(
//       `${import.meta.env.VITE_API_URL}/books/${id}`,
//       formdata,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     return res.data;
//   }
// );

// const bookSlice = createSlice({
//   name: "books",
//   initialState,
//   reducers: {
//     clearError: (state) => {
//       state.error = null;
//     },
//     resetBooks: (state) => {
//       state.books = [];
//       state.loading = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // CREATE
//       .addCase(createBook.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(createBook.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(createBook.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       // GET BOOKS
//       .addCase(getBooks.fulfilled, (state, action) => {
//         state.loading = false;
//         state.books = action.payload;
//       })

//       // GET SINGLE BOOK
//       .addCase(getSingleBook.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getSingleBook.fulfilled, (state, action) => {
//         state.loading = false;
//         state.currentBook = action.payload;
//       })
//       .addCase(getSingleBook.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       // ✅ UPDATE BOOK (NEW)
//       .addCase(updateBook.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(updateBook.fulfilled, (state, action) => {
//         state.loading = false;
// alert("book update")
//         // update book in list
//         state.books = state.books.map((b) =>
//           b.id === action.payload.id ? action.payload : b
//         );
//       })
//       .addCase(updateBook.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { clearError, resetBooks } = bookSlice.actions;
// export default bookSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  currentBook: null,
  loading: false,
  error: null,
};

// ✅ CREATE BOOK
export const createBook = createAsyncThunk(
  "books/createBook",
  async (formdata, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      if (!token) {
        return rejectWithValue("Not authenticated");
      }

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/books/`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Create failed");
    }
  }
);

// ✅ GET BOOKS
export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (_, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/books/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Fetch failed");
    }
  }
);

// ✅ GET SINGLE BOOK
export const getSingleBook = createAsyncThunk(
  "books/getSingleBook",
  async (id, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/books/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Fetch failed");
    }
  }
);

// ✅ UPDATE BOOK
export const updateBook = createAsyncThunk(
  "books/updateBook",
  async ({ id, formdata }, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/books/${id}/`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Update failed");
    }
  }
);

// ✅ DELETE BOOK
export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/books/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Delete failed");
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // CREATE
      .addCase(createBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books.push(action.payload);
      })
      .addCase(createBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET
      .addCase(getBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })

      // SINGLE
      .addCase(getSingleBook.fulfilled, (state, action) => {
        state.currentBook = action.payload;
      })

      // ✅ UPDATE
      .addCase(updateBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.loading = false;

        state.books = state.books.map((b) =>
          b.id === action.payload.id ? action.payload : b
        );
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ DELETE
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((b) => b.id !== action.payload);
      });
  },
});

export default bookSlice.reducer;