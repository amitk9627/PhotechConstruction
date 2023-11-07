import React from 'react';
import Navbar from '../component/Nav';
import about from '../assests/about.jpg';
import c1 from '../assests/certificate_1.jpg';
import c2 from '../assests/certificate_2.jpg';
import c3 from '../assests/certificate_3.jpg';
import ABHOME from '../assests/About-home.jpg'
import { IoIosConstruct } from 'react-icons/io';
const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className='-mt-28'> { /* */}
        <div className='relative '>
          <img src={about} alt="photechIndia" style={{ height: "70vh", width: "100vw", objectFit: "cover" }} className='opacity-90  brightness-50 ' />
          <p className='text-6xl font-bold text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:text-5xl'>About</p>
        </div>
        <div className='mt-20 mx-20 flex flex-col gap-12 max-lg:mx-4 max-lg:mt-16 '>
          <div className='flex gap-10 w-full max-lg:flex-col'>
            <div className="aboutBG w-1/2 relative max-lg:w-full max-lg:h-96">
              <img src={ABHOME} alt="photechIndia" className='w-4/5 max-lg:w-64 h-72 object-cover max-lg:object-fill max-lg:h-auto pt-4 pr-4 absolute bottom-0 left-0 bg-white' />
              <p className='absolute right-0 bottom-0 w-28 bg-white text-center py-2 max-lg:h-36 max-lg:py-4 '><span className='text-7xl font-bold'>25</span>
                <br />
                <span className='text-sm'>Years of Success</span> </p>
            </div>
            <div className='w-1/2 max-lg:w-full'>
              <p className='text-center '> <span className='text-5xl font-bold border-yellow-400  border-b-2 text-yellow-400 '>About us</span></p>
              <p className='mt-6'>
                PhoTech India Private Limited is an Engineering and Construction Company, specialized
                to provide services in the field of Construction, Operation & Maintenance of Refineries,
                Petrochemicals, Fertilizers, Steel & Metallurgical, Chemical, Oil & Gas, Power, Cement Plant,
                Automobile, Defense, Aerospace, Sugar & Distillery, Ports & Material Handling and other core
                industrial sectors. We also provide all kinds of industrial manpower services (High Skilled,
                Skilled, Semi-Skilled & Un-Skilled) to all the stated sectors.
              </p>
              <br />
              <p>
                We have been in this field for the last 5 years executing various jobs involving fabrication &
                erection of reformers, heaters, vessels, tanks, erection of heavy static & rotary equipment,
                piping & structures, etc. for Indian customers & Clients under stringent supervision of renowned
                consultants & inspection agencies like EIL, PDIL, Toyo, Technip, Jacobs, TUV etc. We also have
                executed many critical plant shutdown & revamp jobs for refineries, petrochemicals, steel plants,
                fertilizer plants, cryogenic plants and oil & gas industries ahead of tight delivery targets getting
                high appreciations.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-7 '>
            <p>
              We maintain a wonderful reputation for our QHSE (Quality, Health, Safety & Environment), timely delivery
              and efficient management which are critical factors attributable to our success in the construction industry.
            </p>
            <p>
              Our backbone is a team of highly professional and experienced Managers, Engineers, and Technical and Non-Technical
              staff backed up with very strong resources comprising a large fleet of Cranes, Power Generators, Welding Machines,
              Electric Winches, Lifting Tackles and all other tools and tackles required for the Construction Industry.
            </p>
            <p>
              We have been involved in various jobs at different Engineering workshops like; the fabrication of pressure vessel columns,
              towers, modules, skids, special equipment, piping, heat exchangers etc.
            </p>
            <p className='font-semibold'>
            The team delivers on time and within budget, proactively asking how to help the client and providing new ideas.
            </p>
          </div>
          <div className=' flex flex-col gap-3 '>
            <h1 className='text-2xl font-bold '>General Information :</h1>
            <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>Company Name : PhoTech India Private Limited</span></p>
            <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>CIN No. : U29306GJ2020PTC116731</span></p>
            <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>PAN : AALCP4457G</span></p>
            <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>TAN : BRDP05581C</span></p>
            <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>Date of Incorporation : 22ND SEP 2020</span></p>
            <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>GSTIN : 24AALCP4457G1Z9</span></p>
            <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>fabrication & erection of reformers</span></p>
            <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>Provident Fund Code : SRBRH2195144000</span></p>
            <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>ESIC Code : 38000508860000999</span></p>
            <p className='flex items-center gap-3'><IoIosConstruct className='text-2xl text-yellow-400' /><span>Udyam Reg. No. : UDYAM-GJ-06-0001909</span></p>
          </div>
          <div className='flex gap-10 max-lg:flex-col max-lg:gap-4'>
            <div className='border-yellow-400 p-3 border-8 rounded-br-3xl rounded-tl-3xl'>
              <img src={c1} alt="" className='rounded-br-3xl rounded-tl-3xl' />
            </div >
            <div className='border-yellow-400 p-3 border-8 rounded-br-3xl rounded-tl-3xl'>
              <img src={c2} alt="" className='rounded-br-3xl rounded-tl-3xl' />
            </div>
            <div className='border-yellow-400 p-3 border-8 rounded-br-3xl rounded-tl-3xl'>
              <img src={c3} alt="" className='rounded-br-3xl rounded-tl-3xl' />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About
