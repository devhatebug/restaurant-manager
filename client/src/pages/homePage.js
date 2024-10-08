"use client";
import React from "react";
import Navbar from "@/components/header";
import Carousel from "@/components/carousel";
import BoardProducts from "@/components/boardProduct";
import Footer from "@/components/footer";
import {CartProvider} from "@/context/cartContext";

const HomePage = () => {
  return (
    <div className="w-[100%] h-auto">
        <Navbar />
        <div className="">
          <Carousel />
        </div>
        <div>
          <BoardProducts />
        </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  );
};

module.exports = HomePage;
