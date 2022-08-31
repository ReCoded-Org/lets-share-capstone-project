import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

const blogs = [
    {
        id: 1,
        title: "4-reasons-why-donating-is-important" /*(An actual title should be provided here for the dynamic routing)*/,
        image: "/1.svg" /*(The path of image should be provided)*/,
        imageAlt:
            "Sunset in the mountains" /*(An actual ALT should be provided)*/,
    },
    {
        id: 2,
        title: "Why-donating-is-better-than-recycling" /*(An actual title should be provided here for the dynamic routing)*/,
        image: "/2.svg" /*(The path of image should be provided)*/,
        imageAlt:
            "Sunset in the mountains" /*(An actual ALT should be provided)*/,
    },
    {
        id: 3,
        title: "What-should-I-do-before-donating-my-device" /*(An actual title should be provided here for the dynamic routing)*/,
        image: "/3.svg" /*(The path of image should be provided)*/,
        imageAlt:
            "Sunset in the mountains" /*(An actual ALT should be provided)*/,
    },
];
export const getStaticPaths = async ({ locales }) => {
    const paths = blogs.flatMap((blog) => {
        return locales.map((locale) => {
            return {
                params: { blogPage: blog.title.toString() },
                locale: locale,
            };
        });
    });
    return {
        paths: paths,
        fallback: false,
    };
};
export const getStaticProps = async (context) => {
    const title = context.params.blogPage;
    const locale = context.locale;
    const oneBlog = blogs.find((item) => item.title === title);
    return {
        props: {
            oneBlog,
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
};
const BlogPage = ({ oneBlog }) => {
    const { locale } = useRouter();
    const { t } = useTranslation("common");
    return (
        <Layout>
            <div className='my-8 mx-10 grid font-primary lg:mx-20 lg:grid-flow-col lg:grid-cols-4'>
                {/* The styling is a subject to be changed in the future */}
                <div className=' flex flex-col gap-8 justify-self-center text-center lg:col-span-3 lg:w-[80%]'>
                    <h2 className='h-14 py-3 font-head text-4xl text-fontColor'>
                        {t(`blogs.headerBlg${oneBlog.id}`)}
                    </h2>
                    <div>
                        <Image
                            src={oneBlog.image}
                            height={400}
                            width={500}
                            alt={oneBlog.imageAlt}
                            className=''
                        />
                    </div>

                    <ReactMarkdown
                        className={`${
                            locale === "ar" ? "text-right" : "text-left"
                        } lg:mx-10" leading-loose`}
                    >
                        {t(`blogs.contentBlg${oneBlog.id}`)}
                    </ReactMarkdown>
                </div>
                <div className=' mt-8 mb-10 flex flex-col items-center justify-center gap-8 justify-self-center lg:mt-0 lg:w-1/2'>
                    <h2 className='h-14 w-full py-3 text-center font-head text-3xl text-fontColor lg:text-start '>
                        {t("blogs.moreBlogs")}
                    </h2>
                    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1'>
                        {blogs.map((blog) => {
                            return (
                                <Link
                                    key={blog.id}
                                    href={`/blogs/${blog.title.toString()}`}
                                >
                                    <div className='flex cursor-pointer flex-col items-center gap-2 rounded-md bg-[#ffffff] pb-3 shadow-md transition duration-300 hover:scale-[103%] hover:shadow-lg'>
                                        <Image
                                            src={blog.image}
                                            alt='/'
                                            width={240}
                                            height={150}
                                        />
                                        <p className='px-2'>
                                            {t(`blogs.headerBlg${blog.id}`)}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default BlogPage;
