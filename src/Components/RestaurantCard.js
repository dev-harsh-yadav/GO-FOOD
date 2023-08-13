import { IMG_URL_CDN } from "../../constant.js";
import { useParams } from "react-router-dom";

const ResturantCard = ({ ...details }) => {
  const{ id} =useParams();
  const { cloudinaryImageId, name, avgRating, cuisines,locality } = details;
  return (
    <div className="card">
      <img alt="img" src={IMG_URL_CDN + cloudinaryImageId} />
      <hr />
      <h2>{name}</h2>
      <hr />
      <div className="cardcontent ">
      <h3>{cuisines?.join(", ")}</h3>
      <h4> Rating :- {avgRating} stars</h4>
      <h3>{locality}</h3>
      </div>
    </div>
  );
};
export default ResturantCard;
