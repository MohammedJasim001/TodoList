import React from 'react'

const DismissibleAlert = (props) => {

  const {title,count} =props
  return (
    <div>
      <h1 className='text-white'> {title} {count}</h1>
    </div>
  )
}

export default DismissibleAlert
