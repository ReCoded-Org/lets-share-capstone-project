import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Input from "@/components/input";
import Option from "@/components/option";
import Button from "@/components/button";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { db } from "firebaseConfig";
// import { async } from "@firebase/util";
import { doc, getDoc, setDoc } from "firebase/firestore";
// import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useAuth } from "context/AuthContext";
// import { Router } from "next/router";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}

export default function EditProfile(/*{ userData }*/) {
    const { t } = useTranslation("common");

    const { user } = useAuth();

    const [formData, setFormData] = useState({
        displayName: "",
        surName: "",
        phone: "",
        location: "",
    });

    const [loading, setLoading] = useState(true);

    // const [profile, error] = useDocument(
    //     doc(db, "users", user.uid)
    //    );

    //    let info = profile?.data()

    useEffect(() => {
        const update = async () => {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            let data = docSnap.data();
            if (data) {
                setFormData(data);
                loading;
            }

            setLoading(false);
        };

        // setFormData({
        //     displayName : profile?.data().displayName,
        //     surName : profile?.data().surName,
        //     phone : profile?.data().phone,
        //     location : profile?.data().location
        // })
        update();
    }, [loading, user.uid]);

    //    console.log(info);

    // console.log(formData.displayName);

    // const handleInputChange = (e) => {
    //     const { title, value } = e.target;
    //     setUpdateForm({ ...formData, [title]: value });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await setDoc(doc(db, "users", user.uid), {
            displayName: formData.displayName,
            surName: formData.surName,
            phone: formData.phone,
            location: formData.location,
        }).then(() => {
            window.location.href = "/my-profile";
        });
    };

    return (
        <Layout>
            {/* {!loading && formData.displayName} */}
            <div className='my-10'>
                <div className='text-center font-head text-4xl font-semibold tracking-wider text-fontColor'>
                    <h1>{t("common.update")}</h1>
                </div>
                <Input
                    title={t("common.firstName")}
                    type='text'
                    placeholder={`${t("common.firstName")}`}
                    name='displayName'
                    formData={formData}
                    value={formData.displayName}
                    setFormData={setFormData}
                />
                <Input
                    title={t("common.lastName")}
                    type='text'
                    placeholder={`${t("signUp.surname")}`}
                    name='surName'
                    formData={formData}
                    setFormData={setFormData}
                    value={formData.surName}
                />

                <Input
                    title={t("common.phone")}
                    type='tel'
                    placeholder='eg:0011223344'
                    name='phone'
                    formData={formData}
                    setFormData={setFormData}
                    value={formData.phone}
                />
                <Option
                    location
                    name='location'
                    formData={formData}
                    setFormData={setFormData}
                    value={formData.location}
                />
                <div className='flex justify-center gap-x-10'>
                    {" "}
                    <Button fullfilled='Apply' onClick={handleSubmit} />
                    <Link href='/my-profile'>
                        <a>
                            <Button fullfilled='Cancel' />
                        </a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
