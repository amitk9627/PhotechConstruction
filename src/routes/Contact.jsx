import React from 'react'
import Navbar from '../component/Nav'
import Footer from '../component/Footer'
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
                    <div className='grid grid-cols-3 gap-1  justify-items-center p-16 max-lg:grid-cols-1 text-center'>
                        <div className=''>
                            <p className='text-lg font-semibold text-gray-600'>Get A Quote</p>
                            <p className='text-4xl font-bold'>Get In Touch Now</p>
                        </div>
                        <div >
                            <p className='text-lg font-semibold text-gray-600'>Call Us Now</p>
                            <p className='text-2xl font-bold'>(+91) - 9512220404</p>
                        </div>
                        <div className=''>
                            <p className='text-lg font-semibold text-gray-600'>Mail Us Now</p>
                            <p className='text-2xl font-bold'>info@photechindia.com</p>
                        </div>
                    </div>
                </div>
                <div className='mx-20 my-8'>
                    <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-5'>
                        <div><img src="https://photechindia.in/assets/img/contact1.jpg" alt="PhotechIndia" /></div>
                        <div className='mt-4'>
                            <form className='flex flex-col gap-10'>
                                <input type='text' className='pl-6 w-full h-12 bg-gray-300 ' placeholder='Your Name' />
                                <input type='email' className='pl-6 w-full h-12 bg-gray-300' placeholder='Your email' />
                                <textarea className='pl-6 w-full h-44 bg-gray-300 ' placeholder='Your Message'></textarea>
                                <button className='bg-yellow-400 w-32 h-12 rounded-3xl'>Submit</button>
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
