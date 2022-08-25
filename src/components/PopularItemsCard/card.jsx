import Image from "next/image";
import React from "react";
import Link from "next/link";

const item = {
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
};
//need to remove above item and pass {item} as props in below function
function card() {
    return (
        <Link href={`items/${item.id}`}>
            <div className='group w-[250px] cursor-pointer overflow-hidden rounded-lg  bg-[white] font-primary text-primary shadow-xl transition duration-300  hover:scale-105 hover:shadow-2xl'>
                <div className='relative aspect-video overflow-hidden rounded-md transition-all  '>
                    <Image
                        layout='fill'
                        objectFit='cover'
                        className='abso h-full w-full'
                        src={item.images[0]}
                        alt='Sunset in the mountains'
                    />
                </div>
                <div className=' flex justify-between py-4  px-3'>
                    <div className=' flex flex-col justify-between'>
                        <div className='mb-2 flex justify-between'>
                            <div className='flex'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='mt-1 h-4 w-4 group-hover:animate-bounce'
                                    viewBox='0 0 20 20'
                                    fill='#F07167'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                                <span className='ml-1'>{item.location}</span>
                            </div>
                            <span className='text-base font-semibold text-secondary'>
                                {item.category}
                            </span>
                        </div>
                        <h2 className=' dark:text-white  text-base font-semibold md:text-lg'>
                            <span
                                className='dark:from-purple-800 dark:to-purple-900 bg-gradient-to-r from-[#4ade80] to-[#dcfce7]
                                        bg-[length:0px_10px]
                                        bg-left-bottom
                                        bg-no-repeat
                                        transition-[background-size]
                                        duration-500
                                        hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'
                            >
                                {item.title}
                            </span>
                        </h2>
                        <p className='mt-2  text-sm md:text-base '>
                            {`${item.description.substring(0, 80)}......`}
                        </p>
                    </div>
                    <span className='opacity-0 transition duration-300 group-hover:opacity-100 '>
                        {item.category.name}
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default card;
