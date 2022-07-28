import React from "react";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";

import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const profiles = [
    {
        name: "Name Surname1",
        description: "information about team member",
        image: "/images/Lets-share-test-profile.png",
        Likedin: "https://www.linkedin.com/in/name-surname1/",
        Github: "/github/name-surname1",
    },
    {
        name: "Name Surname2",
        description: "information about team member",
        image: "/images/Lets-share-test-profile.png",
        Likedin: "https://www.linkedin.com/in/name-surname1/",
        Github: "/github/name-surname1",
    },
    {
        name: "Name Surname3",
        description: "information about team member",
        image: "/images/Lets-share-test-profile.png",
        Likedin: "https://www.linkedin.com/in/name-surname1/",
        Github: "/github/name-surname1",
    },
    {
        name: "Name Surname4",
        description: "information about team member",
        image: "/images/Lets-share-test-profile.png",
        Likedin: "https://www.linkedin.com/in/name-surname1/",
        Github: "/github/name-surname1",
    },
    {
        name: "Name Surname5",
        description: "information about team member",
        image: "/images/Lets-share-test-profile.png",
        Likedin: "https://www.linkedin.com/in/name-surname1/",
        Github: "/github/name-surname1",
    },
];

function OurTeam() {
    return (
        <div className=''>
            <h1 className=' py-5 text-center text-2xl font-bold '>Our Team</h1>
            <div className=' grid-col-1   grid justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  '>
                {profiles.map((profile, i) => (
                    <div key={i}>
                        <div className='   w-48   justify-items-center '>
                            <div>
                                <div className=' h-48 w-48 cursor-pointer  rounded-full bg-secondary shadow transition duration-300 ease-in-out hover:scale-110 '>
                                    <Image
                                        className='rounded-full'
                                        src={profile.image}
                                        alt='Lets-share-logo'
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className=' p-2 text-center '>
                                    <div className='flex justify-center gap-2 p-2 text-3xl'>
                                        <Link href='{profile.Likedin}'>
                                            <AiFillLinkedin className='cursor-pointer   hover:text-fontColor ' />
                                        </Link>
                                        <Link href='{profile.Github}'>
                                            <AiFillGithub className='cursor-pointer   hover:text-fontColor' />
                                        </Link>
                                    </div>
                                    <h2 className='font-bold'>
                                        {profile.name}
                                    </h2>
                                    <p className='max-w-[200px]'>
                                        {profile.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurTeam;
