import { useContext } from "react";
import { FavContext } from "../context/FavContext";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { favorites, removeFromFav } = useContext(FavContext);
  const navigate = useNavigate();

  return (
    <div className="bg-cyan-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-cyan-900">
        Your Favourite Recipes
      </h1>

      {favorites.length === 0 && (
        <p className="text-center mt-10 text-gray-600">
          You haven't added any favourites yet 😔
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {favorites?.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="bg-white shadow-md rounded-2xl overflow-hidden cursor-pointer hover:scale-102 duration-300 transotion-all border border-black pt-3 pb-5 relative"
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-[90%] m-auto rounded-2xl border border-black"
              onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
            />
            <h2 className="text-xl font-bold text-cyan-950 py-3 px-6">
              {recipe.strMeal}
            </h2>
            <button
              onClick={() => removeFromFav(recipe.idMeal)}
              className="absolute bottom-6 right-6 bg-red-600 text-white px-3 py-1.5 text-sm rounded-full"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
