import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { VideoType } from '../../Types/VideoType';
import { v4 as uuid } from 'uuid';

const unique_id = uuid();
const small_id = unique_id.slice(0,8)

interface VideoState extends VideoType {
}

const initialState: VideoState = {
    id: small_id,
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
        setVideoTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setVideoDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        setVideoIsForKids: (state, action: PayloadAction<boolean>) => {
            state.isForKids = action.payload;
        },
        setVideoUid: (state, action: PayloadAction<string>) => {
            state.uid = action.payload;
        },

    },
});

export const { setVideoUrl,setVideoTitle,setVideoDescription,setVideoIsForKids,setVideoUid } = videoSlice.actions;

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
export const selectVideoId = (state: RootState) => state.video.id;
export const selectVideo = (state: RootState) => state.video;

export default videoSlice.reducer;
