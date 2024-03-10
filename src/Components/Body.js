import { useState, useEffect } from "react";
import { restaurantList } from "../../constant";
import ResturantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { PROXY_API_KEY_CORS } from "../../constant";
function filterData(searchText, restaurantList) {
  return restaurantList.filter((restraunts) =>
    restraunts?.info?.name.toUpperCase().includes(searchText.toUpperCase())
  );
}

const Body = () => {
  const [apiRestaurant, setapiRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [restaurants, setrestaurant] = useState([]);
  const [cityText, setCityText] = useState("");
  const [lati, setlati] = useState(30.1231349);
  const [longi, setlongi] = useState(77.286329);

  async function getCityRestaurant() {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/geocoding?city=${cityText}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "8EiG/sDpt06GvDgV+c9JDQ==uGgfKNRC0pRJ20VL",
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result[0]);
      setlati(result[0].latitude);
      setlongi(result[0].longitude);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  useEffect(() => {
    async function getRestaurantdata() {
      const details = await fetch(
        `https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lati}&lng=${longi}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
        {
          headers: {
            "x-cors-api-key": "temp_9c74b3d71b51e3f750d1e5a2a89905ca",
          },
        }
      );

      const detail = await details.json();
      console.log(detail);
      const rest =
        detail?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      const finalrest =
        rest?.length > 0
          ? rest
          : detail?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
      setapiRestaurant(finalrest);
      setrestaurant(finalrest);
      console.log(lati, longi);
    }
    getRestaurantdata();
  }, [lati, longi]);

  return (
    <div className="bg-purple-100 h-full">
      <div className="flex justify-center my-2 bg-purple-400 py-4">
        <input
          className="font-4xl pl-4 mr-6 rounded-full"
          type="text"
          placeholder="enter the city"
          value={cityText}
          onChange={(e) => setCityText(e.target.value)}
        />
        <button
          className="rounded-2xl bg-blue-600 p-2 text-white text-bold mr-6"
          onClick={getCityRestaurant}
        >
          Find restaurant
        </button>
        <input
          className="font-4xl pl-4 mr-6 rounded-full"
          type="text"
          placeholder="SEARCH"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = filterData(e.target.value, apiRestaurant);
            setrestaurant(data);
          }}
        />
        <button className="rounded-2xl bg-blue-600 p-2 text-white text-bold">
          SEARCH
        </button>
      </div>
      <div className="flex flex-row flex-wrap justify-center m-4 p-3 h-full">
        {restaurants?.length == 0 ? (
          <Shimmer />
        ) : (
          <>
            <h1 className="text-3xl w-full h-full justify-center flex font-black">
              Top restaurant chains in Your favourite city
            </h1>
            {restaurants?.map((restaurant, index) => (
              <Link
                className="linkstyle h-full"
                to={"/restaurants/" + restaurant?.info?.id}
                key={index}
              >
                <ResturantCard
                  key={restaurant?.info?.id}
                  {...restaurant?.info}
                />
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
