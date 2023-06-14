import React from 'react'

const Card = ({ name, handle, style }) => {
  return (
    <div className="Card" style={{ ...style }}>
    <span>{name}</span> • <span>{handle}</span>
  </div>
  )
}

export default Card
