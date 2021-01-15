import React from 'react'

const Posts = (props) => {
  return (
    <div className='post' key={props.id}>
      <div className='head-wrapper'>
        <img alt='avatar' className='icon' src={props.photo} />
        <span className='name'>{props.name}</span>
        <span className='nick'>{props.nickname}</span>
        <span className='date'>{props.date}</span>
      </div>

      <p className='content'>{props.content}</p>
      <img alt='post' className='photo' src={props.image} />
    </div>
  )
}

export default Posts
