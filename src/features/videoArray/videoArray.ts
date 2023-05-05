import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface VideosState {
    videos: [],
}

const initialState: VideosState = {
    videos: [],
};

export const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        setVideos: (state, action: PayloadAction<[]>) => {
            state.videos = action.payload
        }
    }
})

export const {setVideos} = videosSlice.actions

export const allVideos = (state: RootState) => state.videos
export default videosSlice.reducer;
