import { createSlice,nanoid } from "@reduxjs/toolkit"


const initialState = [
    {
        id: '1', title: '포스트 첫번째의 제목', content: `포스트 첫번째의 내용입니다. 내용을 테스트하기 위하여 길게 내용을 작성하고 있습니다.\
    얼마나 길게 작성해야 할지 테스트용입니다.`},
    {id:'2',title:'포스트 두번째의 제목', content:'포스트 두번째의 내용입니다.'}
]

 const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }     
             
        }
        
    }
 })
export const selectAllPosts = (state) => state.posts;
export const {postAdded } = postsSlice.actions;
export default postsSlice.reducer;