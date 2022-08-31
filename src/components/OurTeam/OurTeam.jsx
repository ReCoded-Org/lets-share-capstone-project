import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const profiles = [
    [
        {
            name: "Salah Al-dhaferi",
            description: "Lead Engineer",
            image: "/images/Salah.jpg",
            Likedin: "https://www.linkedin.com/in/salah-aldhaferi/",
            Github: "https://github.com/tech-chieftain",
        },
        {
            name: "Amjad Maqsouma",
            description: "Junior Engineer",
            image: "/images/profileAmjad.jpg",
            Likedin: "https://www.linkedin.com/in/amjad-maqsouma-54bb91234/",
            Github: "https://github.com/amjadmak",
        },
        {
            name: "Heni Muhammed",
            description: "Junior Engineer",
            image: "/images/Hani.jpg",
            Likedin: "https://www.linkedin.com/in/hani-md/",
            Github: "https://github.com/hanimuh",
        },
        {
            name: "Ghufran Al-Haddad",
            description: "Junior Engineer",
            image: "/images/ghofran.jpg",
            Likedin: "https://www.linkedin.com/in/ghofran-adel-9222a4208/",
            Github: "https://github.com/ghufran-adel",
        },
        {
            name: "Mohamed Aghi",
            description: "Junior Engineer",
            image: "/images/Mohamed.jpg",
            Likedin: "https://www.linkedin.com/in/mohamad-aghi-86852b14b",
            Github: "https://github.com/aghimohamad",
        },
        {
            name: "Kemal Davut",
            description: "Junior Engineer",
            image: "/images/Kemal.jpg",
            Likedin: "https://www.linkedin.com/in/kemal-davut-7096464b/",
            Github: "https://github.com/kemaldavut",
        },
    ],
    [
        {
            name: "Khaled Batur",
            description: "Lead Engineer",
            image: "/images/halit.png",
            Likedin: "https://www.linkedin.com/in/salah-aldhaferi/",
            Github: "/github/name-surname1",
        },
        {
            name: "Ezgi Okur",
            description: "Junior Engineer",
            image: "/images/ezgi.png",
            Likedin: "https://www.linkedin.com/in/amjad-maqsouma-54bb91234/",
            Github: "https://github.com/amjadmak",
        },
        {
            name: "Amjad Alkhatib",
            description: "Junior Engineer",
            image: "/images/amjadkhatib.png",
            Likedin: "https://www.linkedin.com/in/name-surname1/",
            Github: "/github/name-surname1",
        },
        {
            name: "Nilay Aydin",
            description: "Junior Engineer",
            image: "/images/nilay.png",
            Likedin: "https://www.linkedin.com/in/name-surname1/",
            Github: "/github/name-surname1",
        },
        {
            name: "Adnan Khaldar",
            description: "Junior Engineer",
            image: "/images/adnan.png",
            Likedin: "https://www.linkedin.com/in/name-surname1/",
            Github: "/github/name-surname1",
        },
        {
            name: "Noor Aweid",
            description: "Junior Engineer",
            image: "/images/noor.png",
            Likedin: "https://www.linkedin.com/in/name-surname1/",
            Github: "/github/name-surname1",
        },
    ],
];

function OurTeam() {
    const { t } = useTranslation("common");
    return (
        <div className=' my-5 font-primary'>
            <h1 className=' mb-5 py-5 text-center font-head text-4xl font-bold tracking-wider text-fontColor '>
                {t("aboutus.front-end-team")}
            </h1>
            <div className='mx-[7rem]  flex flex-wrap justify-center justify-items-center gap-10'>
                {profiles[0].map((profile, i) => (
                    <div key={i} className=' my-6 w-48 justify-center'>
                        <div className=' h-48 w-48 rounded-full bg-secondary '>
                            <Image
                                className='rounded-full'
                                src={profile.image}
                                alt='Team-member'
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className=' p-2 text-center '>
                            <div className='flex justify-center gap-3 p-2 text-3xl'>
                                <Link href={profile.Likedin}>
                                    <a target='blank'>
                                        <AiFillLinkedin className='cursor-pointer hover:text-fontColor' />
                                    </a>
                                </Link>
                                <Link href={profile.Github}>
                                    <a target='blank'>
                                        <AiFillGithub className='cursor-pointer hover:text-fontColor' />
                                    </a>
                                </Link>
                            </div>
                            <h2 className='my-1 font-bold'>{profile.name}</h2>
                            <p className='text-md'>{profile.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className=' mb-5 mt-10 py-5 text-center font-head text-4xl font-bold tracking-wider text-fontColor '>
                {t("aboutus.back-end-team")}
            </h1>
            <div className='mx-[7rem]  flex flex-wrap justify-center justify-items-center gap-10'>
                {profiles[1].map((profile, i) => (
                    <div key={i} className=' my-6 w-48 justify-center'>
                        <div className=' h-48 w-48 rounded-full bg-secondary '>
                            <Image
                                className='rounded-full'
                                src={profile.image}
                                alt='Team-member'
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
