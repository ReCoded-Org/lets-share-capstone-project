import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

// The props is necessary for the actual data... ***TO BE USED IN THE FUTURE***
const UserInfo = ({ userInfo }) => {
    //  ***to be removed later, FOR TEST PURPOSES ONLY***
    const dummyUser = {
        name: "John Doe",
        lang: "En",
        email: "blabla@example.com",
        location: "Kocaeli",
        phone: "01234567890",
        image: "/images/noPicInfo.svg",
    };

    return (
        <div className='m-3 flex flex-col items-center justify-center md:flex-row '>
            <div className='m-4 flex flex-row items-center justify-center md:flex-col '>
                <Image
                    className=' rounded-full p-2 '
                    height={"100%"}
                    width={"100%"}
                    src={dummyUser.image}
                />
                <span className=' m-1 flex justify-center p-1 text-center '>
                    {dummyUser.name}
                    <br />
                    {dummyUser.location}
                </span>
            </div>
            <div className='m-4 flex   flex-row justify-center rounded-lg bg-userInfoBg text-sm  md:h-28 md:w-[60%] '>
                <div className=' flex  flex-1 flex-col flex-wrap items-start justify-around p-3 md:flex-row md:items-center  '>
                    <span className=' flex flex-col '>
                        <span className='mb-1 md:mb-2'>
                            Name: {dummyUser.name}
                        </span>
                        <span className='mb-1 md:mb-2'>
                            Location: {dummyUser.location}
                        </span>
                    </span>
                    <span className=' flex flex-col'>
                        <span className='mb-1 md:mb-2'>
                            Phone: {dummyUser.phone}
                        </span>
                        <span className='mb-1 md:mb-2'>
                            Email: {dummyUser.email}
                        </span>
                    </span>
                    <span>Language: {dummyUser.lang}</span>
                </div>
                <div className='flex h-[35px] flex-col p-1 hover:rounded-lg hover:bg-[#e8e8e8] md:h-[100%] md:justify-center'>
                    <Link href={"/editUser"}>
                        <a>
                            <Image
                                src={"/images/editInfo.svg"}
                                width={30}
                                height={30}
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default UserInfo;
