import { useContext } from "react";
import { globalState } from "../context/GlobalStates";

const FavoritesGallery = () => {
  const { favoritePhotos } = useContext(globalState);
   const likedCards = favoritePhotos.filter((photos) => photos.liked);

  return (
    <>
    
      {likedCards.map((datum) => {
        return (
          <div
            className="relative w-64 h-64 rounded-lg overflow-hidden"
            id="card"
            key={datum?.id}
          >
            {/* Background Image */}
            <img
              className="w-full h-full object-fill"
              src={datum?.imgPath}
              alt="Card Background Image"
            />

            {/* Text at the Bottom */}
            <div className="absolute bottom-0 w-full bg-gray-800 bg-opacity-50 text-white p-4">
              <p className="text-lg font-bold">{datum?.alt} </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FavoritesGallery;
