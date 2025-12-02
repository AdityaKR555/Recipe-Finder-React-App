import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const CategoryRecipe = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchMeals = async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    );
    setMeals(response.data.meals || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchMeals();
  }, [name]);

  if (loading)
    return (
      <div className="w-screen h-[85vh] flex justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <div className="p-6 bg-cyan-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-cyan-900">
        {name} Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-5">
        {meals?.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white shadow-md rounded-2xl overflow-hidden cursor-pointer hover:scale-102 duration-300 transotion-all border border-black pt-3 pb-5"
            onClick={() => navigate(`/recipe/${meal.idMeal}`)}
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-[90%] m-auto rounded-2xl border border-black"
            />
            <h2 className="text-xl font-bold text-cyan-950 py-3 px-6">
              {meal.strMeal}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryRecipe;
