import React from "react";

import Image from "next/image";

function List() {
    return (
        <div className='pt-20 pb-14'>
            <h2 className='text-center font-head text-4xl font-bold tracking-wider text-primary'>
                Partners
            </h2>
            <div className=' container mx-auto mt-10 flex grid-cols-2 flex-col items-center gap-10 px-4 text-center sm:grid md:grid-cols-4 md:px-10 lg:flex-row  lg:justify-around xl:grid-cols-4'>
                <div className='relative mx-auto aspect-video w-64  md:w-40'>
                    <Image
                        src='/Photo.png'
                        alt='partner'
                        width={50}
                        height={30}
                        layout='responsive'
                        className='rounded-md'
                    />
                </div>
                <div className='relative mx-auto aspect-video w-64 md:w-40'>
                    <Image
                        src='/Photo.png'
                        alt='partner'
                        width={50}
                        height={30}
                        layout='responsive'
                        className='rounded-md'
                    />
                </div>
                <div className='relative mx-auto aspect-video w-64 md:w-40'>
                    <Image
                        src='/Photo.png'
                        alt='partner'
                        width={50}
                        height={30}
                        layout='responsive'
                        className='rounded-md'
                    />
                </div>
                <div className='relative mx-auto aspect-video w-64 md:w-40'>
                    <Image
                        src='/Photo.png'
                        alt='partner'
                        width={50}
                        height={30}
                        layout='responsive'
                        className='rounded-md'
                    />
                </div>
            </div>
        </div>
    );
}

export default List;
