import Layout from "@/components/layout/Layout";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HiLocationMarker, HiUserCircle } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";

import PopularItemCard from "@/components/PopularItemsCard";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "firebaseConfig";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { BsListStars } from "react-icons/bs";
import { useAuth } from "context/AuthContext";
import { auth } from "firebaseConfig";

export async function getStaticPaths({ locales }) {
    let itemss = [];
    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach((doc) => {
        itemss.push(doc.id);
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });

    // let items = Object.keys(itemss)

    const paths = itemss.map((id) => {
        return {
            params: { id: id.toString() },
        };
    });
    console.log(paths);
    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps({ params, locale }) {
    console.log(params);
    const docRef = doc(db, "items", params.id);
    const itema = await getDoc(docRef);
    console.log({ I: itema.data() });

    return {
        props: {
            item: itema.data(),
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}

function Item({ item, items }) {
    console.log(item.user);
    const { t } = useTranslation("common");

    const { profile } = useAuth();

    const [user, setUser] = useState({});

    useEffect(() => {
        const update = async () => {
            const docRef = doc(db, "users", item.user);
            const docSnap = await getDoc(docRef);
            let data = docSnap.data();
            console.log(data);
            setUser(data);
        };
        update();
    }, []);

    const [list, loading, error] = useCollection(
        query(collection(db, "items"))
    );

    console.log(user);

    const settings = {
        customPaging: function () {
            return (
                <a className=''>
                    <Image
                        src={item.itemImage}
                        width={100}
                        height={80}
                        className=''
                        alt='thumb'
                    />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots  ",
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        fadeSpeed: 1000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const images = [item.itemImage, item.itemImage, item.itemImage];

    return (
        <Layout>
            <div className='mx-auto my-10 flex w-[80%] flex-col  font-primary md:w-[90%]'>
                <div className='flex flex-col items-center md:flex-row md:items-start md:space-x-8 xl:space-x-14'>
                    <div className=' '>
                        <div className='w-[290px] sm:w-[350px] xl:w-[500px] 2xl:w-[650px]'>
                            <Slider {...settings}>
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className=' h-[180px] sm:h-[217px] xl:h-[320px] 2xl:h-[403px]'
                                    >
                                        <Image
                                            src={image}
                                            layout='fill'
                                            alt='item'
                                            className=' object-conver inset-0 mx-auto rounded-2xl'
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className=' mt-5 max-w-2xl p-5 text-left text-fontColor md:mt-0 '>
                        <div className=' mb-5'>
                            <h1 className='mb-5 text-lg font-bold lg:text-xl'>
                                {item.title}
                            </h1>
                            <p className='text-md md:mb-12'>
                                {item.description}
                            </p>
                        </div>
                        <div className='flex items-center justify-start gap-20 '>
                            <div className=' flex flex-col justify-between gap-4 '>
                                <div className=''>
                                    <HiLocationMarker
                                        color='#F07167'
                                        size={25}
                                    />
                                    <p>{item.location}</p>
                                </div>
                                <div>
                                    <FiShoppingBag color='#F07167' size={25} />
                                    {item.category}
                                </div>
                            </div>
                            <div className='flex flex-col '>
                                <div className='flex  justify-between'>
                                    <HiUserCircle color='#F07167' size={25} />
                                </div>
                                <div className='flex flex-col gap-2 break-all'>
                                    <p>
                                        {user.displayName} {user.surName}
                                    </p>
                                    <p className=''>{user.email}</p>
                                    <p>{user.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 flex flex-col items-center'>
                    <h1 className='mt-5 font-head text-3xl font-semibold tracking-wider text-fontColor'>
                        {t("item.related")}
                    </h1>
                    <div className='mx-auto mt-10 mb-10 grid grid-cols-1 gap-5 text-center sm:grid-cols-2 md:text-left lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 xl:gap-16 2xl:grid-cols-5'>
                        {list?.docs.slice(0, 5).map((item) => (
                            <PopularItemCard item={item.data()} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Item;
