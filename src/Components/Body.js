import { useState, useEffect } from "react";
import { restaurantList } from "../../constant";
import ResturantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurantList) {
  return restaurantList.filter((restraunts) =>
    restraunts?.info?.name.toUpperCase().includes(searchText.toUpperCase())
  );
}

const Body = () => {
  const [apiRestaurant, setapiRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [restaurants, setrestaurant] = useState(restaurantList);

  useEffect(() => {
    getRestaurantdata();
  }, []);

  async function getRestaurantdata() {
    const details = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.1318653&lng=77.2663771&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const detail = await details.json();
    console.log(detail);
    const rest =
      detail?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // error aa rha tha kabhi ye array 4 mai hai kabhi ye array 3 mai
    const finalrest =
      rest?.length > 0
        ? rest
        : detail?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
    setapiRestaurant(finalrest);
    setrestaurant(finalrest);
  }
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="SEARCH"
          value={searchText}
          onChange={(e) => {
            {
              setSearchText(e.target.value);
              data = filterData(e.target.value, apiRestaurant);
              setrestaurant(data);
            }
          }}
        />
        <button className="search-btn">SEARCH</button>
      </div>
      <div className="content">
        {restaurants === restaurantList ? (
          <Shimmer />
        ) : (
          restaurants?.map((restaurant) => {
            console.log(restaurants.length);
            return (<h1 className="">Top restaurant chains in Yamuna Nagar'</h1>) &&(
              <>
              <Link
                className="linkstyle"
                to={"/restaurants/" + restaurant?.info?.id}
                key={restaurant?.info?.id}>
                <ResturantCard {...restaurant?.info} />
              </Link>
              </>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;

{
  // chaning the dmmy card that was harcoded with the shimmer
  // return (
  //   <>
  //     <div className="searchbar">
  //       <input
  //         type="text"
  //         placeholder="SEARCH"
  //         value={searchText}
  //         onChange={(e) => {
  //           {
  //             setSearchText(e.target.value);
  //             data = filterData(e.target.value, apiRestaurant);
  //             setrestaurant(data);
  //           }
  //         }}
  //       />
  //       <button className="search-btn">SEARCH</button>
  //     </div>
  //     <div className="content">
  //       {restaurants === restaurantList
  //         ? restaurants.map((restaurant) => {
  //             return (
  //               <ResturantCard
  //                 {...restaurant?.data?.data}
  //                 key={restaurant?.data?.data?.id}
  //               />
  //             );
  //           })
  //         : restaurants?.map((restaurant) => {
  //           console.log(restaurants.length);
  //             return (
  //              <Link className="linkstyle" to={"/restaurants/" + restaurant?.info?.id } key={restaurant?.info?.id}>
  //              <ResturantCard   {...restaurant?.info}  />
  //               </Link>
  //             );
  //           })}
  //     </div>
  //   </>
  // );
  // };
}
