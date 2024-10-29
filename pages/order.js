import React from 'react'

const Order = ({subTotal}) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-12 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">CodesWear.com</h2>
          <h1 className="text-green-700 text-3xl title-font font-medium mb-4">Your order is placed succesfully!</h1>
          <div className="flex mb-4">
            <a className="flex-grow border-purple-500 py-2 text-lg px-1">Description</a>
            {/* <a className="flex-grow border-gray-300 py-2 text-lg px-1">Qantity</a> */}
            <a className="flex-grow border-gray-300 py-2 text-lg px-1">Price</a>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Codes wear </span>
            <span className="mx-32 text-gray-900">PKR_499.00</span>
            </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Codes wear </span>
            <span className="mx-32 text-gray-900">PKR_499.00</span>
            </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Codes wear </span>
            <span className="mx-32 text-gray-900">PKR_499.00</span>
            </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">Subtotal : {subTotal}</span>
          </div>
          <button className="flex mx-20 my-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track ID</button>
        </div>
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
      </div>
    </div>
  </section>
  )
}

export default Order
