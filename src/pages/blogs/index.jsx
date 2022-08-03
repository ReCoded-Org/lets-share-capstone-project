import React from "react";
import Layout from "@/components/layout/Layout";
import BlogsCard from "@/components/BlogsCard";
import BlogCard from "@/components/BlogCard";
import { useState, useEffect } from "react";

export default function Blogs() {
    const items = [
        {
            id: 1,
            title: "My Blog",
            description:
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum necessitatibus numquam qui ea debitis natus amet ab nobis dignissimos consequatur possimus obcaecati corporis doloremque velit, temporibus praesentium unde sed? Quae?",
            image: "/Photo.png",
            date: "01/01/2015",
        },
        {
            id: 2,
            title: "My Blog",
            description:
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum necessitatibus numquam qui ea debitis natus amet ab nobis dignissimos consequatur possimus obcaecati corporis doloremque velit, temporibus praesentium unde sed? Quae?",
            image: "/Photo.png",
            date: "01/01/2015",
        },
        {
            id: 3,
            title: "My Blog",
            description:
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum necessitatibus numquam qui ea debitis natus amet ab nobis dignissimos consequatur possimus obcaecati corporis doloremque velit, temporibus praesentium unde sed? Quae?",
            image: "/Photo.png",
            date: "01/01/2015",
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
                        {items.map((blog) => {
                            return (
                                <div key={blog.id} className='mb-10'>
                                    <BlogsCard item={blog} />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className='m-10 p-10'>
                        {items.map((blog) => {
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
