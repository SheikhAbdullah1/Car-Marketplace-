import React from 'react'

function CarItem(car) {
  return (
    <div>
        <img src={car?.image} width={300} height={250} />
    </div>
  )
}

export default CarItem