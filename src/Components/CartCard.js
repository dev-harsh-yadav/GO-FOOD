import React from 'react'
import { IMG_URL_CDN } from '../../constant'

const CartCard = ({id,name,description,imageId,price}) => {
  return (
    <div className="drop-shadow-lg bg-white max-w-xs max-h-full m-4  p-3 bg-orange-100" key={id}>
        <div  className="grid gap-3 grid-cols-1">
          <img alt="img" src={IMG_URL_CDN + imageId} />
          <hr/>
          <h2 className="font-bold text-3xl">{name}</h2>
          <hr/>
          <h3 className="font-bold text-xl">description : {description}</h3>
          <h3 className="font-bold text-lg">price :- 💸{parseInt(price/ 100)}</h3>
        </div>
    </div>
  )
}

export default CartCard