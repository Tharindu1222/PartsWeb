import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaLinkedinIn, FaLocationArrow } from 'react-icons/fa6';

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
];

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    <div className='py-8 px-4'>
                        <a href='#' className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                            TD Store
                        </a>
                        <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                            We Always try to provide the best product for you.
                        </p>
                        <p className='text-gray-500 mt-4'>
                            Made by Tharindu Dilshan For You
                        </p>
                        <a href="https://portfolio-web-tharindu.vercel.app" target='_blank' rel="noopener noreferrer" className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>
                            Visit my Portfolio
                        </a>
                    </div>
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className="font-bold text-xl sm:text-left mb-3">Important Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-100'>
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='py-8 px-4'>
                            <h1 className="font-bold text-xl sm:text-left mb-3">Quick Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-100'>
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                            <h1 className="font-bold text-xl sm:text-left mb-3">Address</h1>
                            <div>
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>
                                        Beliatta, Sri Lanka
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <FaMobileAlt />
                                    <p>+94 704608282</p>
                                </div>

                                <div className='flex items-center gap-6 mt-8'>
                                    <a href="#">
                                        <FaFacebook className='text-3xl hover:text-primary duration-300' />
                                    </a>
                                    <a href="#">
                                        <FaLinkedinIn className='text-3xl hover:text-primary duration-300' />
                                    </a>
                                    <a href="#">
                                        <FaGithub className='text-3xl hover:text-primary duration-300' />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
