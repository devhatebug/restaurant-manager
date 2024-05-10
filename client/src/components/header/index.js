import React from "react";
import clsx from "clsx";
import style from "./header.module.css";

const Header = () => {
    return (
        <div className={clsx(style.header)}>
            <div className={clsx(style.logoHeader)}>DEV RESTAURANT</div>
            <div className={clsx(style.searchBox)}>
                <div className='max-w-md mx-auto'>
                    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                            <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Search something.." /> 
                        </div>
                    </div>
            </div>
            <div className={clsx(style.category)}>
                <ul className={clsx(style.listItem)}>
                    <li><a href=""></a>Item</li>
                    <li><a href=""></a>Item</li>
                    <li><a href=""></a>Item</li>
                    <li><a href=""></a>Item</li>
                    <li><a href=""></a>Item</li>
                </ul>
            </div>
            <div className={clsx(style.auth)}>
                <ul className={clsx(style.listAuth)}>
                    <li><a href="">Đăng nhập</a></li>
                    <li><a href="">Đăng ký</a></li>
                </ul>
            </div>
        </div>
    )
}

module.exports = Header;