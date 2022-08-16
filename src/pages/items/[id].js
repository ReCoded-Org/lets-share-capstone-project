import Layout from "@/components/layout/Layout";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import PopularItemCard from "@/components/PopularItemsCard";

export async function getStaticPaths() {
    const res = await fetch("http://localhost:3000/items");
    const items = await res.json();
    const paths = items.map((item) => ({
        params: {
            id: item.id.toString(),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/items/${params.id}`);
    const item = await res.json();
    const data = await fetch(`http://localhost:3000/items`);
    const items = await data.json();

    return {
        props: {
            item,
            items,
        },
    };
}

function Item({ item, items }) {
    const user = {
        name: "user1 user",
        email: "asgaga@fdg.com",
        phone: 123456789,
    };

    const settings = {
        customPaging: function () {
            return (
                <a className=' '>
                    <Image
                        src={item.images[0]}
                        width={100}
                        height={100}
                        className=''
                        alt='thumb'
                    />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Layout>
            <div className='container mx-auto mt-5 mb-5  w-[90%]'>
                <div className='flex flex-col items-center md:flex-row md:items-start md:space-x-14 '>
                    <div className=' '>
                        <div className='w-[500px]  '>
                            <Slider {...settings}>
                                {item.images.map((image, index) => (
                                    <div key={index} className=' ml-14  '>
                                        <Image
                                            src={image}
                                            width={400}
                                            height={400}
                                            layout='fixed'
                                            alt='item'
                                            className=' object-conver inset-0 mx-auto rounded-2xl'
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className=' max-w-lg p-5 text-left text-fontColor '>
                        <h1 className='text-xl font-bold'>{item.title}</h1>
                        <p className='text-lg md:mb-12'>{item.description}</p>
                        <div className='flex items-center justify-between font-semibold'>
                            <div className=' flex flex-col justify-between '>
                                <div className='my-3 '>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-5 w-5'
                                        viewBox='0 0 20 20'
                                        fill='#F07167'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>{" "}
                                    {item.location}
                                </div>
                                <div>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-6 w-6'
                                        fill='#F07167'
                                        viewBox='0 0 24 24'
                                        stroke=''
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                                        />
                                    </svg>{" "}
                                    {item.category}
                                </div>
                            </div>
                            <div className='flex flex-col items-center '>
                                <div className='flex  justify-between'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-5 w-5'
                                        viewBox='0 0 20 20'
                                        fill='#F07167'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span className='text-sm'>{user.name}</span>
                                </div>
                                <span className='my-2'>{user.email}</span>
                                <span>{user.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='my-5 text-xl font-bold'>related items</h1>
                    <div className='container  mx-auto mt-10 mb-10 flex  grid-cols-2 flex-col gap-5   text-center sm:grid md:text-left   lg:grid-cols-5  xl:grid-cols-5'>
                        {items.slice(0, 5).map((item) => (
                            <PopularItemCard item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Item;
