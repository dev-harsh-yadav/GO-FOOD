import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, setrestaurant] = useState(null);
  const { resid } = useParams();
  useEffect(() => {
    getRestaurantinfo();
  }, []);
  async function getRestaurantinfo() {
    const details = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.1318653&lng=77.2663771&restaurantId="+ resid +"&catalog_qa=undefined&submitAction=ENTER"
    );
    const detail = await details.json();
    console.log(
      detail?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    const data =
      detail?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    setrestaurant(data);
    console.log(restaurant);
  }
  if (!restaurant) return <Shimmer />;
  else {
    return( 
      <>
      <h1 className=" flex justify-center font-bold text-5xl" >RESTAURANT MENU CARD</h1>
      <div  className="flex flex-wrap justify-center m-4">
      <MenuCard {...restaurant} />;
      </div>
      </>
      )
  }
};

export default RestaurantMenu;
