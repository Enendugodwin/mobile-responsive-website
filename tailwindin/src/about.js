import React from "react";
import './index.css';
import './index.js';
import Main from './main'
import './App.css';
import './index.css';
import Bottom from "./bottom";

function About() {
    return (
        <div className="mt-5  mx-auto ">
            <h1 className="block text-gray-700 text-2xl font-bold pl-3 mb-4 ml-5 sm:ml-14 ">
                About us
            </h1>
            <div className="sm:flex sm:flex-wrap justify-around sm:mt-10">

                <div className=" mx-auto w-80 shadow appearance-none border mb-5 overflow-hidden rounded-xl hover:scale-105 transistion-all duration-300 ease-in-out ">
                    <div className="greek w-80 h-52 mx-auto"></div>
                    <h2 className="block text-gray-700 text-xl font-bold pl-3">Room</h2>
                    <p className="block text-gray-700 text-sm  mb-2 pl-3">Tailwind is a frontend framework like Bootstrap to design websites quickly. There are many frontend frameworks available in the market</p>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>

                </div>
                <div className=" mx-auto w-80 shadow appearance-none border mb-5 overflow-hidden rounded-xl hover:scale-105 transistion-all duration-300 ease-in-out">
                    <div className="greek2 w-80 h-52 mx-auto"></div>
                    <h2 className="block text-gray-700 text-xl font-bold pl-3">Room</h2>
                    <p className="block text-gray-700 text-sm  mb-2 pl-3">Tailwind is a frontend framework like Bootstrap to design websites quickly. There are many frontend frameworks available in the market</p>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>

                </div>
                <div className=" mx-auto w-80 shadow appearance-none border mb-5 overflow-hidden rounded-xl hover:scale-105 transistion-all duration-300 ease-in-out">
                    <div className="plant w-80 h-52 mx-auto"></div>
                    <h2 className="block text-gray-700 text-xl font-bold pl-3">Room</h2>
                    <p className="block text-gray-700 text-sm  mb-2 pl-3">Tailwind is a frontend framework like Bootstrap to design websites quickly. There are many frontend frameworks available in the market</p>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
                <div className=" mx-auto w-80 shadow appearance-none border mb-5 overflow-hidden rounded-xl hover:scale-105 transistion-all duration-300 ease-in-out">
                    <div className="greek3 w-80 h-52 mx-auto"></div>
                    <h2 className="block text-gray-700 text-xl font-bold pl-3">Room</h2>
                    <p className="block text-gray-700 text-sm  mb-2 pl-3">Tailwind is a frontend framework like Bootstrap to design websites quickly. There are many frontend frameworks available in the market</p>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>

                </div>
            </div>
            <Bottom />
        </div>
    );

}



export default About;