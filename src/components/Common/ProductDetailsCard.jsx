import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductDetailsCard = (props) => {
  const { setOpen, productData } = props;
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  //   const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-white">
      {productData && (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={24}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />

            <div className="block w-full 800px:flex">
              {/* left side */}
              <div className="w-full 800px:w-[50%]">
                <img
                  src={productData.image_Url[0].url}
                  alt={productData.image_Url[0].public_id}
                />
                <div className="flex items-center">
                  <img
                    src={productData.shop.shop_avatar.url}
                    alt={productData.shop.shop_avatar.public_id}
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div className="">
                    <h3 className={`${styles.shop_name}`}>
                      {productData.shop.name}
                    </h3>
                    <h5 className="pb-3 text-[15px]">
                      ({productData.shop.ratings}) Ratings
                    </h5>
                  </div>
                </div>
                <div
                  className={`${styles.button} bg-black mt-4 rounded-[4px] h-11`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>

                <h5 className="text-[15px] text-[red] mt-5">
                  ({productData.total_sell}) Sold out
                </h5>
              </div>

              {/* right side */}
              <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {productData.name}
                </h1>
                <p>{productData.description}</p>

                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {productData.discount_price}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {productData.price && productData.price + "$"}
                  </h3>
                </div>

                <div className="flex items-center mt-5 justify-between pr-3">
                  <div className="">
                    <button
                      onClick={decrementCount}
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    >
                      -
                    </button>

                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[10px]">
                      {count}
                    </span>

                    <button
                      onClick={incrementCount}
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    >
                      +
                    </button>
                  </div>

                  <div className="">
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title={
                          click ? "Remove from wishlist" : "Add to wishlist"
                        }
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title={
                          click ? "Remove from wishlist" : "Add to wishlist"
                        }
                      />
                    )}
                  </div>
                </div>

                <div
                  className={`${styles.button} bg-black mt-6 rounded-[4px] h-11 items-center`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsCard;
