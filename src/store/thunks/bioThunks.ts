import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchBio = createAsyncThunk('bio/add', async () => {
  const response = await axios.get('http://localhost:3000/api/bios');
  // DEV ONLY!!!
  await pause(300);
  return response.data;
});

// DEV ONLY!!!
const pause = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchBio };
