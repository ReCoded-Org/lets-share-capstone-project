import Image from "next/image";
import React from "react";

function card() {
    const item = [
        {
            title: "My item",
            description: "This is my item",
            location: "istanbul",
            category: "item",
            user: "user1",
        },
    ];

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
            </div>
            <div className=' py-4 '>
                <div className='flex items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 group-hover:animate-bounce'
                        viewBox='0 0 20 20'
                        fill='#F07167'
                    >
                        <path
                            fillRule='evenodd'
                            d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                            clipRule='evenodd'
                        />
                    </svg>{" "}
                    <span className='ml-2'>{item.location}</span>
                </div>

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
                        {item.title}
                    </span>
                </h2>
                <p className='text-gray-700 mt-2 text-base '>
                    {item.description}
                </p>
            </div>
        </div>
    );
}

export default card;
