import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        posts: postsReducer,
        users: usersReducer,
    }
})