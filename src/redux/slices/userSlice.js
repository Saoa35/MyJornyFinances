import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  userLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
