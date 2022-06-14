import postsReducer from "../features/posts/postsSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        posts:postsReducer,
    }
})