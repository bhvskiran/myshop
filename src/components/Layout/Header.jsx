import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import { backendUrl } from "../../server";
import Cart from "../Common/Cart";
import WishList from "../Common/WishList";

const Header = (props) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { activeHeading } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      {/* header top section */}
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          {/* logo */}
          <div className="">
            <Link to="/">
              <img
                src={require("../../assets/logo.png")}
                alt="logo"
                className="h-[40px]"
              />
            </Link>
          </div>

          {/* search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#32a852] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;
                    const product_name = d.replace(/\s+/g, "-");
                    console.log(i);
                    return (
                      <Link to={`/product/${product_name}`} key={index}>
                        <div className="w-full flex items-start py-3">
                          <img
                            src={i.image_Url[0].url}
                            alt={i.name}
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          {/* seller button */}
          <div className={`${styles.button}`}>
            <Link to="/seller">
              <h1 className="text-[#fff] flex items-center">
                Become Seller <IoIosArrowForward className="ml-1" />{" "}
              </h1>
            </Link>
          </div>
        </div>
      </div>

      {/* header second section which is in blue */}
      <div
        className={`
          ${active ? "shadow-sm fixed top-0 left-0 z-10" : null}
          transition hidden 800px:flex items-center justify-between w-full bg-[#32a852] h-[70px]
        `}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          {/* categories */}
          <div
            className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block"
            onClick={() => setDropDown(!dropDown)}
          >
            <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
            <button
              className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
            >
              All Categories
            </button>
            <IoIosArrowDown
              size={20}
              className="absolute right-2 top-4 cursor-pointer"
            />
            {dropDown && (
              <DropDown data={categoriesData} setDropDown={setDropDown} />
            )}
          </div>

          {/* nav items */}
          <div className={`${styles.normalFlex}`}>
            <NavBar active={activeHeading} />
          </div>

          {/* end icons */}
          <div className="flex">
            {/* wishlist */}
            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#8B4513] w-3.5 h-3.5 p-0 m-0 text-white font-mono text-[10px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            {/* cart icon */}
            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#8B4513] w-3.5 h-3.5 p-0 m-0 text-white font-mono text-[10px] leading-tight text-center">
                  10
                </span>
              </div>
            </div>

            {/* profile icon */}
            <div className={`${styles.normalFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${backendUrl}${user.avatar}`}
                      alt="profile-img"
                      className="h-[35px] w-[35px] rounded-full"
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>

            {/* wishlist side popup */}
            {openWishlist && <WishList setOpenWishlist={setOpenWishlist} />}

            {/* cart side popup */}
            {openCart && <Cart setOpenCart={setOpenCart} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
