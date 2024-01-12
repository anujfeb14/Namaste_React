import React, { useContext } from "react";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    //Optional chaining
    setListOfRestraunts(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const { loggedInUser, setUserName } = useContext(UserContext);
  const isOnline = useOnlineStatus();

  if (isOnline === false) {
    return (
      <h1>Looks like you're offline! Please check your internet connection.</h1>
    );
  }

  const RestaurantCardWithOpenStatus = withOpenLabel(RestaurantCard);

  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-0.5 bg-green-300 ml-4 border border-solid rounded-md"
            onClick={() => {
              const filteredList = listOfRestraunts.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            data-testid="topRatedRestraunt"
            className="px-4 py-0.5 bg-gray-300 rounded-md"
            onClick={() => {
              const filteredList = listOfRestraunts.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restautants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>Username: </label>
          <input
            className="border border-black px-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <>
            {restaurant.info.isOpen ? (
              <RestaurantCardWithOpenStatus
                key={restaurant.info.id}
                resData={restaurant}
              />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Body;
