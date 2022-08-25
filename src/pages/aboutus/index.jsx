import * as React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import OurTeam from "@/components/OurTeam";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
export default function Aboutus() {
    const { locale } = useRouter();
    const { t } = useTranslation("common");
    return (
        <Layout>
            <div className=' mt-[20px] flex flex-col items-center px-5 font-primary md:ml-20 md:h-[60vh] md:flex-row  '>
                <div className=' relative flex h-[30rem] w-full flex-row items-center md:order-1  '>
                    <Image
                        src='/puzzels.svg'
                        layout='fill'
                        objectFit='contain'
                        alt='/'
                    />
                </div>
                <div
                    className={`   my-[30px] flex h-[341px] w-[90%] flex-col items-center justify-center   md:items-${
                        locale === "ar" ? "end" : "start"
                    } xl:mx-5`}
                >
                    <h2 className=' font-head  text-4xl font-bold tracking-wider text-fontColor'>
                        {t("aboutus.heroSection.heroTitle")}
                    </h2>
                    <p
                        className={`text-md mb-8 py-5 sm:w-[100%] md:${
                            locale === "ar" ? "text-right" : null
                        }  xl:text-lg`}
                    >
                        {t("aboutus.heroSection.heroText")}
                    </p>
                </div>
            </div>
            <OurTeam />
        </Layout>
    );
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
