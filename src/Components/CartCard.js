import React from 'react'
import { IMG_URL_CDN } from '../../constant'
import { useDispatch } from 'react-redux'
import {removeitem} from "../../utils/CartSlice"

const CartCard = ({id,name,description,imageId,price}) => {

  const dispatch=useDispatch();
  function handelremoveItems(id){
    dispatch(removeitem(id));
  }

  return (
    <div className="drop-shadow-lg  max-w-xs max-h-full m-4  p-3 bg-orange-100" key={id}>
        <div  className="grid gap-3 grid-cols-1">
          <img alt="img" src={IMG_URL_CDN + imageId} />
          <hr/>
          <h2 className="font-bold text-3xl">{name}</h2>
          <hr/>
          <h3 className="font-black text-xl">description : {description}</h3>
          <h3 className="font-bold text-lg">price :- 💸{parseInt(price/ 100)}</h3>
          <button 
        className="rounded-2xl justify-center  bg-black p-2 text-white \ "
        onClick={()=>handelremoveItems(id)}>remove item </button>
      </div>
    </div>
  )
}

export default CartCard