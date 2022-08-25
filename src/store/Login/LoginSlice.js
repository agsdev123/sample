import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import storage from "redux-persist/lib/storage";
import { common } from "../../services/Common";


export const userLogin = createAsyncThunk("auth/login", async ({ data, navigate }) => {
  try {
    const response = await common.userSignup(data);
    if (response.status === 200) {
      navigate("/");
      console.log("ok1");
      message.success("sucessfully Logined");
      return response?.data.data;
    } else {
      message.error("something went wrong please try again");
    }
  } catch (error) {
    console.log("ok 2");
    message.error("something went wrong please try again");
    return error;
  }
});
export const userSignup = createAsyncThunk("auth/login", async ({ data, navigate }) => {
  try {
    const response = await common.userSignup(data);
    if (response.status === 200) {
      navigate("/");
      console.log("ok1");
      message.success("sucessfully Logined");
      return response?.data.data;
    } else {
      message.error("something went wrong please try again");
    }
  } catch (error) {
    console.log("ok 2");
    message.error("something went wrong please try again");
    return error;
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    profileinfo: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [userLogin.pending]: (state, action) => {
      state.loading = true;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.loading = false;
      state.profileinfo = action.payload;
    },
    [userLogin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [userSignup.pending]: (state, action) => {
      state.loading = true;
    },
    [userSignup.fulfilled]: (state, action) => {
      state.loading = false;
      state.profileinfo = action.payload;
    },
    [userSignup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  reducers: {
    logoutreducers(state) {
      console.log("logout", state);
      storage.removeItem("persist:root");
      // window.location.reload();
      state.profileinfo = [];
    },
  },
});

export const { logoutreducers } = loginSlice.actions;

console.log(loginSlice.reducer);

export default loginSlice.reducer;
