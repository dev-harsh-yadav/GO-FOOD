import { useState } from "react";
import { restaurantList } from "../../constant"; 
import ResturantCard from "./RestaurantCard";

function filterData(searchText,restaurantList) {
  return restaurantList.filter((restraunts)=>restraunts?.data?.data?.name.includes(searchText));
}

const Body = () => {
  const [searchText,setSearchText]=useState("");
  const [restaurants,setrestaurant]=useState(restaurantList);
  let data=[];
    return (
      <>
      <div className="searchbar">
      <input 
      type="text"
      placeholder="SEARCH"
      value={searchText}
      onChange={(e)=>
      {
        if((e.target.value))
        {
          setrestaurant(restaurantList)
          setSearchText(e.target.value);
      data=filterData(searchText,restaurants);
      setrestaurant(data)};
      }
      }
      />
      <button className="search-btn"
      // onClick={()=>
      //     {
      //        data=filterData(searchText,restaurants);
      //       setrestaurant(data);
      //     }
      // }
      >SEARCH</button>
      </div> 
      <div className="content">
      {
        restaurants.map((restaurant)=>{
              return <ResturantCard {...(restaurant?.data?.data)}  key={restaurant?.data?.data?.id}/>
          })
      }
      </div >
      </>
    );
  };
  export default Body;