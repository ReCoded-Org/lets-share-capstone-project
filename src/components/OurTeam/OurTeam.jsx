import React from "react";
import Image from "next/image";
import Link from "next/link";

function OurTeam() {
    const singleProfile = {
        name: "Name Surname",
        description: "information about team member",
    };
    return (
        <div>
            <div
                id='ourTeam'
                className='flex  flex-col items-center justify-center p-5 md:flex-row'
            >
                <div
                    id='singeProfileOurTeam'
                    className=' flex h-72 w-72 flex-col items-center justify-center p-5   '
                >
                    <div className='flex h-48 w-48 cursor-pointer flex-row items-center  justify-center rounded-full bg-secondary shadow transition duration-300 ease-in-out hover:scale-110  '>
                        <Link href='#'>
                            <Image
                                className='rounded-full'
                                src='/images/Lets-share-test-profile.png'
                                alt='Lets-share-logo'
                                width={200}
                                height={200}
                            />
                        </Link>
                    </div>
                    <div>
                        <span className=' flex flex-col justify-center p-2 text-center'>
                            <b>{singleProfile.name}</b>
                            {singleProfile.description}
                        </span>
                    </div>
                </div>
                <div
                    id='singeProfileOurTeam '
                    className=' flex h-72 w-72 flex-col items-center justify-center p-5   '
                >
                    <div className=' flex h-48 w-48 flex-row items-center justify-center  rounded-full bg-secondary shadow transition duration-300 ease-in-out hover:scale-110'>
                        <Link href='#'>
                            <Image
                                className='rounded-full'
                                src='/images/Lets-share-test-profile.png'
                                alt='Lets-share-logo'
                                width={200}
                                height={200}
                            />
                        </Link>
                    </div>
                    <div>
                        <span className=' flex flex-col justify-center p-2 text-center'>
                            <b>{singleProfile.name}</b>
                            {singleProfile.description}
                        </span>
                    </div>
                </div>
                <div
                    id='singeProfileOurTeam flex-row md:flex-col'
                    className=' flex h-72 w-72 flex-col items-center justify-center p-5   '
                >
                    <div className='flex h-48 w-48 flex-row items-center justify-center  rounded-full bg-secondary shadow transition duration-300 ease-in-out  hover:scale-110'>
                        <Link href='#'>
                            <Image
                                className=' rounded-full'
                                src='/images/Lets-share-test-profile.png'
                                alt='Lets-share-logo'
                                width={200}
                                height={200}
                            />
                        </Link>
                    </div>
                    <div>
                        <span className=' flex flex-col justify-center p-2 text-center'>
                            <b>{singleProfile.name}</b>
                            {singleProfile.description}
                        </span>
                    </div>
                </div>
            </div>
            <div
                id='ourTeam'
                className='flex  flex-col items-center justify-center p-5 md:flex-row'
            >
                <div
                    id='singeProfileOurTeam'
                    className=' flex h-72 w-72 flex-col items-center justify-center p-5   '
                >
                    <div className='flex h-48 w-48 cursor-pointer flex-row items-center  justify-center rounded-full bg-secondary shadow transition duration-300 ease-in-out hover:scale-110  '>
                        <Link href='#'>
                            <Image
                                className='rounded-full'
                                src='/images/Lets-share-test-profile.png'
                                alt='Lets-share-logo'
                                width={200}
                                height={200}
                            />
                        </Link>
                    </div>
                    <div>
                        <span className=' flex flex-col justify-center p-2 text-center'>
                            <b>{singleProfile.name}</b>
                            {singleProfile.description}
                        </span>
                    </div>
                </div>
                <div
                    id='singeProfileOurTeam '
                    className=' flex h-72 w-72 flex-col items-center justify-center p-5   '
                >
                    <div className='flex h-48 w-48 flex-row items-center justify-center  rounded-full bg-secondary shadow transition duration-300 ease-in-out hover:scale-110'>
                        <Link href='#'>
                            <Image
                                className='rounded-full'
                                src='/images/Lets-share-test-profile.png'
                                alt='Lets-share-logo'
                                width={200}
                                height={200}
                            />
                        </Link>
                    </div>
                    <div>
                        <span className=' flex flex-col justify-center p-2 text-center'>
                            <b>{singleProfile.name}</b>
                            {singleProfile.description}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OurTeam;
