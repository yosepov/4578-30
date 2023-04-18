import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import videoReducer from '../features/uploadVideo/uploadVideoSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        video:videoReducer
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
