import * as React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { BiHappyBeaming, BiDonateHeart } from "react-icons/bi";
import { MdFamilyRestroom } from "react-icons/md";
import Link from "next/link";

const HeroSection = () => {
    const { t } = useTranslation("common");

    return (
        <div className='font-primary'>
            <div
                id='firstSection'
                className='flex flex-col items-center px-5 md:mt-16 md:h-[60vh] md:flex-row md:items-center xl:ml-20 '
            >
                <div className=' relative flex h-[450px] w-full flex-row md:order-1 md:w-1/2  '>
                    <Image
                        src='/gift_box.svg'
                        layout='fill'
                        objectFit='contain'
                        alt='/'
                    />
                </div>
                <div className='  my-5 flex h-[380px] w-[80%] flex-col items-center justify-center text-center md:w-1/2'>
                    <p className='mb-1 py-5 font-qoute text-3xl text-fontColor md:w-[80%] md:text-left md:text-4xl lg:leading-relaxed'>
                        {t("landing.heroSection.heroText")}
                    </p>
                    <p className='text-2xll mb-8 py-5 text-fontColor sm:w-[80%] md:text-right md:text-xl'>
                        {t("landing.heroSection.myles")}
                    </p>
                    <Link href='/add-item'>
                        <button
                            type='submit'
                            className='line rounded-full bg-primary py-2 px-4 text-2xl text-[white] transition duration-300 hover:scale-105 hover:bg-secondary hover:shadow-lg'
                        >
                            {t("landing.heroSection.button")}
                        </button>
                    </Link>
                </div>
            </div>
            <hr className='mx-10 my-14 border-primary/70' />
            <div id='causes' className=''>
                <h2 className='text-center font-head text-4xl font-medium text-fontColor md:text-5xl'>
                    {t("landing.causes.causes")}
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:mx-14 lg:grid-cols-3'>
                    <div className='mx-10 my-10 flex flex-col items-center gap-5 px-5 lg:w-auto'>
                        <BiHappyBeaming size={130} color='#F07167' />
                        <p className='text-center text-sm md:text-lg'>
                            {t("landing.causes.causeText1")}
                        </p>
                    </div>
                    <div className='mx-10 my-10 flex flex-col items-center gap-5 px-5 lg:w-auto'>
                        <BiDonateHeart size={130} color='#F07167' />
                        <p className='text-center text-sm md:text-lg'>
                            {t("landing.causes.causeText2")}
                        </p>
                    </div>
                    <div className='mx-10 my-10 flex flex-col items-center gap-5 px-5 lg:w-auto'>
                        <MdFamilyRestroom size={130} color='#F07167' />
                        <p className='text-center text-sm md:text-lg'>
                            {t("landing.causes.causeText3")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
