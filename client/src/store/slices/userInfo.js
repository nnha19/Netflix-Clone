import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userInfoInitState = {
  myList: [],
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
      return resp.data.addedMyList;
    } catch (err) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: userInfoInitState,
  reducers: {},
  extraReducers: {
    [createUserList.fulfilled]: (state, action) => {
      state.myList.push(action.payload);
    },
  },
});

export default userInfoSlice.reducer;
