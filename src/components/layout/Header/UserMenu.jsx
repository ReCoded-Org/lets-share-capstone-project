import * as React from "react";
import { Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { useTranslation } from "next-i18next";

const UserMenu = () => {
    const { t } = useTranslation("common");
    return (
        <Menu as='div' className='relative ml-2'>
            <div>
                <Menu.Button className='mr-4 flex flex-row-reverse items-center rounded-full text-sm md:mr-1 md:mb-0 md:flex-row  '>
                    <span className='sr-only'>Open user menu</span>
                    <Image
                        className='h-8 w-8 rounded-full '
                        src='/images/noUserPic.svg'
                        height={35}
                        width={35}
                        alt=''
                    />
                    <Image
                        className='arrow rotate-90 md:rotate-0'
                        height={35}
                        width={35}
                        src='/images/arrowIcon.svg'
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
                <Menu.Items className='absolute right-20 top-1 z-50 mt-1 flex w-28 flex-col rounded-md border border-fontColor/20 bg-[white] py-1 shadow-lg md:right-0 md:top-10'>
                    <Menu.Item>
                        <a
                            href='./login'
                            className='py-2   px-2 text-center text-sm text-fontColor hover:bg-btnBgHover'
                        >
                            {t("common.logIn")}
                        </a>
                    </Menu.Item>
                    <hr className='mx-2 border-fontColor/20' />
                    <Menu.Item>
                        <a
                            href='./signup'
                            className=' py-2  px-2 text-center  text-sm text-fontColor hover:bg-btnBgHover'
                        >
                            {t("common.signUp")}
                        </a>
                    </Menu.Item>
                    <hr className='mx-2 border-fontColor/20' />
                    <Menu.Item>
                        <a
                            href='#'
                            className='py-2   px-2 text-center  text-sm text-fontColor hover:bg-btnBgHover'
                        >
                            {t("common.Logout")}
                        </a>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
export default UserMenu;
