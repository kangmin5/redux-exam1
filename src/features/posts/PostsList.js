import '../../style.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    const renderedPosts = posts.map(post => (
        <article key={post.id} className="post" >
            <h3>{post.title }</h3>
            <p>{post.content.substring(0,100) }</p>
        </article>
    ))

  return (
      <div>
          <h2>Posts</h2>
            <div className="posts">
              {renderedPosts}
            </div>
      </div>
  )
}

export default PostsList