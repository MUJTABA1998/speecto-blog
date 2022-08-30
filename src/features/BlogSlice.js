import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { data } from "../utillities/data";

const initialState = {
  blogs: data,
  blog: null,
};

const BlogSlice = createSlice({
  name: "Blogs",
  initialState,
  reducers: {},
});
