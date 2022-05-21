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
                                <input type="text" className='w-56 h-10 border-2 placeholder-style rounded-md' placeholder='Search' />
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




                <div className='w-80 h-16 mx-auto mt-4 bg-gray-800  md:w-11/12    '>
                   <div className='flex justify-between sm:ml-10 sm:mr-10 py-4'>
                   <h3 className='text-white text-2xl ml-2 '>Design</h3>
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
                        <div className=''>
                                <input type="text" className='w-56 h-10 border-2 placeholder-style sm:w-36 md:w-56 rounded-md' placeholder='Search' />
                            </div>
                        
                    </div>

                   </div>

                </div>



            </div>


            <Outlet />
        </>
    );
}

export default Main;