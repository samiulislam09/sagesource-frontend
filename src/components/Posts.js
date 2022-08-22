import React from 'react'
import usePost from '../hooks/usePost'
import Post from './Post';
import './Posts.css'

function Posts(props) {
    const [post, loading, error] = usePost([])
    console.log(post)
    if (loading) {
        return <p>loading...</p>
    }
  return (
    <div className='flex w-11/12 mx-auto no-scrollbar py-6 overflow-x-scroll overflow-y-auto'>
              {
                post.data.slice(0, props.limit).map(post=><Post key={post._id} post={post}></Post>)
              }
    </div>
  )
}

export default Posts