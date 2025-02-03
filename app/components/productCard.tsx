'use client';

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
// import { IList } from "../shop/shop_list/page";
import { useCartContext } from "../providers/cart-provider";
import { useState } from "react";
import { iProduct } from "../types/productType";

export default function Card({ data }: { data: iProduct[] }) {
  const { addToCart, syncCart } = useCartContext();
  const [isAdding, setIsAdding] = useState(false);
  const product: iProduct = data[0];

  // Convert price and discountPercentage to numbers if necessary
  const price = typeof product.price === 'number'
    ? product.price
    : parseFloat(product.price);
  const discountPercentage = typeof product.discountPercentage === 'number'
    ? product.discountPercentage
    : parseFloat(product.discountPercentage);

  const discountedPrice = price * (1 - discountPercentage / 100);
  const isOutOfStock = product.stockLevel !== undefined && product.stockLevel <= 0;

  const handleAddToCart = async () => {
    setIsAdding(true);
    await addToCart(product);
    syncCart(); // Update UI state
    setIsAdding(false);

    console.log('Added to cart:', product);
  };




  return (
    <div className="w-full p-10 flex flex-col lg:flex-row shadow-md gap-5 justify-center">
      {/* Image Gallery */}
      <div className="lg:w-[50%] grid grid-col-3 lg:grid-cols-4 grid-rows-3 lg:grid-rows-3 gap-2">
        <div className="relative bg-slate-100 w-full row-span-2 lg:row-span-3 col-span-3 h-96">
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              className="object-contain"
              fill
              alt={product.name}
            />
          )}
        </div>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="relative bg-slate-100 w-full h-40">
            {product.imageUrl && (
              <Image
                src={product.imageUrl}
                className="object-contain"
                fill
                alt={product.name}
              />
            )}
          </div>
        ))}
      </div>

      {/* Product Details */}
      <div className="lg:w-[50%] my-auto">
        <h1 className="josefin-sans font-semibold text-[#0D134E] text-4xl">
          {product.name}
        </h1>
        
        {/* Rating */}
        <div className="flex my-5 items-center gap-3">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="fill-[#FFC416]" />
            ))}
          </div>
          <p className="josefin-sans font-medium text-[#0D134E]">(22)</p>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-3 my-5">
          <h3 className="text-[#0D134E] font-semibold">
            ${discountedPrice.toFixed(2)}
          </h3>
          <h3 className="line-through text-[#FB2E86] font-semibold">
            ${price.toFixed(2)}
          </h3>
        </div>

        {/* Description */}
        <p className="w-[80%] josefin-sans text-[#A9ACC6] font-medium">
          {product.description}
        </p>

        {/* Add to Cart */}
        <div className="my-5 flex items-center gap-3">
          <button
            type="button"
            className="josefin-sans font-medium bg-[#FB2E86] text-white p-3 disabled:opacity-50"
            onClick={handleAddToCart}
            disabled={isOutOfStock || isAdding}
          >
            {isAdding ? 'Adding...' : isOutOfStock ? 'Out of Stock' : 'Add To Cart'}
          </button>
          <FaRegHeart size={40} className="fill-[#151875] cursor-pointer" />
        </div>

        {/* Social Sharing */}
        <div className="flex gap-3 items-center mt-8">
          <h3 className="josefin-sans text-[#151875] font-semibold">Share:</h3>
          <Link href="#" aria-label="Facebook">
            <FaFacebook className="fill-[#151875] hover:fill-[#FB2E86] transition-colors" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <RiInstagramFill className="fill-[#FB2E86] hover:fill-[#151875] transition-colors" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <FaTwitter className="fill-[#151875] hover:fill-[#FB2E86] transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
