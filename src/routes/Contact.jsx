import React from 'react';
import Navbar from '../component/Nav';
import Footer from '../component/Footer';
import {IoCallOutline} from 'react-icons/io5';
import {AiOutlineMail} from 'react-icons/ai';
const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='pt-28'>

                <div className='contactBanner relative '>
                    <img src="https://photechindia.in/assets/img/page-title-area/contact.jpg" alt="photechIndia" style={{ height: "60vh", width: "100vw", objectFit: "cover" }} className='opacity-90 brightness-50 ' />
                    <p className='text-6xl font-bold text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Contact Us</p>
                </div>
                <div className=' mt-16 '>
                    <div className='grid grid-cols-3 gap-3  justify-items-center p-16 max-lg:grid-cols-1 max-lg:px-4  '>
                        <div className=''>
                            <p className='text-lg font-semibold text-gray-600 max-lg:text-center'>Get A Quote</p>
                            <p className='text-4xl font-bold'>Get In Touch Now</p>
                        </div>
                        <div className='flex flex-col max-lg:flex-row max-lg:gap-3 '>
                            <p className='text-lg font-semibold text-gray-600 flex items-center gap-4 max-lg:text-sm'><IoCallOutline className='text-yellow-400 text-2xl ' /><span className='max-lg:text-sm'>Call Us Now</span></p>
                            <p className='text-2xl font-bold hover:text-yellow-400 cursor-pointer max-lg:text-xl'>(+91) - 9512220404</p>
                        </div>
                        <div className='flex flex-col max-lg:flex-row max-lg:gap-3 '>
                            <p className='text-lg font-semibold text-gray-600 flex items-center gap-4 max-lg:text-sm'><AiOutlineMail className='text-yellow-400 text-2xl ' /><span className='max-lg:text-sm'>Mail Us Now</span></p>
                            <p className='text-2xl font-bold hover:text-yellow-400 cursor-pointer max-lg:text-xl'>info@photechindia.com</p>
                        </div>
                    </div>
                </div>
                <div className='mx-20 my-8 max-lg:my-2 max-lg:mx-5'>
                    <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-5 max-lg:gap-3'>
                        <div className='overflow-hidden rounded-xl'>
                            <img src="https://photechindia.in/assets/img/contact1.jpg" alt="PhotechIndia" />
                        </div>
                        <div className='mt-4'>
                            <form className='flex flex-col gap-10 max-lg:gap-5'>
                                <input type='text' className='px-3 w-full h-12 text-lg bg-gray-300 rounded-lg' placeholder='Your Name' />
                                <input type='email' className='px-3 w-full h-12 text-lg bg-gray-300 rounded-lg' placeholder='Your email' />
                                <textarea className='px-2 py-2  w-full h-44 bg-gray-300 rounded-lg' placeholder='Your Message'></textarea>
                                <button className='bg-yellow-400 w-32 h-12 text-lg font-semibold rounded-xl hover:bg-yellow-600 hover:text-white'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <footer>
                    < Footer />
                    <p className='text-xl text-center text-white footerText p-2'>© Photech IT Technology and Construction. All rights reserved. Designed & Developed By PhoTech Technology.</p>
                </footer>
            </div>
        </>
    )
}

export default Contact
