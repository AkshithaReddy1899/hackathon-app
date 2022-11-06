import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'Hackathons',
  initialState: {
    myChallenges: [],
  },
  reducers: {
    addNewHackathon: (state, action) => {
      const myChallenges = [];
      myChallenges.push(action.payload);
      return { ...state, myChallenges: [...state.myChallenges, action.payload] };
    },
  },
});

export const { addNewHackathon } = dataSlice.actions;

export default dataSlice.reducer;
