import React from 'react'
import Banner from '../components/Banner'
import Posts from '../components/Posts'

function Home() {
  return (
      <div>
      <div>
        <Banner></Banner>
        <p className='m-8 font-bold text-2xl uppercase text-black text-start'>recent posts</p>
        <Posts limit={6}></Posts>
      </div>
    </div>
  )
}

export default Home