import { useContext } from "react";
import { globalState } from "../context/GlobalStates";
import IconHeart from "./IconHeart";
const Gallery = () => {
  const { data, toggleLike } = useContext(globalState);

  return (
    <>
      <section className="card-grid max-sm:grid grid-cols-1">
        {data.map((datum) => {
          return (
            <div
              className="relative h-64 rounded-lg overflow-hidden"
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

              {/* Heart icon in the Upper Right-hand Corner */}

              <div className="absolute top-4 right-4">
                <button onClick={() => toggleLike(datum?.id)}>
                  <IconHeart liked={datum?.liked} />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Gallery;
