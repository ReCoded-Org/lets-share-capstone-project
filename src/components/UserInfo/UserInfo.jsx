import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { MdCameraAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import Router, { useRouter } from "next/router";
import { auth, db } from "firebaseConfig";
import { async } from "@firebase/util";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useAuth } from "context/AuthContext";

// The props is necessary for the actual data... ***TO BE USED IN THE FUTURE***
const UserInfo = () => {
    const { locale } = useRouter();
    const { t } = useTranslation("common");
    

    const {user } = useAuth()

    const [profile, loading, error] = useDocument(
        doc(db, "users", user?.uid)
       );  

     const profileData = profile?.data()

    //    console.log(auth.currentUser.photoURL);
    // console.log(user.uid );



    // This function should be changed when using real data to REPLACE the image URL located in the server with a NULL IMAGE
    const removeImage = () => {
        // dummyUser.image = "/images/noPicInfo.svg";
    };

    // This function should contain some instructions to UPLOAD the image to the server
    const updateImage = () => {
        // dummyUser.image = "/images/noPicInfo.svg"; //it is just a dummy line to pass ESLINT test
    };
    return (
        <div
            className={` m-3 flex flex-col items-center justify-center font-primary ${
                locale === "ar" ? "md:flex-row-reverse" : "md:flex-row"
            } `}
        >
            <div className='m-4 flex flex-row items-center justify-center md:flex-col '>
                <Image
                    className=' rounded-full p-2 '
                    height='100%'
                    width='100%'
                    src={auth.currentUser?.photoURL}
                    alt='user-image'
                />
                {/* <div className=' flex flex-col justify-center md:flex-row '>
                    {dummyUser.image.includes("noPicInfo") ? null : (
                        <button onClick={removeImage}>
                            <AiOutlineClose className=' m-1 rounded-full text-primary hover:bg-btnBgHover' />
                        </button>
                    )}
                    <button onClick={updateImage}>
                        <MdCameraAlt
                            size={30}
                            className='text-md -translate-x-8 translate-y-8 opacity-60 hover:fill-primary hover:opacity-100 md:translate-x-8 md:-translate-y-8'
                        />
                    </button>
                </div> */}

                <span className='flex justify-center text-center font-semibold '>
                    {profileData?.displayName} {profileData?.surName}
                </span>
            </div>
            <div className='m-4 flex flex-row justify-center rounded-lg bg-[#ffffff] text-sm  md:h-32 md:w-[60%] '>
                <div
                    className={`flex flex-1 flex-col flex-wrap items-start justify-around gap-4 p-3 text-base  ${
                        locale === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"
                    } lg:items-center  `}
                >
                    <span className=' flex flex-col gap-4'>
                        <span className=''>
                            {t("common.name")}: {profileData?.displayName} {profileData?.surName}
                        </span>
                        <span className=''>
                            {t("common.location")}: {profileData?.location}
                        </span>
                    </span>
                    <span className=' flex flex-col gap-4'>
                        <span className=''>
                            {t("common.phone")}: {profileData?.phone}
                        </span>
                        <span className=''>
                            {t("common.email")}: {user.email}
                        </span>
                    </span>
                    {/* <span className='rounded-full border-2 border-solid border-[black] bg-userInfoBg p-2 hover:bg-[#dbdbdb]'>
                        <Link href='/change-password'>
                            <a>{t("profile.changePassword")}</a>
                        </Link>
                    </span> */}
                </div>
                <div className='flex h-[45px] w-[45px] flex-col items-center justify-center rounded-r-lg bg-[#e6e6e6] p-1 hover:bg-[#dbdbdb] md:h-[100%] md:justify-center'>
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
