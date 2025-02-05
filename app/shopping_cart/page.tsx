"use client";

import Link from "next/link";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useCartContext } from "../providers/cart-provider";

const ShoppingCart = () => {
  const { cartItems, clearCart, syncCart, removeFromCart } = useCartContext();

  const handleClearCart = () => {
    clearCart(); // Clears the cart in local storage and returns a new cart
    syncCart(); // Updates the context state with the new cart
  };


  const handleRemoveItem = (itemId: string) => {
    // console.log("Removing Item ID:", itemId); // Debug log
    removeFromCart(itemId);
    syncCart(); // Ensure UI updates correctly
  };
  

  return (
    <>
      {/* Header / Banner */}
      <div className="w-full">
        <div className="w-full bg-[#F6F5FF]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="h-[286px] flex flex-col justify-center">
              <h1 className="josefin-sans text-4xl font-extrabold text-[#101750]">
                Shopping Cart
              </h1>
              <div className="flex gap-1 font-medium">
                <div>
                  <Link href={"/"}>Home</Link>
                </div>
                <div className="text-[#FB2E86]">
                  <p>. Shopping Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="w-full my-40">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row text-center gap-9">
            <div className="w-full lg:col-span-7">
              <div className="grid grid-cols-5 josefin-sans font-bold text-[#1D3178] text-2xl ">
                <div className="col-span-2 text-left">Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
              </div>

              <div className="my-8">
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="grid grid-cols-5 border-b-2 items-center py-5"
                    >
                      {/* Product Info */}
                      <div className="col-span-2 text-left flex gap-5 items-center">
                        <div className="relative">
                          <Image
                            src={item.imageUrl || "/placeholder.png"}
                            width={110}
                            height={110}
                            alt={item.name}
                            className="object-contain"
                          />
                          <div className="absolute top-0 right-0">
                            <button
                              type="button"
                              title="Remove from Cart"
                              onClick={() => handleRemoveItem(item._id)}
                            >
                              <IoCloseCircle size={20} />
                            </button>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-xl">{item.name}</h3>
                          {/* Optional: If your product has color, size, etc. */}
                          <p className="text-[#A1A8C1]">
                            Color: {item.color || "N/A"}
                          </p>
                          <p className="text-[#A1A8C1]">
                            Size: {item.size || "N/A"}
                          </p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-[#15245E] font-medium">
                        ${Number(item.price).toFixed(2)}
                      </div>

                      {/* Quantity */}
                      <div className="flex text-[#BEBFC2] text-lg items-center justify-center">
                        <button
                          type="button"
                          title="Subtract quantity"
                          className="w-5 h-6 flex justify-center items-center bg-[#E7E7EF]"
                          // onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          <FaMinus size={10} />
                        </button>
                        <div className="w-10 h-6 flex justify-center items-center bg-[#F0EFF2]">
                          {item.quantity || 1}
                        </div>
                        <button
                          type="button"
                          title="Add quantity"
                          className="w-5 h-6 flex justify-center items-center bg-[#E7E7EF]"
                          // onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          <FaPlus size={10} />
                        </button>
                      </div>

                      {/* Total */}
                      <div className="text-[#15245E] font-medium">
                        $
                        {(Number(item.price) * (item.quantity || 1)).toFixed(2)}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Cart Controls */}
              <div className="flex justify-between py-5 josefin-sans">
                <button
                  type="button"
                  className="text-white font-medium py-3 px-8 bg-[#FB2E86]"
                >
                  Update Cart
                </button>
                <button
                  type="button"
                  className="text-white font-medium py-3 px-8 bg-[#FB2E86]"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Cart Tools & Shipping Calculator */}
            <div className="w-full lg:w-[40%] flex flex-col gap-10">
              {/* Cart Tools */}
              <div className="w-full flex flex-col">
                <div className="text-center josefin-sans font-bold text-2xl text-[#1D3178] py-5">
                  <h1>Cart Tools</h1>
                </div>
                <div className="w-full h-full bg-[#F4F4FC] p-5">
                  <div className="flex justify-between border-b-2 py-4 text-lg text-[#1D3178]">
                    <h3 className="font-semibold">Subtotals:</h3>
                    <h3 className="font-medium">
                      $
                      {cartItems
                        .reduce((total, item) => {
                          const price = Number(item.price);
                          const quantity = item.quantity || 1;
                          return total + price * quantity;
                        }, 0)
                        .toFixed(2)}
                    </h3>
                  </div>
                  <div className="flex justify-between border-b-2 py-4 text-lg text-[#1D3178]">
                    <h3 className="font-semibold">Totals:</h3>
                    <h3 className="font-medium">$325.00</h3>
                    {/* You can update this to calculate any extra fees or shipping */}
                  </div>
                  <div className="flex gap-3 py-5 items-center">
                    <input
                      type="checkbox"
                      title="checkbox"
                      className="w-4 h-4 border border-[#19D16F] rounded-sm bg-gray-50 focus:ring-3 focus:ring-[#19D16F]"
                      required
                    />
                    <label className="text-sm text-[#8A91AB]">
                      Shipping & taxes calculated at checkout
                    </label>
                  </div>
                  <button
                    type="button"
                    className="w-full p-4 text-white text-lg font-medium bg-[#19D16F]"
                  >
                    Proceed to checkout
                  </button>
                </div>
              </div>

              {/* Shipping Calculator */}
              <div className="w-full flex flex-col">
                <div className="text-center josefin-sans font-bold text-2xl text-[#1D3178] py-5">
                  <h1>Calculate Shipping</h1>
                </div>
                <div className="w-full h-full bg-[#F4F4FC] p-5">
                  <div className="py-4">
                    <input
                      className="w-full p-3 border-b-2 bg-[#F4F4FC] focus:outline-none"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div className="py-4">
                    <input
                      className="w-full p-3 border-b-2 bg-[#F4F4FC] focus:outline-none"
                      type="text"
                      placeholder="Country"
                    />
                  </div>
                  <div className="py-4">
                    <input
                      className="w-full p-3 border-b-2 bg-[#F4F4FC] focus:outline-none"
                      type="text"
                      placeholder="Postal Code"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full p-4 mt-5 text-white text-lg font-medium bg-[#FB2E86]"
                  >
                    Calculate Shipping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
