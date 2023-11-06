import React from 'react'
import { IoIosConstruct } from 'react-icons/io'
import Cont from '../assests/Home4.jpg'
import Cooperate from '../assests/coperate.jpg'
import Home3 from '../assests/Home3.jpg'
import Type from '../component/Type'
const Home = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className=''>
                <div className='background relative max-sm:h-96 h-screen '>
                    <div className='text-white w-2/3 bottom-28 max-lg:w-auto absolute left-10 '>
                        <div>
                            <p className="text-5xl text-white">
                                <span>Digital Engineering through</span><Type />
                            </p>
                        </div>
                        <p className='text-2xl  max-lg:text-5xl max-md:text-3xl max-md:font-semibold mt-10'>
                        Your digital product success starts here; we are your partner in product<br /> development, 
                        product design, and application modernization by offering end-to-end solutions, and 
                        seamless user experience.
                        </p>
                        <p className=' mt-4'><span className='text-xl bg-blue-600 p-3'><button>Contact us</button></span></p>
                    </div>

                </div>
                <div>
                    <div className='my-16 mx-32  flex justify-between max-lg:flex-col gap-10 max-lg:mx-12 max-md:mx-3  '>
                        <div className='relative max-lg:flex max-lg:gap-3 max-lg:py-6 max-lg:flex-col max-lg:items-center max-lg:justify-center border-8 border-yellow-400 p-4 w-1/2 max-lg:w-full rounded-br-3xl rounded-tl-3xl max-lg:p-0 first-img'>
                            <div className='relative max-lg:w-96 overflow-hidden '>
                                <img
                                    src={Cont}
                                    alt="protechIndia"
                                    className='rounded-br-3xl rounded-tl-3xl mx-auto  w-full max-sm:w-80 object-cover max-lg:h-96'
                                />
                            </div>
                            <div className='max-lg:relative max-lg:w-96 absolute z-0 lg:bottom-20 lg:-left-28 w-72 
                                bg-white max-lg:bg-transparent rounded-br-3xl rounded-tl-3xl p-2 max-lg:p-0'
                            >
                                <img
                                    src={Cooperate}
                                    alt="protechIndia"
                                    className='rounded-tl-3xl rounded-br-3xl max-lg:h-96 object-cover  max-lg:w-80 mx-auto'
                                />
                            </div>
                            <div className='max-lg:relative max-lg:w-96 max-md:bottom-0 z-0
                            max-md:right-0 absolute lg:-bottom-20 lg:right-10 w-72
                             bg-white max-lg:bg-transparent border-0 rounded-br-3xl rounded-tl-3xl p-2 max-lg:p-0'
                            >
                                <img
                                    src={Home3}
                                    alt="protechIndia"
                                    className='rounded-br-3xl rounded-tl-3xl max-lg:h-96 object-cover max-lg:w-80 mx-auto'
                                />
                            </div>
                        </div>
                        <div className='w-1/2 max-lg:w-full'>
                            <div className='text-xl text-gray-800 max-lg:px-2'>
                                <p className='text-center'> <span className='text-5xl font-bold border-yellow-400  border-b-8 text-yellow-400 '>About us</span></p>
                                <p className='mt-16'>
                                    PhoTech India Private Limited
                                    We believe in what people make possible
                                    Our mission is to empower every person and
                                    every organization on the planet to achieve more.
                                </p>
                                <p className='mt-5'>
                                    See how we give our technology and resources to empower
                                    each person on the planet to achieve more.
                                </p>
                                <p className='mt-5'>
                                The technology you use impresses no one. 
                                The experience you create with it is everything.
                                </p>
                                <br />
                                <p>We have been in this field for the last 5 years executing various jobs involving</p>
                                <div className='flex flex-col gap-4 max-lg:gap-2 mt-4'>
                                    <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>Web Design & Development</span></p>
                                    <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>Responsive Design</span></p>
                                    <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>Web Application</span></p>
                                    <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>Software Development</span></p>
                                    <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>Graphic Design</span></p>
                                    <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>Mobile Application</span></p>
                                    <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>Figma & Wireframe Designing</span></p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div>
                    <div className='my-32 px-16 max-lg:my-12 max-lg:px-8 max-md:px-4'>
                        <div className='text-center'>
                            <span className='text-5xl font-bold border-yellow-400  border-b-2 text-yellow-400 max-lg:text-3xl'>Our Core Values</span>
                        </div>
                        <div className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-20 max-lg:mt-12 max-lg:gap-3'>
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
           
        </>
    )
}

export default Home
