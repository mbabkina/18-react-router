import React from 'react'
import '../css/Photos.css'

const img1 = (
  <img
    alt='nature'
    src='https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_1280.jpg'
  />
)
const img2 = (
  <img
    alt='nature'
    src='https://cdn.pixabay.com/photo/2019/03/31/21/43/the-dark-hedges-4094148_1280.jpg'
  />
)
const img3 = (
  <img
    alt='nature'
    src='https://cdn.pixabay.com/photo/2018/03/02/19/21/nature-3194001_1280.jpg'
  />
)
const img4 = (
  <img
    alt='nature'
    src='https://cdn.pixabay.com/photo/2018/02/02/22/28/nature-3126513__340.jpg'
  />
)
const img5 = (
  <img
    alt='nature'
    src='https://cdn.pixabay.com/photo/2016/05/01/17/58/dock-1365387__340.jpg'
  />
)
const img6 = (
  <img
    alt='nature'
    src='https://cdn.pixabay.com/photo/2018/06/09/15/57/aircraft-3464648__340.jpg'
  />
)

const images = [img1, img2, img3, img4, img5, img6]

function Photos() {
  return (
    <div className='photo-wrapper'>
      {images.map((el, i) => (el = images[i]))}
    </div>
  )
}

export default Photos
