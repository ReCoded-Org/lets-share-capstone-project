// import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

// import '../styles/global.css';

import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/heroSection";
import List from "@/components/LandingList";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";

export async function getStaticProps({ locale }) {
    // const res = await fetch(`http://localhost:3000/items`);
    // const items = await res.json();
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // items,
        },
    };
}

export default function HomePage() {
    // const { t } = useTranslation("common");
    //need to remove below item object and pass {items} as props in this function
    const items = [
        {
            id: 13,
            title: "Fantastic Frozen Computer",
            location: "Adana",
            price: 787,
            description:
                "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
            category: "Furniture",

            images: [
                "https://api.lorem.space/image/furniture?w=640&h=480&r=9644",
                "https://api.lorem.space/image/furniture?w=640&h=480&r=9186",
                "https://api.lorem.space/image/furniture?w=640&h=480&r=6667",
            ],
        },
    ];

    const blogs = [
        {
            id: 1,
            date: "7 july 2022",
            title: "My-Blog" /*(An actual title should be provided here for the dynamic routing)*/,
            image: "/Photo.png" /*(The path of image should be provided)*/,
            imageAlt:
                "Sunset in the mountains" /*(An actual ALT should be provided)*/,
        },
        {
            id: 2,
            date: "7 july 2022",
            title: "My-Blog-second" /*(An actual title should be provided here for the dynamic routing)*/,
            image: "/Photo.png" /*(The path of image should be provided)*/,
            imageAlt:
                "Sunset in the mountains" /*(An actual ALT should be provided)*/,
        },
        {
            id: 3,
            date: "7 july 2022",
            title: "My-Blog-third" /*(An actual title should be provided here for the dynamic routing)*/,
            image: "/Photo.png" /*(The path of image should be provided)*/,
            imageAlt:
                "Sunset in the mountains" /*(An actual ALT should be provided)*/,
        },
        {
            id: 4,
            date: "7 july 2022",
            title: "My-Blog-forth" /*(An actual title should be provided here for the dynamic routing)*/,
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
                <Partners />
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
