import { useState, useEffect } from "react";
import { restaurantList } from "../../constant";
import ResturantCard from "./RestaurantCard";

function filterData(searchText, restaurantList) {
  return restaurantList.filter((restraunts) =>
    restraunts?.data?.data?.name
      .toUpperCase()
      .includes(searchText.toUpperCase())
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
    console.log(detail)
    console.log(
      detail?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setapiRestaurant(
      detail?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    {
      apiRestaurant?.map((restaurant) => {
        <ResturantCard {...restaurant?.info} key={restaurant?.info?.id} />;
      });
    }
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
              console.log(searchText);
              data = filterData(searchText, restaurants);
              setrestaurant(data);
            }
          }}
        />
        <button className="search-btn">SEARCH</button>
      </div>
      <div className="content">
        {restaurants.map((restaurant) => {
          return (
            <ResturantCard
              {...restaurant?.data?.data}
              key={restaurant?.data?.data?.id}
            />
          );
        })}
      </div>
    </>
  );
};
export default Body;
