import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userInfoInitState = {
  userList: [],
};

export const createUserList = createAsyncThunk(
  "userInfo/createUserList",
  async (param, { rejectWithValue }) => {
    //param is an object that contains userId and movieId
    try {
      const resp = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/${param.userId}/my-list`,
        method: "POST",
        data: {
          movieId: param.movieId,
        },
      });
      return { movieId: param.movieId, addedList: resp.data.addedMyList };
    } catch (err) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);

export const getUserList = createAsyncThunk(
  "userInfo/getUserList",
  async (param, { rejectWithValue }) => {
    try {
      const { userId } = param;
      const resp = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/${userId}/my-list`,
        method: "get",
      });
      return resp.data.userList;
    } catch (err) {}
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: userInfoInitState,
  reducers: {},
  extraReducers: {
    [getUserList.fulfilled]: (state, action) => {
      state.userList = action.payload;
    },
    [createUserList.fulfilled]: (state, action) => {
      const { movieId, addedList } = action.payload;
      if (addedList) {
        state.userList.push(addedList);
      } else {
        const updatedList = state.userList.filter((list) => {
          return list.movieId !== movieId.toString();
        });
        state.userList = updatedList;
      }
    },
  },
});

export default userInfoSlice.reducer;
