import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'Hackathons',
  initialState: {
    myChallenges: [],
    Challenges: [],
  },
  reducers: {},
});

export default dataSlice.reducer;
