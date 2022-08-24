import Image from "next/image";
import { useTranslation } from "next-i18next";
import { MdSwitchAccount } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { BsFillPinMapFill } from "react-icons/bs";
import { MdRecommend } from "react-icons/md";

function Stats() {
    const { t } = useTranslation("common");
    return (
        <div className='bg-[#FAFAFA] font-primary'>
            <div className='flex  h-60 justify-center bg-primary md:h-80 xl:h-80'>
                <Image
                    src='/images/donate.png'
                    alt='donate'
                    width={600}
                    height={1000}
                    className=' -z-1 ml-10 h-full w-full opacity-25'
                />
            </div>
            <div className='container relative mx-auto -mt-12   grid  grid-cols-1 gap-x-6 gap-y-6 rounded-2xl bg-[white] px-4 py-8  shadow-lg sm:grid-cols-2 md:-mt-24 lg:grid-cols-4 xl:-mt-24'>
                <div className='group flex basis-1/4 flex-col items-center gap-3 rounded-lg p-3 text-center transition-all duration-300 hover:-translate-y-3 hover:bg-[#f3f3f3] hover:shadow-lg'>
                    <MdSwitchAccount color='#F07167' size={60} />
                    <h2 className='font-bold text-fontColor'>
                        {t("landing.stats.accountsTitle")}
                    </h2>
                    <p className='text-fontColor '>
                        {t("landing.stats.accounts")}
                    </p>
                </div>

                <div className='group flex basis-1/4 flex-col items-center gap-3 rounded-lg p-3 text-center transition-all duration-300 hover:-translate-y-3 hover:bg-[#f3f3f3] hover:shadow-lg'>
                    <FaChartLine color='#F07167' size={60} />
                    <h2 className='font-bold text-fontColor'>
                        {t("landing.stats.beneficiariesTitle")}
                    </h2>
                    <p className='text-fontColor'>
                        {t("landing.stats.beneficiaries")}
                    </p>
                </div>

                <div className='group flex basis-1/4 flex-col items-center gap-3 rounded-lg p-3 text-center transition-all duration-300 hover:-translate-y-3 hover:bg-[#f3f3f3] hover:shadow-lg'>
                    <BsFillPinMapFill color='#F07167' size={60} />
                    <h2 className='font-bold text-fontColor'>
                        {t("landing.stats.GeographicalDistrictsTitle")}
                    </h2>
                    <p className='text-fontColor '>
                        {t("landing.stats.GeographicalDistricts")}
                    </p>
                </div>

                <div className='group flex basis-1/4 flex-col items-center gap-3 rounded-lg p-3 text-center transition-all duration-300 hover:-translate-y-3 hover:bg-[#f3f3f3] hover:shadow-lg'>
                    <MdRecommend color='#F07167' size={60} />
                    <h2 className='font-bold text-fontColor'>
                        {t("landing.stats.recommendationsTitle")}
                    </h2>
                    <p className='text-fontColor '>
                        {t("landing.stats.recommendations")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Stats;
