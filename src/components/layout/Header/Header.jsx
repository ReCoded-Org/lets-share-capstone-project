import { useState, useEffect } from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import UserMenu from "./UserMenu";
import LangMenu from "./LangMenu";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function Header() {
    const { t } = useTranslation("common");
    const navigation = [
        { name: `${t("common.Home")}`, href: "/", current: false },
        { name: `${t("common.aboutUs")}`, href: "/aboutus", current: false },
        { name: `${t("common.goods")}`, href: "/goods", current: false },
        { name: `${t("common.blogs")}`, href: "/blogs", current: false },
    ];
    const [animateHeader, setAnimateHeader] = useState(false);

    useEffect(() => {
        const listener = () =>
            window.scrollY > 140
                ? setAnimateHeader(true)
                : setAnimateHeader(false);
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    return (
        <div className='relative flex justify-center font-primary'>
            <div className=' absolute -z-10 h-96 w-full'>
                {/*<Image 
            src='/Vector.png'
            layout="responsive"
            width={1200}
            height={900}
            className=" absolute  -z-1"
            alt="vector"
            /> */}
            </div>

            <Disclosure
                as='nav'
                className='bg-transperent mx-3 w-full md:mx-6 lg:mx-14'
            >
                {({ open }) => (
                    <>
                        <div
                            className={`max-w-auto  opacity-1 top-0 z-30 mb-2 transition duration-1000   ease-in-out ${
                                animateHeader && "bg-[#ddd] opacity-0"
                            }`}
                        >
                            <div className=' flex items-center justify-end'>
                                <div className='absolute flex  items-center md:hidden'>
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className=' hover:text-slate-900 focus:ring-white inline-flex items-center justify-center rounded-md p-2  hover:bg-btnBgHover focus:outline-none focus:ring-2 focus:ring-inset'>
                                        <span className='sr-only'>
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XIcon
                                                className='w-10y block h-10'
                                                aria-hidden='true'
                                                stroke='#33956D'
                                            />
                                        ) : (
                                            <MenuIcon
                                                className='block h-10 w-10'
                                                aria-hidden='true'
                                                stroke='#33956D'
                                            />
                                        )}
                                    </Disclosure.Button>
                                    <div className='hidden sm:ml-6 md:block '>
                                        <div className='flex space-x-4 '>
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                >
                                                    <a
                                                        className={classNames(
                                                            item.current
                                                                ? "  text-[white]"
                                                                : " hover:bg-[gray-700] hover:text-white text-[white]",
                                                            "rounded-md px-3 py-2 font-medium "
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
                                <Link href='/'>
                                    <Image
                                        className=' relative translate-x-[-10%] scale-75 cursor-pointer md:scale-100'
                                        src='/images/lets share logo.svg'
                                        alt='Lets share logo'
                                        width={240}
                                        height={120}
                                    />
                                </Link>
                                <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-end'>
                                    <div className='flex flex-shrink-0 items-center'>
                                        <div className='hidden sm:ml-6 md:block '>
                                            <div className='mr-0 flex space-x-0 lg:mr-5 lg:space-x-4 '>
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                    >
                                                        <a
                                                            className='hover:text-white mx-1 rounded-md px-3
                                                        py-2 text-fontColor hover:opacity-70 lg:text-lg'
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
                                        <div className='hidden md:block  '>
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
                            <div className='mx-10 rounded-lg bg-[white] px-2 shadow-lg   '>
                                <div className='flex cursor-pointer justify-center py-2 hover:bg-[#dce6ef] '>
                                    <UserMenu />
                                </div>
                                <div className='flex cursor-pointer justify-center border-t border-[rgba(179,178,187,0.4)] py-2 hover:bg-[#dce6ef]'>
                                    <LangMenu />
                                </div>
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as='a'
                                        href={item.href}
                                        className='-z-20 mt-0  block border-t border-[rgba(179,178,187,0.4)] px-3 py-2 text-center font-medium text-fontColor hover:bg-btnBgHover'
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
        </div>
    );
}
