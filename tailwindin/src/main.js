import React from 'react';
import './index.css';
import './index.js';
import { Outlet, Link } from "react-router-dom";



function Main() {
    function menu() {
        let btn = document.querySelector("#navv");
        let sidebar = document.querySelector(".sidebar");

        btn.onclick = function () {
            sidebar.classList.toggle("active");
        }
    }



    return (
        <>
            <div className="">
                <div className="sidebar hidden ">
                    <nav className=" absolute z-10 text-black bg-white  w-80 h-screen  right-0 top-20">
                        <div className=" grid col-1 space-y-10 text-2xl mx-16 my-10  mr-32">
                            <div className=''>
                                <input type="text" className='w-56 h-10 border-2 placeholder-style' placeholder='Search' />
                            </div>
                            <Link to="/">Home</Link>
                            <Link to="/About">About us</Link>
                            <Link to="/login">Project</Link>
                            <Link to="/">Services</Link>
                            <Link to="/bottom">Shop</Link>
                            <Link to="/contact">Contact</Link>


                        </div>

                    </nav>

                </div>




                <div className='w-80 h-16 mx-auto mt-4 bg-gray-800 flex  justify-between md:w-11/12 md:flex md:py-5   md:mx-auto'>
                    <h3 className='text-white text-2xl ml-2 my-auto'>Design</h3>
                    <button className=" md:hidden" id="navv" onClick={menu}>
                        <svg className="w-6 h-6 text-white my-auto mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                    <div className="md:flex space-x-6 text-white hidden">
                        <Link to="/">Home</Link>
                        <Link to="/About">About us</Link>
                        <Link to="/login">Project</Link>
                        <Link to="/">Services</Link>
                        <Link to="/bottom">Shop</Link>
                        <Link to="/contact">Contact</Link>

                    </div>

                    <div className='hidden md:block'>
                        <a href=""><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg></a>
                    </div>


                </div>



            </div>


            <Outlet />
        </>
    );
}

export default Main;