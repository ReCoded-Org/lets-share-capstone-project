import * as React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { IoIosHelpBuoy } from "react-icons/io";

const HeroSection = () => {
    const { t } = useTranslation("common");

    return (
        <div className=''>
            <div
                id='firstSection'
                className='mt-[40px] flex flex-col items-center px-5 md:ml-20 md:h-[84vh] md:flex-row md:items-start '
            >
                <div className=' relative  flex h-[450px] w-full flex-row md:order-1  '>
                    <Image
                        src='/ggg.svg'
                        layout='fill'
                        objectFit='contain'
                        alt='/'
                    />
                </div>
                <div className='relative  my-[30px] flex   h-[341px] w-[50%] flex-col items-center justify-center text-center md:items-start'>
                    <div className='sss hidden md:block'></div>
                    <p className='text-2xll mb-8 py-5 sm:w-[80%] md:text-left md:text-xl'>
                        {t("heroMain")}
                    </p>
                    <button
                        type='submit'
                        className='line rounded-full bg-primary py-2 px-4 text-xl font-bold text-[white] transition duration-500 hover:bg-secondary'
                    >
                        {t("donate now")}
                    </button>
                </div>
            </div>
            <div id='causes' className='   py-12'>
                <h2 className='text-center text-3xl font-black text-fontColor'>
                    {t("causes")}
                </h2>
                <div className=' flex grid-cols-1 flex-col flex-wrap items-center justify-center sm:flex-row md:grid-cols-2 lg:grid-cols-3 2xl:grid '>
                    <div className='mx-10  my-10 flex flex-col items-center gap-5 px-5 sm:w-[30%] lg:w-auto'>
                        <IoIosHelpBuoy
                            size={130}
                            color='#F07167'
                            className='hover:animate-spin'
                        />
                        <h3 className='text-2xl font-bold text-fontColor'>
                            {t("causeTitle1")}
                        </h3>
                        <p className='text-center text-lg md:text-xl'>
                            {t("causeText1")}
                        </p>
                    </div>
                    <div className='mx-10 my-10 flex flex-col items-center gap-5 px-5 sm:w-[30%] lg:w-auto'>
                        <IoIosHelpBuoy size={130} color='#F07167' />
                        <h3 className='text-2xl font-bold text-fontColor'>
                            {t("causeTitle2")}
                        </h3>
                        <p className='text-center text-lg'>{t("causeText2")}</p>
                    </div>
                    <div className='mx-10 my-10 flex flex-col items-center gap-5 px-5 sm:w-[30%] lg:w-auto'>
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
