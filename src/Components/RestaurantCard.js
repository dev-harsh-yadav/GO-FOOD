import { IMG_URL_CDN } from "../../constant.js";

const ResturantCard = ({...details}) => {
    const {cloudinaryImageId,name,avgRating,cuisines}=details;
  return (
      <div className="card">
        <img
          alt="img"
          src={IMG_URL_CDN +cloudinaryImageId}
        />
        <h2>{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
      </div>
  );
};
export default ResturantCard;
