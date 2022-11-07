import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'Hackathons',
  initialState: {
    myChallenges: [
      {
        id: 0,
        description: 'asdfg',
        start_date: '2022-11-13',
        end_date: '2022-11-14',
        name: 'asdfg',
        level: 'Easy',
        image: 'https://i.ibb.co/7r5yL5y/773900d05332.png',
      },
      {
        id: 1,
        description: 'asdfgsd',
        start_date: '2022-11-13',
        end_date: '2022-11-14',
        name: 'asdfgasd',
        level: 'Easy',
        image: 'https://i.ibb.co/7r5yL5y/773900d05332.png',
      }],
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
