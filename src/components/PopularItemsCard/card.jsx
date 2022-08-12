import Image from "next/image";
import React from "react";

function card({item}) {
    // const item = {
    //     title: "My item",
    //     description: "This is my item",
    //     location: "istanbul",
    //     category: "item",
    //     user: "user1",
    // };

    return (
        <div className=' group cursor-pointer overflow-hidden  rounded-lg bg-[#F3F3F3] text-primary shadow-xl transition duration-300  hover:scale-105 hover:shadow-2xl'>
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
                    <h2 className='text-brand-primary dark:text-white  text-l font-semibold tracking-normal'>
                        <span
                            className='     dark:from-purple-800 dark:to-purple-900 bg-gradient-to-r from-[#4ade80] to-[#dcfce7]
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
                    {/* <p className='text-gray-700 mt-2  text-base truncate'>
                        {item.description}
                    </p> */}
                </div>

                <div className='flex flex-col items-center justify-between'>
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
                        </svg>{" "}
                        <span className='ml-1'>{item.location}</span>
                    </div>
                    <span className='opacity-0 transition duration-300 group-hover:opacity-100 '>
                        {item.category.name}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default card;
