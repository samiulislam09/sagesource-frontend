import React from 'react'
import {Link} from 'react-router-dom'

function Post({ post }) {
  console.log(post);
  return (
    <div className="w-72 mx-2 lg:w-11/12">
      <Link to={`/blog/${post._id}`}>
        <div className="bg-white rounded-lg w-72 mb-5">
            <a href="#">
                <img className="rounded-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div className="py-5 text-left">
                <a href="#">
                      <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{ post.title }...</h5>
                </a>
                  <p className="font-normal text-gray-700 mb-3">{ post.desc }</p>
                  
            </div>
        </div>
      </Link>
    </div>
  )
}

export default Post