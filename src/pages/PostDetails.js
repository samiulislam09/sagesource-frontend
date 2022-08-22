import React from 'react'
import { useParams } from 'react-router-dom'

function PostDetails() {
    const {id} = useParams()
  return (
      <div>PostDetails page { id }</div>
  )
}

export default PostDetails