import React from 'react'
import CategoryItem from './../CategoryItem/CategoryItem';

const Directory = ({catergories}) => {
  return (
    <div className='categories-container'>

      {catergories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
      
    </div>
  )
}

export default Directory
