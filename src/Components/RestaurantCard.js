import { IMG_URL_CDN } from "../../constant.js";
import { useParams } from "react-router-dom";

const ResturantCard = ({ ...details }) => {
  const { id } = useParams();
  const { cloudinaryImageId, name, avgRating, cuisines, locality } = details;
  return (
    <div className="items bg-white m-4  transition hover:ease-out">
      <div key ={id} className="grid gap-3 grid-cols-1 p-1 m-3 max-w-xs min-h-max drop-shadow-lg  bg-purple-200">
        <img
          className="w-5/6 mx-auto my-2 "
          alt="img"
          src={IMG_URL_CDN + cloudinaryImageId}
        />
        <h2 className="font-bold flex flex-wrap text-3xl">{name}</h2>
        <div className=" text-xl">
          <h3 className="flex flex-wrap font-bold">{cuisines?.join(", ")}</h3>
          <h4> Rating :- {avgRating} ✨ stars</h4>
          <h3 className="text-lg">{locality}</h3>
        </div>
      </div>
    </div>
  );
};
export default ResturantCard;
