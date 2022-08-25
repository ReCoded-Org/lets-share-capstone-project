import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
    
    const items = [
        { id: 1, title: "Product Title", image: "/images/item pic.png" },
        { id: 2, title: "Product Title", image: "/images/item pic.png" },
        { id: 3, title: "Product Title", image: "/images/item pic.png" },
    ];
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "firebaseConfig";
import { useEffect } from "react";
import { useState } from "react";





export const getStaticProps = async () => {
    let items = []

    
    
    const querySnapshot = await getDocs(collection(db, auth.currentUser.uid ));
    querySnapshot.forEach((doc) => {
        items.push("fg")
// doc.data() is never undefined for query doc snapshots
console.log(doc.id, " => ", doc.data());
console.log("hello");
    });

    return {
        props: {
            items
        }
    }
}




function MyItems() {
    const { t } = useTranslation();

    const [items , setItems] = useState([])

    useEffect (() => {
        const getItems = async () => {
            let itemss = []
    
        const querySnapshot = await getDocs(collection(db, auth.currentUser.uid ));
        querySnapshot.forEach((doc) => {
            setItems((items) => [...items, doc.data()])
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    console.log("hello");
        });
        }
        getItems()
    }, [])



    console.log(items);
    // const items = [
    //     { id: 1, title: "Product Title", image: "/images/item pic.png" },
    //     { id: 2, title: "Product Title", image: "/images/item pic.png" },
    //     { id: 3, title: "Product Title", image: "/images/item pic.png" },
    // ];
    return (
        <>
            <div className='my-12 flex flex-col items-center'>
                <h1 className='mb-10 font-head text-3xl font-semibold tracking-wider text-fontColor'>
                    {t("profile.myItems")}
                </h1>
                { items.map((item) => (
                    <div
                        key={item.id}
                        className='mb-6 flex w-9/12 flex-row items-center justify-between rounded-full bg-[#ffffff] py-1 px-2'
                    >
                        <Image
                            src={item.itemImage ? item.itemImage : "/Photo.png"}
                            alt={item.title}
                            width={60}
                            height={60}
                            className=' h-8 w-8 rounded-full'
                        />
                        <Link href={`items/${item.id}`}>
                            <div className='min-w-0 flex-1'>
                                <h3 className='px-2   text-lg text-fontColor hover:-mt-2 hover:cursor-pointer md:px-4 md:py-4 md:text-xl xl:px-4 xl:py-4 xl:text-xl'>
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                        <div className='mx-4 inline-flex items-center '>
                            <Link href='/add-item'>
                                <div className='hover:-mt-2 hover:cursor-pointer'>
                                    <Image
                                        src='/images/IconEdit.png'
                                        alt='Edit'
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </Link>
                            <Link href='#'>
                                <div className='ml-8 hover:-mt-2 hover:cursor-pointer'>
                                    <Image
                                        src='/images/IconDelete.png'
                                        alt='Delete'
                                        width={20}
                                        height={25}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MyItems;
