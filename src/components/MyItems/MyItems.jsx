import React from "react";
import Link from "next/link";
import Image from "next/image";

function MyItems() {
    const items = [
        { id: 1, title: "Product Title", image: "/images/item pic.png" },
        { id: 2, title: "Product Title", image: "/images/item pic.png" },
        { id: 3, title: "Product Title", image: "/images/item pic.png" },
    ];
    return (
        <>
            <div className='mt-12 flex flex-col items-center'>
                <h1 className='mb-10 text-2xl font-bold text-fontColor'>
                    My Items
                </h1>
                {items.map((item) => (
                    <div
                        key={item.id}
                        className='mb-6 flex w-11/12 flex-row items-center justify-between rounded-full bg-secondary py-1 px-2 md:w-9/12 lg:w-9/12 xl:w-9/12'
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={60}
                            height={60}
                            className=' h-8 w-8 rounded-full'
                        />
                        <Link href='#'>
                            <div className='min-w-0 flex-1'>
                                <h3 className='px-2   text-lg text-fontColor hover:-mt-2 hover:cursor-pointer md:px-4 md:py-4 md:text-xl xl:px-4 xl:py-4 xl:text-xl'>
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                        <div className='mx-4 inline-flex items-center '>
                            <div className='hover:-mt-2 hover:cursor-pointer'>
                                <Image
                                    src='/images/IconEdit.png'
                                    alt='Edit'
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className='ml-8 hover:-mt-2 hover:cursor-pointer'>
                                <Image
                                    src='/images/IconDelete.png'
                                    alt='Delete'
                                    width={20}
                                    height={25}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MyItems;
