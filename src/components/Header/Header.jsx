import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import UserMenu from "./UserMenu";
import LangMenu from "./LangMenu";
const navigation = [
    { name: "Home", href: "/home", current: false },
    { name: "About us", href: "/aboutus", current: false },
    { name: "Goods", href: "/goods", current: false },
    { name: "Blogs", href: "/blogs", current: false },
];
export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function Header() {
    return (
        <Disclosure as='nav' className='bg-transperent'>
            {({ open }) => (
                <>
                    <div className=' mx-auto mb-2 max-w-7xl px-2 sm:px-3 lg:px-4'>
                        <div className=' flex items-center justify-end'>
                            <div className='absolute flex items-center md:hidden'>
                                {/* Mobile menu button*/}
                                <Disclosure.Button className='text-gray-400 hover:text-slate-900 focus:ring-white inline-flex items-center justify-center rounded-md p-2  hover:bg-btnBgHover focus:outline-none focus:ring-2 focus:ring-inset'>
                                    <span className='sr-only'>
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                            stroke='#97dbbf'
                                        />
                                    ) : (
                                        <MenuIcon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                            stroke='#97dbbf'
                                        />
                                    )}
                                </Disclosure.Button>
                                <div className='hidden sm:ml-6 md:block'>
                                    <div className='flex space-x-4'>
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                            >
                                                <a
                                                    className={classNames(
                                                        item.current
                                                            ? " text-white text-fontColor"
                                                            : " hover:bg-[gray-700] hover:text-white",
                                                        "rounded-md px-3 py-2 font-medium"
                                                    )}
                                                    aria-current={
                                                        item.current
                                                            ? "page"
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <img
                                className='h-14 w-auto'
                                src='/images/dummyLogo.svg'
                                alt='Lets share logo'
                            />
                            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-end'>
                                <div className='flex flex-shrink-0 items-center'>
                                    <div className='hidden sm:ml-6 md:block'>
                                        <div className='flex space-x-4'>
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                >
                                                    <a
                                                        className='hover:text-white rounded-md px-3
                                                        py-2 text-sm font-medium text-fontColor hover:bg-btnBgHover'
                                                        aria-current={
                                                            item.current
                                                                ? "page"
                                                                : undefined
                                                        }
                                                    >
                                                        {item.name}
                                                    </a>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='hidden md:block'>
                                        <UserMenu />
                                    </div>
                                    <div className='hidden md:block'>
                                        <LangMenu />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className='md:hidden'>
                        <div className='space-y-1 px-2 pt-2 pb-3'>
                            <div className='flex justify-end'>
                                <UserMenu />
                            </div>
                            <div className='flex justify-end'>
                                <LangMenu />
                            </div>
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as='a'
                                    href={item.href}
                                    className='-z-20 block rounded-md px-3 py-2 text-end font-medium text-fontColor hover:bg-btnBgHover'
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
