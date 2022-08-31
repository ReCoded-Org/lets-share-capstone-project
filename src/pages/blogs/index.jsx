import React from "react";
import Layout from "@/components/layout/Layout";
import BlogsCard from "@/components/BlogsCard";
import BlogCard from "@/components/BlogCard";
import { useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function Blogs() {
    const blogs = [
        {
            id: 1,
            date: "7 July 2022",
            title: "4-reasons-why-donating-is-important" /*(An actual title should be provided here for the dynamic routing)*/,
            image: "/1.svg" /*(The path of image should be provided)*/,
            imageAlt:
                "Sunset in the mountains" /*(An actual ALT should be provided)*/,
        },
        {
            id: 2,
            date: "7 July 2022",
            title: "Why-donating-is-better-than-recycling" /*(An actual title should be provided here for the dynamic routing)*/,
            image: "/2.svg" /*(The path of image should be provided)*/,
            imageAlt:
                "Sunset in the mountains" /*(An actual ALT should be provided)*/,
        },
        {
            id: 3,
            date: "7 July 2022",
            title: "What-should-I-do-before-donating-my-device" /*(An actual title should be provided here for the dynamic routing)*/,
            image: "/3.svg" /*(The path of image should be provided)*/,
            imageAlt:
                "Sunset in the mountains" /*(An actual ALT should be provided)*/,
        },
    ];

    const [isDesktop, setDesktop] = useState(true);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 650);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div>
            <Layout>
                {isDesktop ? (
                    <div className='m-10 p-10'>
                        {blogs.map((blog) => {
                            return (
                                <div key={blog.id} className='mb-10'>
                                    <BlogsCard item={blog} />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className='m-10 flex flex-col items-center p-10'>
                        {blogs.map((blog) => {
                            return (
                                <div key={blog.id} className='mb-10'>
                                    <BlogCard item={blog} />
                                </div>
                            );
                        })}
                    </div>
                )}
            </Layout>
        </div>
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
