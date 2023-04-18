import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

interface VideoState {
  url: string | null;
  error: string | null;
}

const initialState: VideoState = {
  url: null,
  error: null,
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setUrl, setError } = videoSlice.actions;

export const fetchVideoUrl = () => {
  return async (dispatch: any) => {
    const storage = getStorage();
    try {
      const url = await getDownloadURL(ref(storage, 'videos/'));
      console.log(url)
      dispatch(setUrl(url));
    } catch (error:any) {
      dispatch(setError(error.message));
    }
  };
};

export const selectVideoUrl = (state: RootState) => state.video.url;
export const selectVideoError = (state: RootState) => state.video.error;

export default videoSlice.reducer;
