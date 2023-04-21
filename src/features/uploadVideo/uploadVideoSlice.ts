import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { VideoType } from '../../Types/VideoType';

interface VideoState extends VideoType {
}

const initialState: VideoState = {
    title: "",
    description: "",
    dislikes: 0,
    likes: 0,
    isForKids: false,
    monitize: false,
    thumbnail: "",
    tags: [],
    uid: "",
    uploadDate: "",
    url: "",
    views: 0,
    comments: [],
};

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        setVideoUrl: (state, action: PayloadAction<string>) => {
            state.url = action.payload;
        },

    },
});

export const { setVideoUrl, } = videoSlice.actions;

export const fetchVideoUrl = () => {
    return async (dispatch: any) => {
        const storage = getStorage();
        try {
            const url = await getDownloadURL(ref(storage, 'videos/'));
            console.log(url)
            dispatch(setVideoUrl(url));
        } catch (error: any) {
            console.log('videoSlice fetch', error)
        }
    };
};

export const selectVideoUrl = (state: RootState) => state.video.url;

export default videoSlice.reducer;
