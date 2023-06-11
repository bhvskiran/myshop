import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import ProductDetailsCard from "./ProductDetailsCard";

const ProductCard = (props) => {
  const { productData } = props;
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = productData.name;
  const product_name = d.replace(/\s+/g, "-");
  return (
    <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
      <div className="flex justify-end"></div>
      <Link to={`/product/${product_name}`}>
        <img
          src={productData.image_Url[0].url}
          className="w-full h-[170px] object-contain"
          alt={productData.image_Url[0].public_id}
        />
      </Link>
      <Link to="/">
        <h5 className={`${styles.shop_name}`}>{productData.shop.name}</h5>
      </Link>
      <Link to={`/product/${product_name}`}>
        <h4 className="pb-3 font-[500]">
          {productData.name.length > 40
            ? productData.name.slice(0, 40).trim() + "..."
            : productData.name}
        </h4>
        <div className="flex">
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#F6BA00"
            size={20}
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#F6BA00"
            size={20}
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#F6BA00"
            size={20}
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#F6BA00"
            size={20}
          />
          <AiOutlineStar
            className="mr-2 cursor-pointer"
            color="#F6BA00"
            size={20}
          />
        </div>
        <div className="py-2 flex items-center justify-between">
          <div className="flex">
            <h5 className={`${styles.productDiscountPrice}`}>
              {productData.price === 0
                ? productData.price
                : productData.discount_price}
              $
            </h5>
            <h4 className={`${styles.price}`}>
              {productData.price ? productData.price + "$" : null}
            </h4>
          </div>

          <span className="font-[500] text-[17px] text-[#68d284]">
            {productData.total_sell} sold
          </span>
        </div>
      </Link>

      {/* side options */}
      <div className="">
        {click ? (
          <AiFillHeart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title={click ? "Remove from wishlist" : "Add to wishlist"}
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className="cursor-pointer absolute right-2 top-4"
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title={click ? "Remove from wishlist" : "Add to wishlist"}
          />
        )}

        <AiOutlineEye
          size={22}
          className="cursor-pointer absolute right-2 top-12"
          onClick={() => setOpen(!open)}
          color="#333"
          title="Quick view"
        />

        <AiOutlineShoppingCart
          size={22}
          className="cursor-pointer absolute right-2 top-20"
          onClick={() => setOpen(!open)}
          color="#444"
          title="Add to cart"
        />

        {open && (
          <ProductDetailsCard setOpen={setOpen} productData={productData} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
