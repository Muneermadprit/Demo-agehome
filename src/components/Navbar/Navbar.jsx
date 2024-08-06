import React, { useState } from 'react';
import { GiToggles } from 'react-icons/gi';
import Logo from '../../assets/logo.jpg';
import { IoIosSearch } from 'react-icons/io';
import navimg1 from '../../assets/navimage1.jpg';
import navimg2 from '../../assets/navimage2.jpg';
import navimg3 from '../../assets/navimage3.jpg';
import { IoIosArrowForward } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menu = [
        { id: 1, name: 'Home', link: '#' },
        { id: 2, name: 'About', link: '#' },
        { id: 3, name: 'Other Services', link: '#' },
        { id: 4, name: 'Contact Us', link: '#' },
        { id: 5, name: 'Careers', link: '#' }
    ];

    return (
        <div className='shadow-md bg-gray-50 w-full'>
            {/* Upper section */}
            <div className='bg-white flex justify-between items-center p-4'>
                <div className='flex items-center gap-4'>
                    <a href='#' className='font-bold text-2xl sm:text-3xl flex items-center gap-2'>
                        <img src={Logo} alt='logo' className='sm:w-[200px] w-20' />
                    </a>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='relative group hidden sm:block'>
                        <input
                            type='text'
                            placeholder='Search'
                            className='w-[200px] sm:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary bg-gray-300'
                        />
                        <IoIosSearch className='text-gray-500 absolute top-1/2 right-3 transform -translate-y-1/2' />
                    </div>
                    <BsTelephone className='hidden sm:block text-2xl' />
                    <div className='hidden sm:block text-sm font-bold'>
                        <p className='hover:bg-red-500 cursor-pointer p-2 rounded'>
                            We're here for you<br />
                            <span className='text-2xl'>0330 175 8756</span><br />
                            National Office
                        </p>
                    </div>
                    {/* Toggle button for mobile menu */}
                    <GiToggles
                        className='sm:hidden w-[30px] h-[30px] cursor-pointer'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className='sm:hidden bg-white border-t border-gray-300'>
                    {menu.map(item => (
                        <a
                            key={item.id}
                            href={item.link}
                            className='block p-4 border-b hover:bg-gray-100'
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}

            {/* Second part */}
            <div className='hidden sm:flex w-full h-14 bg-[#006F97] justify-center items-center'>
                <div className='relative group'>
                    <button className='border-r-2 border-r-blue-500 px-4 py-2 text-white font-sans'>
                        Care Services
                    </button>
                    <div className='absolute top-full left-0 w-[1200px] bg-[#08394B] shadow-lg border-t border-blue-500 hidden group-hover:block'>
                        <div className='p-8 grid sm:grid-cols-4 gap-4'>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-center mt-2 font-bold text-2xl text-white'>Our Care Services</h1>
                                <p className='text-center mt-2 text-white'>We provide practical support to help people live their normal life</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src={navimg1} alt='Care Service 1' className='w-40 h-40 object-cover rounded-xl shadow-bulge' />
                                <p className='text-center mt-2 text-white'>Visiting Care</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src={navimg2} alt='Care Service 2' className='w-40 h-40 object-cover rounded-xl shadow-bulge' />
                                <p className='text-center mt-2 text-white'>Live-in Care</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src={navimg3} alt='Care Service 3' className='w-40 h-40 object-cover rounded-xl shadow-bulge' />
                                <p className='text-center mt-2 text-white'>Day Care</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <button className='border-r-2 border-r-blue-500 px-4 py-2 text-white font-sans hover:bg-[#08394B]'>
                        About Us
                    </button>
                    <div className='absolute top-full left-0 w-[250px] h-[200px] bg-[#08394B] shadow-lg border-t border-blue-500 hidden group-hover:block'>
                        <ul className='p-4'>
                            <li><a href='#' className='block p-2 hover:bg-gray-100'>
                                <div className='w-full h-12 border-b-2 border-gray-400 pt-4 flex justify-between items-center'>
                                    <span className='text-white hover:text-black'>Our Team Members</span>
                                    <IoIosArrowForward className='text-white' />
                                </div></a></li>
                            <li><a href='#' className='block p-2 hover:bg-gray-100'>
                                <div className='w-full h-12 border-b-2 border-gray-400 pt-4 flex justify-between items-center'>
                                    <span className='text-white hover:text-black'>Accreditation</span>
                                    <IoIosArrowForward className='text-white' />
                                </div></a></li>
                            <li><a href='#' className='block p-2 hover:bg-gray-100'>
                                <div className='w-full h-12 border-b-2 border-gray-400 pt-4 flex justify-between items-center'>
                                    <span className='text-white hover:text-black'>Be There Movement</span>
                                    <IoIosArrowForward className='text-white' />
                                </div></a></li>
                        </ul>
                    </div>
                </div>
                <div className='relative group'>
                    <button className='border-r-2 border-r-blue-500 px-4 py-2 text-white font-sans hover:bg-[#08394B]'>
                        Advice and Services
                    </button>
                    <div className='absolute top-full left-0 w-[300px] h-[250px] bg-[#08394B] shadow-lg border-t border-blue-500 hidden group-hover:block'>
                        <ul className='p-4'>
                            <li><a href='#' className='block p-2 hover:bg-gray-100'>
                                <div className='w-full h-12 border-b-2 border-gray-400 pt-4 flex justify-between items-center'>
                                    <span className='text-white hover:text-black'>News</span>
                                    <IoIosArrowForward className='text-white' />
                                </div></a></li>
                            <li><a href='#' className='block p-2 hover:bg-gray-100'>
                                <div className='w-full h-12 border-b-2 border-gray-400 pt-4 flex justify-between items-center'>
                                    <span className='text-white hover:text-black'>Guides</span>
                                    <IoIosArrowForward className='text-white' />
                                </div></a></li>
                            <li><a href='#' className='block p-2 hover:bg-gray-100'>
                                <div className='w-full h-12 border-b-2 border-gray-400 pt-4 flex justify-between items-center'>
                                    <span className='text-white hover:text-black'>FAQ</span>
                                    <IoIosArrowForward className='text-white' />
                                </div></a></li>
                        </ul>
                    </div>
                </div>
                <div className='relative group'>
                    <button className='border-r-2 border-r-blue-500 px-4 py-2 text-white font-sans hover:bg-[#08394B]'>
                        Success Stories
                    </button>
                </div>
                <div className='relative group'>
                    <button className='border-r-2 border-r-blue-500 px-4 py-2 text-white font-sans hover:bg-[#08394B]'>
                        Join Our Services
                    </button>
                </div>
                <div className='relative group'>
                    <button className='px-4 py-2 text-white font-sans hover:bg-[#08394B]'>
                        Find Care
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
