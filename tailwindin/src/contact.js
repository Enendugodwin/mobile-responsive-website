import React from 'react';
import Bottom from "./bottom";

function Contact() {
    return (
        <div >
            <div className=' w-80 mx-auto mt-5 rounded-md shadow-md'>
                <div>
                    <h3 className='block text-gray-700 text-xl font-bold mb-2 ml-4'>Contact Us</h3>
                    <form action="#" className='w-72 mx-auto '>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Fullname">
                            Fullname
                        </label>
                        <input className=" mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Fullname"/>
                    
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                            Email
                        </label>
                        <input className=" mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
                    
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Subject">
                            Subject
                        </label>
                        <input className=" mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Subject"/>
                        <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor="" >
                            Message
                            </label>
                        <textarea className=' w-full h-32 resize-x border-gray-400 shadow appearance-none border rounded py-2 px-3 mb-5' name="" id="message" cols="30" rows="10" placeholder='Message'></textarea>
                    
                    </form>

                </div>
            </div>
            <Bottom />
        </div>
    );
}

export default Contact;