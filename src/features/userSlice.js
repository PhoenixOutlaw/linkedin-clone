import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,

};



export const userSlice = createSlice({
  name: 'user',
  initialState,
 
  reducers: {
    login: (state,action) => {
    state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
   
  },

//  extraReducers: (builder) => {
//     builder
//       .addCase(incrementAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(incrementAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.user += action.payload;
//       });
//   },
});

export const { logout,login } = userSlice.actions;
export const selectuser = (state) => state.user.user;


export default userSlice.reducer;
