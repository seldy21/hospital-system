import { createSlice } from '@reduxjs/toolkit';

const userSlices = createSlice({
  name: 'user',
  initialState: {
    userInfo: {},
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = userSlices.actions;
export default userSlices.reducer;
