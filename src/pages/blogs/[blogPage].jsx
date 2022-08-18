import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import Image from "next/image";

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
    const { t } = useTranslation("common");
    return (
        // The styling is a subject to be changed in the future
        <div className='d-flex justify-center text-center'>
            <div>
                <Image
                    src={oneBlog.image}
                    height={300}
                    width={350}
                    alt={oneBlog.imageAlt}
                />
            </div>
            <div>
                <h1>{t(`blogs.headerBlg${oneBlog.id}`)}</h1>
                <p>{t(`blogs.contentBlg${oneBlog.id}`)}</p>
            </div>
        </div>
    );
};
export default BlogPage;
