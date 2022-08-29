import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout/Layout";
import Input from "@/components/input";
import Option from "@/components/option";
import Button from "@/components/button";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

import { useAuth, upload } from "context/AuthContext";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth, db, storage } from "firebaseConfig";
import { useEffect } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}

export default function Signup() {
    const { t } = useTranslation("common");

    const router = useRouter();

    const { user, signup, loading, setLoading } = useAuth();
    const [photo, setPhoto] = useState(null);
    const [photoURL, setPhotoURL] = useState(
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
    );
    // const [loading, setLoading] = useState(false);

    // console.log(auth.currentUser);
    // console.log(loading);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        displayName: "",
        surName: "",
        phone: "",
        location: "",
    });

    const {
        email,
        password,
        confirmPassword,
        displayName,
        surName,
        phone,
        location,
    } = formData;

    function handleChange(e) {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    }

    const handleSubmit = async (e) => {
        console.log(formData);
        e.preventDefault();
        await signup(formData.email, formData.password)
            .then((response) => {
                console.log(response);
                updateProfile(response.user, {
                    displayName: formData.displayName,
                });
                const usersRef = doc(db, "users", response.user.uid);
                const docRef = setDoc(usersRef, {
                    displayName,
                    surName,
                    location,
                    phone,
                    email,
                });
            })
            .then(() => {
                router.push("/");
            });
        const fileRef = ref(storage, email + ".png");
        uploadBytes(fileRef, photo)
            .then(() => getDownloadURL(fileRef))
            .then((url) => {
                updateProfile(auth.currentUser, { photoURL: url });
            })
            .then(() => setLoading(false));
    };

    useEffect(() => {
        if (user?.photoURL) {
            setPhotoURL(user.photoURL);
        }
    }, [user]);

    console.log(auth.currentUser);

    return (
        <Layout>
            <div className='my-8 font-primary'>
                <div className='text-center font-head text-4xl font-semibold tracking-wider text-fontColor'>
                    <h1>{t("common.signUp")}</h1>
                </div>
                <Input
                    formData={formData}
                    setFormData={setFormData}
                    value={formData.displayName}
                    name='displayName'
                    title={t("common.name")}
                    type='text'
                    placeholder={t("common.name")}
                />
                <Input
                    formData={formData}
                    setFormData={setFormData}
                    value={formData.surName}
                    name='surName'
                    title={t("signUp.surname")}
                    type='text'
                    placeholder={t("signUp.surname")}
                />
                <Input
                    formData={formData}
                    setFormData={setFormData}
                    value={formData.email}
                    name='email'
                    title={t("common.email")}
                    type='email'
                    placeholder='mail@example.com'
                />
                <Input
                    formData={formData}
                    setFormData={setFormData}
                    value={formData.password}
                    name='password'
                    title={t("common.password")}
                    type='password'
                    placeholder='at least 8 characters'
                />
                <Input
                    formData={formData}
                    setFormData={setFormData}
                    value={formData.confirmPassword}
                    name='confirmPassword'
                    title={t("common.password2")}
                    type='password'
                    placeholder='at least 8 characters'
                />
                <Input
                    formData={formData}
                    setFormData={setFormData}
                    value={formData.phone}
                    name='phone'
                    title={t("common.phone")}
                    type='tel'
                    placeholder='eg: +901234567890'
                />
                <Option
                    setFormData={setFormData}
                    formData={formData}
                    value={formData.location}
                    name='location'
                    location
                />

                <label className='my-8 mx-auto mb-3 flex h-64 w-[80%] cursor-pointer flex-col items-center justify-center rounded-lg border-0 bg-[white] pl-3 text-lg font-semibold text-fontColor shadow-lg md:w-[60%] xl:w-[40%] '>
                    add a profile picture
                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                        <AiOutlineCloudUpload
                            color='gray'
                            size={50}
                            className='mb-3'
                        />
                        <p className='mb-2 text-sm text-fontColor'>
                            <span className='font-semibold'>
                                Click to upload
                            </span>{" "}
                            or{" "}
                            <span className='font-semibold'>drag and drop</span>
                        </p>
                        <p className='text-xs text-fontColor'>
                            SVG, PNG, JPG or GIF (MAX. 800x600px)
                        </p>
                    </div>
                    <input
                        onChange={handleChange}
                        type='file'
                        multiple='multiple'
                        className=' w-40 font-primary text-sm text-[#8d8d8d] file:hidden focus:outline-none focus:ring-0 '
                    />
                </label>

                <Button
                    onClick={handleSubmit}
                    fullfilled={t("signUp.button")}
                />
                <div className='mt-5 mb-10 flex flex-col items-center text-center'>
                    <h3 className='mb-1 text-lg'>{t("signUp.with")}</h3>
                    <div className='my-5 flex gap-5'>
                        <a href='#'>
                            <FaFacebookSquare
                                size={35}
                                color='#33956D'
                                className=' transition duration-200 hover:fill-secondary'
                            />
                        </a>
                        <a href='#'>
                            <FaGoogle
                                size={35}
                                color='#33956D'
                                className=' transition duration-200 hover:fill-secondary'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
