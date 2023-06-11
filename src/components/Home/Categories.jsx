import React from "react";
import styles from "../../styles/styles";
import { brandingData, categoriesData } from "../../static/data";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div className="branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md">
          {brandingData &&
            brandingData.map((brand, index) => (
              <div className="flex items-center" key={index}>
                {brand.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">
                    {brand.title}
                  </h3>
                  <p className="text-xs md:text-sm">{brand.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData &&
            categoriesData.map((category, index) => {
              const handleSubmit = (category) => {
                navigate(`/products?category=${category.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
                  key={index}
                  onClick={() => handleSubmit(category)}
                >
                  <h5 className="text-[18px] leading-[1.3]">
                    {category.title}
                  </h5>
                  <img
                    src={category.image_Url}
                    alt={category.title}
                    className="w-[120px] object-cover"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
