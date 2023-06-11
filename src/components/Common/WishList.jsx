import React from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

const WishList = (props) => {
  const { setOpenWishlist } = props;

  const wishlistData = [
    {
      name: "Iphone 14 Pro Max 8/256 GB",
      desc: "test",
      price: 999,
    },
    {
      name: "Iphone 14 Pro Max 8/256 GB",
      desc: "test",
      price: 1999,
    },
    {
      name: "Iphone 14 Pro Max 8/256 GB",
      desc: "test",
      price: 599,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div className="">
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishlist(false)}
            />
          </div>

          {/* Item length */}
          <div className={`${styles.normalFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>

          {/* cart items */}
          <br />
          <div className="w-full border-t">
            {wishlistData &&
              wishlistData.map((i, index) => (
                <CartSingle data={i} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSingle = (props) => {
  const { data } = props;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer" size={15} />
        <img
          src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
          alt="iphone"
          className="w-[80px] h-[80px] ml-2"
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${data.price}
          </h4>
        </div>
        <BsCartPlus className="cursor-pointer" size={25} title="Add to cart" />
      </div>
    </div>
  );
};
export default WishList;
