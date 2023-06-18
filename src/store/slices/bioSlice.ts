import { createSlice } from '@reduxjs/toolkit';
import { bioList } from '@/constant';
import { IconKey } from '@/interfaces';
import Bio from '@/app/api/bios/bio.d';

const bioSlice = createSlice({
  name: 'bio',
  initialState: bioList as Bio[],
  reducers: {
    addBio: (state: Bio[], action) => {
      const bio: Bio = {
        icon: action.payload.icon,
        title: action.payload.title,
        paragraph: action.payload.paragraph
      };
      state.push(bio);
    }
  }
});

export const { addBio } = bioSlice.actions;
export const bioReducer = bioSlice.reducer;
