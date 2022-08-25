import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}

export default function Login() {
    const { t } = useTranslation("common");
    return (
        <Layout>
            {/*main section*/}
            <div className='grid grid-cols-1 items-center p-2 font-primary md:grid-cols-2  '>
                {/*left section*/}
                <div
                    id='leftcontainer'
                    className=' my-10 flex w-3/4 flex-col items-center justify-self-center text-fontColor xl:w-1/2'
                >
                    <div className='mb-8'>
                        <h2 className='w-full font-head text-4xl font-semibold tracking-wider'>
                            {t("common.logIn")}
                        </h2>
                    </div>
                    <div className='mb-8 w-full'>
                        <div className='flex flex-col items-start justify-center'>
                            <label className='mb-3 pl-3 text-lg font-semibold text-fontColor'>
                                {t("common.email")}
                            </label>
                            <input
                                type='email'
                                placeholder={t("common.email")}
                                className='form-control h-10 w-full rounded-lg border-0 bg-[white] bg-clip-padding shadow-lg'
                            />
                        </div>
                    </div>
                    <div className='mb-3 w-full'>
                        <div className='flex flex-col items-start justify-center '>
                            <label className='mb-3 pl-3 text-lg font-semibold text-fontColor'>
                                {t("common.password")}
                            </label>
                            <input
                                type='password'
                                placeholder={t("common.password")}
                                className='form-control h-10 w-full rounded-lg border-0 bg-[white] bg-clip-padding shadow-lg'
                            />
                        </div>
                    </div>
                    <div className='mb-5 w-full self-start py-2 pl-3'>
                        <label className='  text-sm'>
                            <input type='checkbox' className='mr-1 rounded' />
                            {t("logIn.remember")}
                        </label>
                    </div>
                    <div className='flex w-full justify-center font-primary'>
                        <button className='my-5 h-9 w-full rounded-full bg-primary text-lg text-[white] shadow-md transition duration-300 hover:scale-[103%] hover:bg-secondary'>
                            {t("common.logIn")}
                        </button>
                    </div>
                    <div className=' mb-3 py-2 text-center text-base'>
                        <p className='mb-2'>
                            {t("logIn.noAccount")}{" "}
                            <a
                                className=' p-2 underline underline-offset-4 hover:text-primary'
                                href='#'
                            >
                                {t("common.signUp")}
                            </a>
                        </p>
                        <a
                            className=' underline underline-offset-4 hover:text-primary'
                            href='#'
                        >
                            {t("logIn.forgot")}
                        </a>
                    </div>

                    <span className='text-md mb-2 text-center font-bold'>
                        <h1>{t("logIn.with")} </h1>
                    </span>

                    <div className=' hover:text-text-fontColor flex flex-row items-center justify-center gap-3 p-1 text-2xl '>
                        <a href='#'>
                            <AiFillFacebook
                                color='#33956D'
                                size={30}
                                className=' cursor-pointer transition duration-200 hover:fill-secondary'
                            />
                        </a>
                        <a href='#'>
                            <FaInstagram
                                color='#33956D'
                                size={30}
                                className='cursor-pointer transition duration-200 hover:fill-secondary'
                            />
                        </a>
                    </div>
                </div>
                {/*right section*/}
                <div
                    id='rightcontaier'
                    className='relative flex h-full w-full p-5  '
                >
                    <Image
                        className=' justify-end'
                        src='/images/team.svg'
                        width={900}
                        height={600}
                        alt='/'
                    />
                </div>
            </div>
        </Layout>
    );
}
