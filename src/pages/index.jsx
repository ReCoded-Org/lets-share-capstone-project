import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Link from "next/link";

// import '../styles/global.css';

import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/heroSection";
import List from "@/components/LandingList";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";

export async function getStaticProps({ locale }) {
    const res = await fetch(`http://localhost:3000/items`);
    const items = await res.json();
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            items,
        },
    };
}

export default function HomePage({ items }) {
    const { t } = useTranslation("common");

    const blogs = [
        {
            id: 1,
            title: "My-Blog" /*(An actual title should be provided here for the dynamic routing)*/,
            image: "/Photo.png" /*(The path of image should be provided)*/,
            imageAlt:
                "Sunset in the mountains" /*(An actual ALT should be provided)*/,
        },
        {
            id: 2,
            title: "My-Blog-second" /*(An actual title should be provided here for the dynamic routing)*/,
            image: "/Photo.png" /*(The path of image should be provided)*/,
            imageAlt:
                "Sunset in the mountains" /*(An actual ALT should be provided)*/,
        },
        {
            id: 3,
            title: "My-Blog-third" /*(An actual title should be provided here for the dynamic routing)*/,
            image: "/Photo.png" /*(The path of image should be provided)*/,
            imageAlt:
                "Sunset in the mountains" /*(An actual ALT should be provided)*/,
        },
    ];

    return (
        <Layout className=''>
            <HeroSection />
            <Stats />

            <div className='bg-[#FAFAFA]'>
                <List items={items} />
                <List blogs={blogs} />
            </div>

            <Partners />

            <p>{t("test")}</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/' locale='en'>
                    <a>English</a>
                </Link>
                <Link href='/' locale='ar'>
                    <a>Arabic</a>
                </Link>
                <Link href='/' locale='tr'>
                    <a>Turkish</a>
                </Link>
            </div>
        </Layout>
    );
}

/*export async function getStaticProps({ locale }) {
    return {
        props: {
           // ...(await serverSideTranslations(locale, ["common"])),//
            // Will be passed to the page component as props
        },
    };
}*/
