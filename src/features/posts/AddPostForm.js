import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { postAdded } from './postsSlice'

const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const dispatch = useDispatch()
    
    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content)
            )

        setTitle('')
        setContent('')
        }
    }

  return (
      <div>
        <h2> 새 Post 추가</h2>
          <form>
              <label htmlFor='postTitle'>post 제목: </label>
              <input type='text' id='postTitle' name='postTitle' value={title} onChange={onTitleChanged} />
              <label htmlFor='postContent'>post 내용: </label>
              <textarea type='text' id='postContent' name='postContent' value={content} onChange={onContentChanged} />
              <button type='button' onClick={onSavePostClicked}>저장하기</button>
          </form>
      </div>
  )
}

export default AddPostForm