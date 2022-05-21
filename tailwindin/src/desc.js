import React from "react";
import './index.css';
import Bottom from "./bottom";




function Desc() {
    return (
        <div>
            <div className=" sm:flex md:mt-20">
                <div className="w-80 h-52 my-3 mx-auto room sm:w-1/2 sm:h-96  ">
                    {/* <img src="https://source.unsplash.com/random" alt="yes" className="w-80 h-52" /> */}

                </div>
                <div className="w-80 h-52 my-3 mx-auto sm:my-20 sm:ml-0 ">
                    <span className="font-bold text-2xl ">Interior</span>
                    <p className="text-xl  ">The stylish Interior makes us know
                        to spend more time on it. we
                        present intresting sets to create
                        in a Interior,we choose the
                        right colors according to your
                        and our own taste.</p>

                    <a href="#" className=" my-4 ">Read more</a>

                    <div className="w-48 h-20  my-10 mr-5 float-right rounded-lg flex bg-gray-600 bg-opacity-10 text-black">
                        <div className="plant w-20 h-20 rounded-lg ">
                            {/* <img src="https://source.unsplash.com/random" alt="yes" className="w-20 h-20" /> */}
                        </div>
                        <div className="w-1/2 text-sm pl-3">
                            <p className="font-semibold pb-1">Next post</p>
                            <article className="font-thin text-xs ">
                                Flowers is a beautiful great
                                compettions
                            </article>
                        </div>
                    </div>
                </div>


            </div>

        
        </div>
    );
}
export default Desc;