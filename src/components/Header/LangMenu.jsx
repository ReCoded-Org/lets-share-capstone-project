import * as React from "react";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu, Transition } from "@headlessui/react";
const LangMenu = () => {
    return (
        <Menu as='div' className='relative  ml-3'>
            <div>
                <Menu.Button className=' mr-4 flex flex-row-reverse rounded-full text-sm md:mr-0 md:flex-row'>
                    <span className='sr-only'>Open user menu</span>
                    <img
                        className='h-8 w-8 rounded-full '
                        src={`/images/enFlag.svg`}
                        alt=''
                    />
                    <Image
                        className='arrow rotate-90 md:rotate-0 '
                        height='30px'
                        width='20px'
                        src='/images/arrowIcon.svg'
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
            >
                <Menu.Items className=' absolute right-16 top-1 mt-1 w-24 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:right-0 md:top-10'>
                    <Menu.Item>
                        <Link href='/' locale='en'>
                            <div className='hover:text-slat-600 my-1 flex cursor-pointer  justify-between px-2 text-sm hover:bg-slate-200'>
                                <Image
                                    className='m-5 rounded-full'
                                    height='1'
                                    width='20px'
                                    src='/images/enFlag.svg'
                                />
                                <a>English</a>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href='/' locale='ar'>
                            <div className='hover:text-slat-600 my-1 flex cursor-pointer  justify-between px-2 text-sm  hover:bg-slate-200'>
                                <Image
                                    className='m-5 rounded-full'
                                    height='1'
                                    width='20px'
                                    src='/images/arFlag.svg'
                                />
                                <a>عربي</a>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href='/' locale='tr'>
                            <div className='hover:text-slat-600 my-1 flex cursor-pointer  justify-between px-2 text-sm hover:bg-slate-200'>
                                <Image
                                    className='m-5 rounded-full'
                                    height='1'
                                    width='20px'
                                    src='/images/trFlag.svg'
                                />
                                <a>Türkçe</a>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href='/' locale='ja'>
                            <div className='hover:text-slat-600 my-1 flex cursor-pointer  justify-between px-2 text-sm hover:bg-slate-200'>
                                <Image
                                    className='m-5 rounded-full'
                                    height='1'
                                    width='20px'
                                    src='/images/jaFlag.svg'
                                />
                                <a>日本語</a>
                            </div>
                        </Link>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
export default LangMenu;
