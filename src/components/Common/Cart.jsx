import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { setOpenCart } = props;

  const cartData = [
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
              onClick={() => setOpenCart(false)}
            />
          </div>

          {/* Item length */}
          <div className={`${styles.normalFlex} p-4`}>
            <AiOutlineShoppingCart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>

          {/* cart items */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle data={i} key={index} />)}
          </div>
        </div>

        <div className="px-5 mb-3">
          {/* checkout button */}
          <Link to="/checkout">
            <div className="h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]">
              <h1 className="text-white text-[18px] font-[600]">
                Checkout Now ($1080)
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = (props) => {
  const { data } = props;
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div className="">
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.normalFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className={`bg-[#a7abb14f] rounded-full w-[25px] h-[25px] ${styles.normalFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiMinus size={16} color="#7d879c" />
          </div>
        </div>
        <img
          src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
          alt="iphone"
          className="w-[80px] h-[80px] ml-2"
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            ${data.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <RxCross1 className="cursor-pointer" size={15} />
      </div>
    </div>
  );
};
export default Cart;
