import FavoritesGallery from "../components/FavoritesGallery";

const Favorites = () => {
  return (
    <>
      <h1 className="text-center font-bold text-5xl my-3 text-green-600">
        Fotos Favoritas
      </h1>
      <section className="card-grid favorite">
        <FavoritesGallery />
      </section>
    </>
  );
};

export default Favorites;
