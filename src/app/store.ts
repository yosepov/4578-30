import { configureStore, combineReducers  } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import videoReducer from '../features/uploadVideo/uploadVideoSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const rootPersistConfig = {
    key: 'root',
    storage,
  }

  const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['uid']

  }

  
const rootReducer = combineReducers({ 
      user: persistReducer(userPersistConfig, userReducer),
      video: videoReducer
    })
    
const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
  

 export const store = configureStore({
    reducer: persistedReducer
  })
    
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
