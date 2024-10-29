import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  // console.log({ cart, addToCart, removeFromCart, clearCart, subTotal });
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex sticky top-0 bg-white z-10 flex-col md:flex-row md:justify-start justify-center items-center py-1 shadow-md">
      <div className="my-3 md:mx-5">
        <Link href={"/"}>
          <Image src="/navlogo.jpg" alt="" width={60} height={30} />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 font-bold md:text-md md:space-x-6 py-2 ">
          <Link href="/tshirts">
            <li>Tshirts</li>
          </Link>
          <Link href="/hoodies">
            <li>Hoodies</li>
          </Link>
          <Link href="/mugs">
            <li>Mugs</li>
          </Link>
          <Link href="/stickers">
            <li>Stickers</li>
          </Link>
        </ul>
      </div>
      <div
        className="cart absolute right-0 top-5 mx-6 cursor-pointer flex"
      >
       <Link href='/login'><MdAccountCircle className="text-xl md:text-4xl mx-3" /></Link> 
        <AiOutlineShoppingCart onClick={toggleCart} className="text-xl md:text-4xl" />
      </div>
      <div
        ref={ref}
        className={`sidecart w-64 h-[100vh] absolute top-2 right-0 bg-white p-5 transform transition-transform z-50 ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="font-bold text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-3 right-2 text-2xl cursor-pointer text-purple-600"
        >
          <IoIosCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold">Your cart is Empty!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex font-semibold my-5">
                  <div className="w-2/3 bg-purple-200">{cart[k].name}</div>
                  <div className="flex items-center justify-center w-1/3 text-lg">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer hover:text-purple-600 text-purple-400"
                    />
                    <span className="mx-1">{cart[k].qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer hover:text-purple-600 text-purple-400"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="font-bold my-2 px-2">Subtotal : PKR_{subTotal}</div>
        <div className="flex">
          <Link href={"/checkout"}>
            <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-600 rounded text-sm">
              <FaBasketShopping className="m-1" />
              Check Out
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-600 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
