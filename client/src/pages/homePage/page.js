"use client";
import React from "react";
import clsx from "clsx";
import Navbar from "@/components/header";
import Carousel from "@/components/carousel";
import BoardProducts from "@/components/boardProduct";
import Footer from "@/components/footer";

const HomePage = () => {
  return (
    <div className="w-[100%] h-auto overflow-y-auto">
      <Navbar />
      <div className="b">
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
