import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { User } from '@firebase/auth';

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            
        },
        removeUser: (state) => {
            state.user = null;
        },
    }
})

// must
export const { setUser, removeUser } = userSlice.actions;

// 
export const selectUser = (state: RootState) => state.user.user;

// must
export default userSlice.reducer;