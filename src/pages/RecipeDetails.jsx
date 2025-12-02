import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useContext } from "react";
import { FavContext } from "../context/FavContext";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  let navigate = useNavigate();

  const { addToFav, removeFromFav, isFav } = useContext(FavContext);

  const fetchRecipe = async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    setRecipe(response.data.meals[0]);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  if (!recipe) {
    return (
      <div className="w-screen h-[85vh] flex justify-center items-center">
        {" "}
        <Loader />{" "}
      </div>
    );
  }

  return (
    <div className="bg-cyan-50 w-screen min-h-screen flex justify-center items-center px-5 flex-col gap-10 p-10">
      <div className="bg-white w-[98%] md:w-[90%] min-h-[90%] rounded-3xl shadow-md border border-black p-10">
        <div className="flex flex-wrap md:gap-10 gap-3">
          <img
            src={recipe.strMealThumb}
            className="rounded-3xl shadow-md w-100 border border-black"
          />
          <div>
            <h1 className="text-5xl font-bold mt-6 text-cyan-950">
              {recipe.strMeal}
            </h1>
            <p className="text-gray-600 mt-2 text-2xl">
              Category: {recipe.strCategory}
            </p>

            <div className="mt-3">
              <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
              <ul className="list-disc ml-6 mt-2">
                {Array.from({ length: 20 }).map((_, index) => {
                  const ingredient = recipe[`strIngredient${index + 1}`];
                  const measure = recipe[`strMeasure${index + 1}`];

                  return (
                    ingredient && (
                      <li key={index}>
                        {ingredient} ~ {measure}
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
        <p className="mt-2 leading-relaxed">{recipe.strInstructions}</p>

       <div className="text-center mt-3">         
        <button
        onClick={() =>
          isFav(recipe.idMeal) ? removeFromFav(recipe.idMeal) : addToFav(recipe)
        }
        className={`px-4 py-2 rounded-full mt-4 text-white ${
          isFav(recipe.idMeal) ? "bg-red-500" : "bg-green-600"
        }`}
      >
        {isFav(recipe.idMeal) ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      </div>
      </div>

      <button
        onClick={() => {
          navigate(-1);
        }}
        className="text-white bg-cyan-950 p-4 rounded-full font-semibold hover:text-yellow-500"
      >
        Go Back
      </button>
    </div>
  );
};

export default RecipeDetails;
