import {
  createAsyncThunk,
  createSlice,
  configureStore,
} from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("users/update", async (user) => {
  const res = await axios.post(
    "http://localhost:8800/api/users/123/update",
    user
  );
  return res.data;
});


export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "bayram",
      email: "bayram@gmail.com",
    },
    pending: null,
    error: false,
  },

  reducers: {
    // FIRST ACTIONS IN REDUX-TOOLKIT TUTORIAL
    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    // },
    // remove: (state) => (state = {}),
    // addHello: (state,action)=>{
    //     state.name="Hello " +action.payload.name
    // }
    // EASY WAY TO HANDLE REDUX ASYNC ACTIONS
    // updateStart:(state)=>{
    //     state.pending=true;
    // },
    // updateSucces:(state,action)=>{
    //     state.pending=false;
    //     state.userInfo=action.payload
    // },
    // updateError:(state)=>{
    //     state.error=true;
    //     state.pending=false;
    // }
  },

  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo=action.payload;
    },
    [updateUser2.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
  },
});

export const { updateStart, updateSucces, updateError } = userSlice.actions;
export default userSlice.reducer;
