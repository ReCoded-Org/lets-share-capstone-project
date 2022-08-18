import React from "react";
import Image from "next/image";
import Button from "../button";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function BlogsCard({ item }) {
    const { t } = useTranslation("common");
    const index = item.id;
    const evenindex = index % 2 === 0 ? true : false;

    return (
        <div>
            <div
                className={
                    evenindex
                        ? "mb-3 flex  flex-row justify-between p-10"
                        : "mb-3 flex  flex-row-reverse justify-between p-10"
                }
            >
                <div className=' p-10 px-10'>
                    <Image
                        src={item.image}
                        className='card-img'
                        alt={item.imageAlt}
                        width={1000}
                        height={800}
                    />
                </div>

                <div className=' flex flex-col items-start justify-center'>
                    <div className='r-md-8  px-10'>
                        <h2 className='pb-2 text-xl font-bold text-fontColor'>
                            {t(`blogs.headerBlg${item.id}`)}
                        </h2>
                        <p className='text-lg text-fontColor'>
                            {t(`blogs.contentBlg${item.id}`).slice(0, 250) +
                                "..."}
                        </p>

                        <div className='flex h-7 w-10 flex-1'>
                            <Link href={`/blogs/${item.title.toString()}`}>
                                <a>
                                    <Button fullfilled='Read more' />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
