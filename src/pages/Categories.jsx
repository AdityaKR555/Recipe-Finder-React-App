import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCategories(response.data.categories || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading)
    return (
      <div className="w-screen h-[85vh] flex justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <div className="p-6 bg-cyan-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-cyan-900">
        Recipe Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-5">
        {categories?.map((cat) => (
          <div
            key={cat.idCategory}
            className="bg-white shadow-md rounded-2xl overflow-hidden cursor-pointer hover:scale-102 duration-300 transotion-all border border-black pt-3 pb-5"
            onClick={() => navigate(`/category/${cat.strCategory}`)}
          >
            <img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              className="w-[90%] m-auto rounded-2xl border border-black"
            />
            <h2 className="text-xl font-bold text-cyan-950 py-3 px-6">
              {cat.strCategory}
            </h2>
            <p className="text-sm text-gray-700 mt-2 line-clamp-5 px-6">
              {cat.strCategoryDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
