import * as React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { IoIosHelpBuoy } from "react-icons/io";

const HeroSection = () => {
    const { t } = useTranslation("common");

    return (
        <div>
            <div
                id='firstSection'
                className='mt-[70px] grid grid-cols-1 items-center px-5 md:mx-20 md:grid-cols-2 md:gap-20'
            >
                <div className='md:order-1'>
                    <Image
                        src='/../public/images/undraw.png'
                        width={850}
                        height={700}
                        alt='/'
                    />
                </div>
                <div className='my-[30px] flex flex-col items-center justify-center text-center'>
                    <p className='mb-8 py-5 text-2xl md:text-3xl'>
                        {t("heroMain")}
                    </p>
                    <button
                        type='submit'
                        className='rounded-full bg-primary py-3 px-6 text-3xl font-bold  text-[white]'
                    >
                        {t("donate now")}
                    </button>
                </div>
            </div>
            <hr className='my-10 mx-20 border-primary' />
            <div id='causes' className='my-10'>
                <h2 className='text-center text-4xl font-black text-fontColor'>
                    {t("causes")}
                </h2>
                <div className='grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 '>
                    <div className='mx-10 my-10 flex flex-col items-center gap-5 px-5'>
                        <IoIosHelpBuoy size={130} color='#F07167' />
                        <h3 className='text-2xl font-bold text-fontColor'>
                            {t("causeTitle1")}
                        </h3>
                        <p className='text-center text-lg md:text-xl'>
                            {t("causeText1")}
                        </p>
                    </div>
                    <div className='mx-10 my-10 flex flex-col items-center gap-5 px-5'>
                        <IoIosHelpBuoy size={130} color='#F07167' />
                        <h3 className='text-2xl font-bold text-fontColor'>
                            {t("causeTitle2")}
                        </h3>
                        <p className='text-center text-lg'>{t("causeText2")}</p>
                    </div>
                    <div className='mx-10 my-10 flex flex-col items-center gap-5 px-5'>
                        <IoIosHelpBuoy size={130} color='#F07167' />
                        <h3 className='text-2xl font-bold text-fontColor'>
                            {t("causeTitle3")}
                        </h3>
                        <p className='text-center text-lg'>{t("causeText3")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
