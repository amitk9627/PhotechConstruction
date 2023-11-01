import React from 'react'
import Navbar from '../component/Nav'
import { IoIosConstruct } from 'react-icons/io'
import Footer from '../component/Footer'
const Home = () => {
    return (
        <>
            <Navbar />
            <div className=''>
                <div className='background flex justify-center items-center max-sm:h-96'>
                    <div className='text-white w-2/3 text-center max-lg:w-auto'>
                        <p className='text-6xl font-bold  max-lg:text-5xl max-md:text-3xl max-md:font-semibold'>
                            <span>We Provided You Satisfied </span>
                            <br />
                            Connecting IT Technology and Construction</p>
                    </div>

                </div>
                <div>
                    <div className='my-10 mx-32  flex justify-between max-lg:flex-col gap-10 max-lg:mx-12 max-md:mx-3  '>
                        <div className='relative max-lg:flex max-lg:gap-3 max-lg:py-6 max-lg:flex-col max-lg:items-center max-lg:justify-center border-8 border-yellow-400 p-4 w-1/2 max-lg:w-full rounded-br-3xl rounded-tl-3xl max-lg:p-0 first-img'>
                            <div className='relative max-lg:w-96 '>
                                <img
                                    src="https://photechindia.in/assets/img/about/about2.jpg"
                                    alt="protechIndia"
                                    className='rounded-br-3xl rounded-tl-3xl mx-auto  w-full max-sm:w-80 object-cover max-lg:h-96'
                                />
                            </div>
                            <div className='max-lg:relative max-lg:w-96 absolute z-0 lg:bottom-20 lg:-left-36 w-72 
                                bg-white max-lg:bg-transparent rounded-br-3xl rounded-tl-3xl p-4 max-lg:p-0'
                            >
                                <img
                                    src="https://photechindia.in/assets/img/about/about3.jpg"
                                    alt="protechIndia"
                                    className='rounded-tl-3xl rounded-br-3xl max-lg:h-96 object-cover  max-lg:w-80 mx-auto'
                                />
                            </div>
                            <div className='max-lg:relative max-lg:w-96 max-md:bottom-0 z-0
                            max-md:right-0 absolute lg:-bottom-20 lg:right-10 w-72
                             bg-white max-lg:bg-transparent border-0 rounded-br-3xl rounded-tl-3xl p-4 max-lg:p-0'
                            >
                                <img
                                    src="https://photechindia.in/assets/img/about/about4.jpg"
                                    alt="protechIndia"
                                    className='rounded-br-3xl rounded-tl-3xl max-lg:h-96 object-cover max-lg:w-80 mx-auto'
                                />
                            </div>
                        </div>
                        <div className='w-1/2 max-lg:w-full'>
                            <div className='text-xl text-gray-800 max-lg:px-2'>
                                <p className='text-center'> <span className='text-5xl font-bold border-yellow-400  border-b-8 text-yellow-400 '>About us</span></p>
                                <p className='mt-10'>
                                    PhoTech India Private Limited is an Engineering and Construction Company,
                                    specialized to provide services in the field of Construction,
                                    Operation & Maintenance of Refineries, Petrochemicals, Fertilizers,
                                    Steel & Metallurgical, Chemical, Oil & Gas, Power, Cement Plant,
                                    Automobile, Defense, Aerospace, Sugar & Distillery, Ports & Material
                                    Handling and other core industrial sectors. We also provide all kinds
                                    of industrial manpower services (High Skilled, Skilled, Semi-Skilled &
                                    Un-Skilled) to all the stated sectors.
                                </p>
                                <br />
                                <p>We have been in this field for the last 5 years executing various jobs involving</p>
                                <div className='flex flex-col gap-2 mt-4'>
                                    <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>fabrication & erection of reformers</span></p>
                                    <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>heaters</span></p>
                                    <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>vessels</span></p>
                                    <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>tanks</span></p>
                                    <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>erection of heavy static & rotary equipment</span></p>
                                    <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>piping & structures</span></p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div>
                    <div className='my-32 px-16'>
                        <div className='text-center'>
                            <span className='text-5xl font-bold border-yellow-400  border-b-2 text-yellow-400 '>Our Core Values</span>
                        </div>
                        <div className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-20'>
                            <div className='border-2 rounded-tl-3xl rounded-br-3xl p-4 hover overflow-hidden hover:text-white'>
                                <img src="https://photechindia.in/assets/img/icon/2.png" alt="photechIndia" className='h-24 ' />
                                <h1 className='text-3xl font-bold mt-2'>Integrity</h1>
                                <p className='text-gray-700 text-xl mt-3 text-justify textHover'>
                                    To conduct a business with the highest level of ethics towards our clients,
                                    employees, business partners, government and public in general.
                                </p>
                            </div>
                            <div className='border-2 rounded-tl-3xl rounded-br-3xl p-4 hover overflow-hidden hover:text-white'>
                                <img src="https://photechindia.in/assets/img/icon/4.png" alt="photechIndia" className='h-24' />
                                <h1 className='text-3xl font-bold mt-2'>Innovation</h1>
                                <p className='text-gray-700 text-xl mt-3 text-justify textHover'>
                                   The team delivers on time and within budget, proactively asking how to help the client and providing new ideas.
                                </p>
                            </div>
                            <div className='border-2 rounded-tl-3xl rounded-br-3xl p-4 hover overflow-hidden hover:text-white'>
                                <img src="https://photechindia.in/assets/img/icon/6.png" alt="photechIndia" className='h-24' />
                                <h1 className='text-3xl font-bold mt-2'>Quality</h1>
                                <p className='text-gray-700 text-xl mt-3 text-justify textHover'>
                                    To implement best in class practices in our business as a
                                    whole and our day-to-day working, so as to maintain the
                                    highest level of quality standards.
                                </p>
                            </div>
                            <div className='border-2 rounded-tl-3xl rounded-br-3xl p-4 hover overflow-hidden hover:text-white'>
                                <img src="https://photechindia.in/assets/img/icon/8.png" alt="photechIndia" className='h-24' />
                                <h1 className='text-3xl font-bold mt-2'>Health, Safety & Environment</h1>
                                <p className='text-gray-700 text-xl mt-3 text-justify textHover'>
                                    To respect the cardinal rules, safety laws of the land and internal safety guidelines
                                    with zero tolerance towards human injuries and to conduct our business to maintain
                                    a sustainable future for our generations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>
            <footer>
                < Footer />
                <p className='text-xl text-center text-white footerText p-2'>© Photech IT Technology and Construction. All rights reserved. Designed & Developed By PhoTech Technology.</p>
            </footer>
        </>
    )
}

export default Home
