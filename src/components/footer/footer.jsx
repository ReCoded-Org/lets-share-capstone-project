import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className='flex justify-center bg-primary p-5 font-primary text-xl text-[white]'>
            <div className=' grid w-[90%] grid-cols-1 justify-items-center md:grid-cols-4 md:justify-items-stretch '>
                <div className='cursor-pointer'>
                    <Link href='/'>
                        <Image
                            src='/images/lets share logo white.svg'
                            alt='Lets-share-logo'
                            width={240}
                            height={120}
                        />
                    </Link>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-between md:flex-row'>
                    <div className='p-5'>
                        <ul className='flex flex-col items-center md:items-start'>
                            <li className='pb-2 opacity-80 hover:opacity-100'>
                                <Link href='/aboutus'>
                                    <a className=' '>About us</a>
                                </Link>
                            </li>
                            <li className='pb-2 opacity-80 hover:opacity-100'>
                                <Link href='/blogs'>
                                    <a>Blogs</a>
                                </Link>
                            </li>
                            <li className='pb-2 opacity-80 hover:opacity-100'>
                                <Link href='/goods'>
                                    <a>Goods</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='  p-3   '>
                        <ul className='flex flex-col items-center gap-2'>
                            <p className=''>Contact us</p>
                            <div className='flex gap-3 text-3xl '>
                                <AiFillFacebook className='cursor-pointer opacity-80 hover:opacity-100' />
                                <FaInstagram className='cursor-pointer opacity-80 hover:opacity-100' />
                                <AiFillLinkedin className='cursor-pointer opacity-80 hover:opacity-100' />
                                <BsShareFill className='cursor-pointer opacity-80 hover:opacity-100' />
                            </div>
                        </ul>
                    </div>
                    <div className='p-5'>
                        <ul className='flex flex-col items-center opacity-80 md:items-start'>
                            <p className=' pb-2'> Adress </p>
                            <p className=' pb-2'> Street 01,17 </p>
                            <p className=' pb-2'> City, Country</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
