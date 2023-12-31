import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data/Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email, role } = action.payload;
      const updatedUser = state.find((user) => user.id == id);
      if (updatedUser) {
        updatedUser.name = name;
        updatedUser.email = email;
        updateUser.role = role;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const removeUser = state.find((user) => user.id == id);
      if (removeUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
