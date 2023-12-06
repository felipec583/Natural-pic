import { createContext, useState, useEffect } from "react";
import fetchData from "../data/fetchData";
export const globalState = createContext();
const GlobalStates = ({ children }) => {
  const [data, setData] = useState([]);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  /**
   * Toggle the "liked" property of an object based on its ID and update the state.
   *
   * @param {number} id - The ID of the object to toggle the "liked" property.
   * @returns {void}
   */
  function toggleLike(id) {
    const getObject = data.find((datum) => datum.id === id);
    const copy = [...data];
    getObject.liked = !getObject.liked;
    setData(copy);
    setFavoritePhotos(copy);
  }

  async function getData() {
    try {
      const photos = await fetchData();
      setData(photos);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <globalState.Provider
      value={{
        data,
        setData,
        favoritePhotos,
        setFavoritePhotos,
        toggleLike,
      }}
    >
      {children}
    </globalState.Provider>
  );
};

export default GlobalStates;
