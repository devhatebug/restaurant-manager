"use client"
import React from "react";
import style from "./homePage.module.css";
import clsx from "clsx";
import Header from "@/components/header";
import SlideShow from "@/components/slideShow";
import Footer from "@/components/footer";

const HomePage = () => {
    return (
        <div className={clsx(style.homePage)}>
            <Header />
            <div className={clsx(style.slideShow)}>
                <SlideShow />
            </div>
            <div className={clsx(style.listMenuFood)}>
                <ul className={clsx(style.listItemFood)}>
                    <li><a href=""></a>Cơm mẹ nấu</li>
                    <li><a href="">Đồ chiên</a></li>
                    <li><a href=""></a>Đồ nướng</li>
                    <li><a href=""></a>Đồ hấp</li>
                    <li><a href=""></a>Đồ ăn nhanh</li>
                    <li><a href=""></a>Hoa quả</li>
                    <li><a href=""></a>Giải khát</li>
                    <li><a href=""></a>Khác</li>
                </ul>
            </div>
            <div className="categoryFood">
                <div className={clsx(style.newFood)}>
                <div className={clsx(style.titleItem)}>
                    <h4>&#10540; Mới nhất</h4>
                    <div className={clsx(style.underlineTilte)}></div>
                </div>
                <div className="container"></div>
                </div>
                <div className={clsx(style.hotFood)}>
                    <div className={clsx(style.titleItem)}>
                        <h4>&#10540; Nổi trội nhất</h4>
                        <div className={clsx(style.underlineTilte)}></div>
                    </div>
                    <div className="container"></div>
                </div>
                <div className={clsx(style.promotionFood)}>
                    <div className={clsx(style.titleItem)}>
                        <h4>&#10540; Khyến mãi</h4>
                        <div className={clsx(style.underlineTilte)}></div>
                    </div>
                    <div className="container"></div>
                </div>
            </div>
            <div className={clsx(style.footer)}>
                <Footer />
            </div>
        </div>
    )
};

module.exports = HomePage;
