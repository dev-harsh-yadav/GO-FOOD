import { IMG_URL_CDN } from "../../constant.js";

const ResturantCard = ({ ...details }) => {
  const { cloudinaryImageId, name, avgRating, cuisines,locality } = details;
  return (
    <div className="card">
      <img alt="img" src={IMG_URL_CDN + cloudinaryImageId} />
      <h2>{name}</h2>
      <div className="cardcontent ">
      <h3>{cuisines?.join(", ")}</h3>
      <h4> Rating :- {avgRating} stars</h4>
      <h3>{locality}</h3>
      </div>
    </div>
  );
};
export default ResturantCard;
