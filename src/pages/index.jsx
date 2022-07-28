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

export default function HomePage() {
    const { t } = useTranslation("common");

    const blogs = [
        {
            title: "My Blog",
            date: "01/01/2015",
            description: "This is my blog",
        },
        {
            title: "My Blog",
            date: "01/01/2015",
            description: "This is my blog",
        },
        {
            title: "My Blog",
            date: "01/01/2015",
            description: "This is my blog",
        },
        {
            title: "My Blog",
            date: "01/01/2015",
            description: "This is my blog",
        },
    ];

    const items = [
        {
            title: "My item",
            description: "This is my item",
            location: "istanbul",
            category: "item",
            user: "user1",
        },
        {
            title: "My item",
            description: "This is my item",
            location: "istanbul",
            category: "item",
            user: "user1",
        },
        {
            title: "My item",
            description: "This is my item",
            location: "istanbul",
            category: "item",
            user: "user1",
        },
        {
            title: "My item",
            description: "This is my item",
            category: "item",
            location: "istanbul",
            user: "user1",
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

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
