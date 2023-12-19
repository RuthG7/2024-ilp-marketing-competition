import React from 'react';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className="relative container mx-auto mt-8">
            <div className="flex items-center justify-between">
                <div className="">
                    <img src={logo} alt="" />
                </div>
            </div>
            <hr className=" relative mt-3 border-t-1 border-pink-600 opacity-50" />
        </div>
    );
};

export default Header;