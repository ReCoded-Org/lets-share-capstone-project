import React from "react";

import Image from "next/image";

export default function Card() {
    const item = {
        title: "My Blog",
        date: "01/01/2015",
        description: "This is my blog",
    };

    return (
        <div className=' group cursor-pointer  overflow-hidden  text-primary'>
            <div className='relative aspect-video overflow-hidden rounded-md transition-all group-hover:scale-110 '>
                <Image
                    layout='fill'
                    objectFit='cover'
                    className='abso h-full w-full'
                    src='/Photo.png'
                    alt='Sunset in the mountains'
                />
                <span className='text-white absolute bottom-0 left-0 rounded-md bg-primary py-1 px-3'>
                    07 july
                </span>
            </div>
            <div className=' py-4 '>
                <h2 className='text-brand-primary dark:text-white mt-2 text-lg font-semibold tracking-normal'>
                    <span
                        className='     from-green-400 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-gradient-to-r
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'
                    >
                        {item.title}{" "}
                    </span>
                </h2>
                <p className='text-gray-700 mt-2 text-base '>
                    {item.description}
                </p>
            </div>
        </div>
    );
}
