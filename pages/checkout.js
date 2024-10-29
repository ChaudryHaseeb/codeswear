import Link from "next/link";
import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { FaBasketShopping } from "react-icons/fa6";

const Checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {
  return (
    <div className="container m-auto">
      <h1 className="font-bold text-center my-10 text-3xl">Checkout</h1>
      <h2 className="font-semibold text-xl px-10">1. Delivery Details</h2>
      <div className="mx-auto flex">
        <div className="px-10 w-1/3">
          <div className="flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-10 w-1/3">
          <div className="flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex">
        <div className="px-10 w-1/3">
          <div className="flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-10 w-1/3">
          <div className="flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              City
            </label>
            <input
              type="city"
              id="city"
              name="city"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className=" mx-auto flex">
        <div className="px-10 w-1/3">
          <div className="flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              State
            </label>
            <input
              type="state"
              id="state"
              name="state"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-10 w-1/3">
          <div className="flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Pincode
            </label>
            <input
              type="pincode"
              id="pincode"
              name="pincode"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-10 w-full">
        <div className="w-full">
          <label
            htmlFor="full-name"
            className="leading-7 text-sm text-gray-600"
          >
            Address
          </label>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="2"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="sidecart bg-white p-5 z-50">
        <h2 className="font-semibold text-xl px-4">2. Review Cart</h2>
        <ol className="list-decimal font-semibold px-10">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold">Your cart is Empty!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex font-semibold my-5">
                  <div className="">{cart[k].name}</div>
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
        <span className="font-bold px-6">Subtotal : PKR_{subTotal}</span>
      </div>
      <div className="mx-4">
        <Link href={"/order"}>
          <button className="flex text-white bg-purple-500 border-0 mx-10 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded text-sm">
            <FaBasketShopping className="m-1" />
            Pay PKR_{subTotal}
          </button>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Checkout;
