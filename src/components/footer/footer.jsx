import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div
            id='footer'
            className=' flex w-full flex-col items-center justify-around bg-primary   p-5 text-2xl text-[white] md:flex-row '
        >
            <div className='cursor-pointer  '>
                <Link href='#'>
                    <Image
                        src='/images/Lets-share-logo.png'
                        alt='Lets-share-logo'
                        width={100}
                        height={100}
                    />
                </Link>
            </div>
            <div className='p-5'>
                <ul>
                    <li className='pb-2  hover:text-fontColor '>
                        <Link href='/aboutus'>
                            <a className=' '>About us</a>
                        </Link>
                    </li>
                    <li className='pb-2  hover:text-fontColor'>
                        <Link href='/blogs'>
                            <a>Blogs</a>
                        </Link>
                    </li>
                    <li className='pb-2  hover:text-fontColor'>
                        <Link href='#'>
                            <a>Listed items</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='  p-3   '>
                <ul className=''>
                    <p className='   p-3 hover:text-fontColor '>Contact us</p>
                    <div className='flex gap-3 text-3xl '>
                        <AiFillFacebook className='cursor-pointer  hover:text-fontColor' />
                        <FaInstagram className='cursor-pointer    hover:text-fontColor' />
                        <AiFillLinkedin className='cursor-pointer   hover:text-fontColor' />
                        <BsShareFill className='cursor-pointer   hover:text-fontColor' />
                    </div>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <p className=' pb-2'> Adress </p>
                    <p className=' pb-2'> Street 01,17 </p>
                    <p className=' pb-2'> City, Country</p>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
