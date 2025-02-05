"use client";

import { TbMail } from "react-icons/tb";
import { BiPhoneCall } from "react-icons/bi";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { RiUser3Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useCartContext } from "../providers/cart-provider";

export default function Navbar() {

  
  const {totalItems} = useCartContext();



  const [sideBar, setSideBar] = useState(true);

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <div className="w-full h-[44px] bg-[#7E33E0]">
        <div className="text-[0.5rem] md:text-sm lg:text-base upperNav flex items-center justify-between h-[100%] w-[90%] max-w-[1400px] mx-auto text-white font-medium">
          <div className=" flex gap-1 md:gap-10 items-center">
            <div className="flex items-center gap-1 sm:gap-3">
              <TbMail />
              <p>mhhasanul@gmail.com</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-3">
              <BiPhoneCall />
              <p>(12345)67890</p>
            </div>
          </div>
          <div className="flex items-center gap-1 lg:gap-8 md:gap-4">
            <div className="flex items-center sm:gap-1">
              <Link className="flex items-center sm:gap-1" href={"/"}>
                <p>English</p>
                <IoIosArrowDown className="" />
              </Link>
            </div>
            <div className="flex items-center sm:gap-1">
              <Link className="flex items-center sm:gap-1" href={"/"}>
                <p>USD</p>
                <IoIosArrowDown className="" />
              </Link>
            </div>
            <div className="flex items-center sm:gap-1">
              <Link className="flex items-center sm:gap-1" href={"/login"}>
                <p>Login</p>
                <RiUser3Line />
              </Link>
            </div>
            <div className="flex items-center sm:gap-1">
              <Link className="flex items-center sm:gap-1" href={"/"}>
                <p>Whitelist</p>
                <FaRegHeart />
              </Link>
            </div>
            <div className="flex items-center relative sm:gap-1">
              <Link className="flex items-center sm:gap-1 scale-50 md:scale-75" href={"/shopping_cart"}>
                <LuShoppingCart size={30}/> 
                {totalItems > 0 && (
                <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#FB2E86] absolute top-[-5px] right-[-5px]">
                  <p className="text-white text-sm">{totalItems}</p>
                </div>
              )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[80px] ">
        <div className="flex items-center gap-4 justify-between h-[100%] w-[90%] max-w-[1400px] mx-auto text-white font-medium">
          <div className="navHead text-black text-4xl">
            <h1>Hekto</h1>
          </div>
          <div className="hidden sm:visible sm:flex text-black items-center gap-3 md:gap-8 ">
            <div className="flex gap-1 hover:text-[#FB2E86]">
              <Link className="flex items-center" href={"/"}>
                Home
                <IoIosArrowDown className="mt-1" />
              </Link>
            </div>
            <div className="hover:text-[#FB2E86]">
              <Link href={"/about"}>About</Link>
            </div>
            <div className="hover:text-[#FB2E86]">
              <Link href={"/shop/shop_list"}>Products</Link>
            </div>
            <div className="hover:text-[#FB2E86]">
              <Link href={"/blog"}>Blog</Link>
            </div>
            <div className="hover:text-[#FB2E86]">
              <Link href={"/shop"}>Shop</Link>
            </div>
            <div className="hover:text-[#FB2E86]">
              <Link href={""}>Contact</Link>
            </div>
          </div>
          <div className="hidden sm:visible sm:flex  text-black">
            <div className="sm:border-t-2 sm:border-l-2 sm:border-b-2 sm:border-gray-300 ">
              <input
                className="w-full lg:max-w-[317px] h-[39px]"
                type="text"
                title="search"
                name="search"
                id=""
              />
            </div>
            <div className="bg-[#FB2E86] w-[30%] flex items-center justify-center">
              <FiSearch className="stroke-white scale-150" />
            </div>
          </div>

          <div className="sm:hidden">
            <button type="button" title="hamburger">
              <GiHamburgerMenu
                className="fill-black"
                onClick={toggleSideBar}
              />
            </button>
            <div
              className={
                sideBar
                  ? "hidden"
                  : "transition-all ease-in-out visible fixed flex w-[70%] h-full translate-x-4  top-0 right-[15px] z-10 bg-[#FB2E86]"
              }
            >
              <button type="button" title="close Menu">
                <MdClose
                  className="absolute right-10 top-5 fill-white scale-150"
                  onClick={toggleSideBar}
                />
              </button>
              <div className="flex flex-col gap-4 mt-16 ml-7 text-xl">
                <div className="flex gap-1">
                  <Link className="flex items-center" href={"/"}>
                    Home
                  </Link>
                </div>
                <div className="">
                  <Link href="/about">About</Link>
                </div>
                <div className="">
                  <Link href="/shop/shop_list">Products</Link>
                </div>
                <div className="">
                  <Link href="/blog">Blog</Link>
                </div>
                <div className="">
                  <Link href="/shop">Shop</Link>
                </div>
                <div className="">
                  <Link href="">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
