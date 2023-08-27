export function filterData (searchText, restaurantList)  {
  return restaurantList.filter((restraunts) =>
    restraunts?.info?.name.toUpperCase().includes(searchText.toUpperCase())
  );
};
