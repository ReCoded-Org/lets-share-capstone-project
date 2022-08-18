import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { useTranslation } from "next-i18next";
import { MdModeEdit } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
// The props is necessary for the actual data... ***TO BE USED IN THE FUTURE***
const UserInfo = () => {
    //  ***to be removed later, FOR TEST PURPOSES ONLY***
    const dummyUser = {
        name: "John Doe",
        lang: "En",
        email: "blabla@example.com",
        location: "Kocaeli",
        phone: "01234567890",
        image: "/images/noPicInfo.svg",
    };

    // This function should be changed when using real data to REPLACE the image URL located in the server with a NULL IMAGE
    const removeImage = () => {
        dummyUser.image = "/images/noPicInfo.svg";
    };

    // This function should contain some instructions to UPLOAD the image to the server
    const updateImage = () => {
        dummyUser.image = "/images/noPicInfo.svg"; //it is just a dummy line to pass ESLINT test
    };
    return (
        <div className='m-3 flex flex-col items-center justify-center md:flex-row '>
            <div className='m-4 flex flex-row items-center justify-center md:flex-col '>
                <Image
                    className=' rounded-full p-2 '
                    height='100%'
                    width='100%'
                    src={dummyUser.image}
                    alt='user-image'
                />
                <div className=' flex flex-col justify-center md:flex-row '>
                    {dummyUser.image.includes("noPicInfo") ? null : (
                        <button onClick={removeImage}>
                            <AiOutlineClose className=' m-1 rounded-full text-primary hover:bg-btnBgHover' />
                        </button>
                    )}
                    <button onClick={updateImage}>
                        <MdModeEdit className='text-md m-1 rounded-full text-primary hover:bg-btnBgHover' />
                    </button>
                </div>

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
                    <Link href='/edit-profile'>
                        <a>
                            <Image
                                src='/images/editInfo.svg'
                                width={30}
                                height={30}
                                alt='edit-icon'
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

/*
// This function is to bring the user data from the server ***FOR FUTURE USE***
export const getStaticProps = async () => {

    // const fetchUser = await fetch('API GOES HERE');
    // const userData = await fetchUser.json();
 return {
    //  props: {userData},
    revalidate: 10,
 }
 }
 */
export default UserInfo;
