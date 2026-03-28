import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const storedUser = localStorage.getItem('token');

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  loading: false,
  error: null
};

// ✅ REGISTER
export const registerUser = createAsyncThunk(
  "auth/register",
  async (formdata, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/register/`,
        formdata
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ LOGIN (FIXED rejectWithValue)
export const loginUser = createAsyncThunk(
  "auth/login",
  async (formdata, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/token/`,
        formdata
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    logout:(state) => {
      state.user = null;
      localStorage.removeItem('token');
    }
  },
  extraReducers:(builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending,(state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled,(state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected,(state,action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOGIN
     
      .addCase(loginUser.fulfilled,(state,action) => {
        state.loading = false;
        state.user = action.payload.access;
        localStorage.setItem('token', JSON.stringify(action.payload.access));
        alert("logged in user")
      })
     
  }
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;