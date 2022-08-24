import React from "react";
import { useTranslation } from "next-i18next";
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
    const { t } = useTranslation("common");
    return (
        <div className=' my-5 font-primary'>
            <h1 className=' mb-5 py-5 text-center font-head text-4xl font-bold tracking-wider text-fontColor '>
                {t("aboutus.team")}
            </h1>
            <div className='grid-col-1 mx-[7rem] grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {profiles.map((profile, i) => (
                    <div key={i} className=' my-6 w-48 justify-center'>
                        <div className=' h-48 w-48 rounded-full bg-secondary '>
                            <Image
                                className='rounded-full'
                                src={profile.image}
                                alt='Lets-share-logo'
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className=' p-2 text-center '>
                            <div className='flex justify-center gap-3 p-2 text-3xl'>
                                <Link href='{profile.Likedin}'>
                                    <AiFillLinkedin className='cursor-pointer hover:text-fontColor' />
                                </Link>
                                <Link href='{profile.Github}'>
                                    <AiFillGithub className='cursor-pointer hover:text-fontColor' />
                                </Link>
                            </div>
                            <h2 className='my-1 font-bold'>{profile.name}</h2>
                            <p className='text-md'>{profile.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurTeam;
