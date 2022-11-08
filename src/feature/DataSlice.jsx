import { createSlice } from '@reduxjs/toolkit';
import update from 'react-addons-update';

export const dataSlice = createSlice({
  name: 'Hackathons',
  initialState: {
    myChallenges: [
      {
        id: 0,
        description: 'asdfg',
        start_date: '2022-11-13T08:00',
        end_date: '2022-11-14T05:30',
        name: 'Data Sprint 72 - Butterfly Identification',
        level: 'Easy',
        image: 'https://i.ibb.co/7r5yL5y/773900d05332.png',
        status: '..',
      },
      {
        id: 1,
        description: 'asdfgsd',
        start_date: '2022-11-01T02:00',
        end_date: '2022-11-02T15:00',
        name: 'Data Sprint 71 - Weather Recognition',
        level: 'Easy',
        image: 'https://i.ibb.co/7r5yL5y/773900d05332.png',
        status: '..',
      },
      {
        id: 2,
        description: 'asdfgsddsfg',
        start_date: '2022-11-07T08:00',
        end_date: '2022-11-10T15:00',
        name: 'Data Science Bootcamp - Graded Datathon',
        level: 'Easy',
        image: 'https://i.ibb.co/7r5yL5y/773900d05332.png',
        status: '..',
      }],
  },
  reducers: {
    addNewHackathon: (state, action) => {
      const myChallenges = [];
      myChallenges.push(action.payload);
      return { ...state, myChallenges: [...state.myChallenges, action.payload] };
    },
    updateHackathon: (state, action) => update(state, {
      myChallenges: {
        [action.payload.id]: {
          $set: action.payload,
        },
      },
    }),
  },
});

export const { addNewHackathon, updateHackathon } = dataSlice.actions;

export default dataSlice.reducer;
