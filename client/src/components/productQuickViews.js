"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { blobtoBase64 } from "@/utils/toBase64";
import formatPrice from "@/utils/formatPrice";
import actionAddToCart from "@/utils/addToCart";
import LoadingPopup from "@/components/loadingPopup";
import SuccessPopup from "@/components/successPopup";
import LoginPopup from "@/components/loginPopup";
import FormOrder from "@/components/formOrder";
import AlertLogin from "@/components/alertLogin";
import getAuth from "@/utils/getAuthor";
const ProductQuickViews = ({ proSelected, onClose }) => {
  const data = proSelected[0];
  const router = useRouter();
  const { cart, loadActAdd, success, log, addToCart, setLog } = actionAddToCart();
  const { isLogIn, userId, setUserId } = getAuth();
  const handleAddToCart = async (e) => {
    const idAdd = e.target.value;
    await addToCart(idAdd);
    onClose();
  };
  return (
    <>
      {loadActAdd && <LoadingPopup />}
      {success && <SuccessPopup />}
      {log && <LoginPopup setLog={setLog} router={router} />}
      <div className="flex w-full rounded-xl transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
        <div className="relative w-full flex items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img
                src={data && data.imgItem && blobtoBase64(data.imgItem)}
                alt="Two each of gray, white, and black shirts arranged on table."
                className="object-cover object-center"
              />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                {data && data.nameItem ? data.nameItem : ""}
              </h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  Product information
                </h3>
                <p className="text-sm text-gray-900 line-through">
                  {data && data.price && formatPrice(data.price)} VND
                </p>
                <p className="text-xl text-gray-900 font-semibold">
                  {data &&
                    data.price &&
                    formatPrice(
                      data.price - (data.price * data.endow) / 100
                    )}{" "}
                  VND
                </p>
                <div className="mt-6">
                  <h4 className="sr-only">Reviews</h4>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-200"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="sr-only">3.9 out of 5 stars</p>
                    <a
                      href="#"
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      117 reviews
                    </a>
                  </div>
                </div>
              </section>

              <section
                aria-labelledby="options-heading"
                className="mt-10 flex items-center flex-wrap ml-[-10px]"
              >
                <button
                  onClick={handleAddToCart}
                  className="flex items-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow focus:outline-none font-medium rounded-lg text-sm px-5 py-[12px] text-center mx-[10px] my-[10px]"
                >
                  Thêm vào giỏ hàng
                </button>
                {!isLogIn ? <AlertLogin /> : <FormOrder idPro={data?.id} />}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductQuickViews;
