import * as React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
const UserMenu = () => {
    return (
        <Menu as='div' className='relative ml-3'>
            <div>
                <Menu.Button className='mr-4 mb-2 flex rounded-full text-sm md:mr-1 md:mb-0  '>
                    <span className='sr-only'>Open user menu</span>
                    <img
                        className='h-8 w-8  rounded-full'
                        src='/images/noUserPic.svg'
                        alt=''
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
                <Menu.Items className='bg-white absolute right-14 top-1 z-50 mt-1 flex w-24 flex-col rounded-md py-1 shadow md:right-0 md:top-10'>
                    <Menu.Item>
                        <a
                            href='#'
                            className='my-1   px-2 text-center text-sm text-fontColor hover:bg-btnBgHover'
                        >
                            Login
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href='#'
                            className=' my-1  px-2 text-center  text-sm text-fontColor hover:bg-btnBgHover'
                        >
                            Sign up
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href='#'
                            className='my-1   px-2 text-center  text-sm text-fontColor hover:bg-btnBgHover'
                        >
                            Logout
                        </a>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
export default UserMenu;
