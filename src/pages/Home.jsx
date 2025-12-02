import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Home = () => {
  const [item, setItem] = useState("");
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  
// useEffect(() => {
//   const recipeData = localStorage.getItem("recipeData");

//   if (recipeData) {
//     try {
//       setRecipes(JSON.parse(recipeData));
//     } catch (e) {
//       console.error("Invalid JSON in localStorage:", e);
//     }
//   }
// }, []);


// useEffect(() => {
//   if (recipes) {
//     localStorage.setItem("recipeData", JSON.stringify(recipes));
//   }
// }, [recipes]);


useEffect(() => {
  const recipeData = sessionStorage.getItem("recipeData");

  if (recipeData) {
    try {
      setRecipes(JSON.parse(recipeData));
    } catch (e) {
      console.error("Invalid JSON in sessionStorage:", e);
    }
  }
}, []);


useEffect(() => {
  if (recipes) {
    sessionStorage.setItem("recipeData", JSON.stringify(recipes));
  }
}, [recipes]);


  const searchItem = async (e) => {
    e.preventDefault();

    if (item.trim() === "") return;

    setLoading(true);

    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`
    );

    setLoading(false);

    setRecipes(response.data.meals || []);

    setItem("");
  };

  return (
    <div className="bg-cyan-50 pb-10 min-h-screen">
      {/* .........input.......... */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-10 text-cyan-950">
          Welcome to RecipeFinder
        </h1>
        <p className="text-center mt-4 text-md md:text-lg text-black font-medium">
          Discover delicious recipes from around the world!
        </p>
        <div className="flex justify-center mt-7 items-center">
          <form onSubmit={searchItem}>
            <input
              type="text"
              className="border-2 border-gray-500 focus:outline-none focus:border-cyan-900 w-85 px-3 py-1.5 text-xl text-cyan-950 rounded-full "
              placeholder="Search for Recipes..."
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <button
              type="submit"
              className="bg-cyan-950 px-3.5 text-md py-3 ml-3.5 rounded-full hover:bg-black"
            >
              🔍
            </button>
          </form>
        </div>
      </div>

      {/* .........output......... */}

      <div>{loading && <Loader />}</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-5">
        {recipes === null && (
          <div className="flex flex-col justify-center items-center w-[96vw]">
            <p className="text-center text-gray-500 w-[95vw]">
              Search recipes to begin...
            </p>
            <img
              // src="../../public/Kitchen appliances-rafiki.svg"
              src="/Kitchen appliances-rafiki.svg"
              alt="kitchen-svg"
              className="w-[35%]"
            />
          </div>
        )}
        {recipes?.length === 0 && (
          <div className="flex flex-col justify-center items-center w-[96vw]">
            <p className="text-center text-gray-500 w-[95vw]">
              Try again with Correct Spelling...
            </p>
            <img
              src="../../public/Kitchen appliances-rafiki.svg"
              alt="kitchen-svg"
              className="w-[35%]"
            />
          </div>
        )}

        {recipes?.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="bg-white shadow-md rounded-2xl overflow-hidden cursor-pointer hover:scale-102 duration-300 transotion-all border border-black pt-3"
            onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-[90%] m-auto rounded-2xl border border-black"
            />
            <h2 className="text-xl font-bold text-cyan-950 py-3 px-6">
              {recipe.strMeal}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;