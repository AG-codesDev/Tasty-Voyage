import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isMenuOpen: false,
    resList: null,
    cityDetails: [],
    latitudeLongitude: [],
  },

  reducers: {
    toggleSideBar: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    addResList: (state, action) => {
      state.resList = action.payload;
      // console.log(action.payload);
    },
    setCityDetails: (state, action) => {
      state.cityDetails = action.payload;
      // console.log(action.payload);
    },
    setlatitudeLongitude: (state, action) => {
      state.latitudeLongitude = action.payload;
      // console.log(action.payload);
    },
  },
});

export const {
  toggleSideBar,
  addResList,
  setCityDetails,
  setlatitudeLongitude,
} = sideBarSlice.actions;
export default sideBarSlice.reducer;
