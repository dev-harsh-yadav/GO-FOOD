import { IMG_URL_CDN } from "../../constant.js";
import { useParams } from "react-router-dom";

const ResturantCard = ({ ...details }) => {
  const { id } = useParams();
  // console.log(details);
  const { cloudinaryImageId, name, avgRating, cuisines, locality } = details;

  return (
    <div className="flex items-stretch h-full bg-white m-4 transition hover:ease-out">
      <div
        key={id}
        className="flex flex-col h-full p-3 max-w-xs card-container drop-shadow-lg bg-purple-200 overflow-auto"
      >
        <div className="flex-shrink-0 h-40">
          <img
            className="w-full h-full object-cover"
            alt="img"
            src={IMG_URL_CDN + cloudinaryImageId}
          />
        </div>
        <div className="flex-grow">
          <h2 className="font-bold text-2xl my-2">{name}</h2>
          <div className="text-lg">
            <h3 className="font-bold">{cuisines?.join(", ")}</h3>
            <h4>Rating: {avgRating} ✨ stars</h4>
            <h3 className="text-base">{locality}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResturantCard;
