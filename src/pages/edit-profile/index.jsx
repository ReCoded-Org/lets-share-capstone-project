import React from "react";
import Layout from "@/components/layout/Layout";
import Input from "@/components/input";
import Option from "@/components/option";
import Button from "@/components/button";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
    const [updateForm, setUpdateForm] = useState({
        /* here, we have to put the default values of user's info "userData" */
    });
    const handleInputChange = (e) => {
        const { title, value } = e.target;
        setUpdateForm({ ...updateForm, [title]: value });
    };
    return (
        <Layout>
            <div className='my-10'>
                <div className='text-center font-head text-4xl font-semibold tracking-wider text-fontColor'>
                    <h1>{t("common.update")}</h1>
                </div>
                <Input
                    title={t("common.firstName")}
                    type='text'
                    placeholder={`${t("common.firstName")}`}
                    value={updateForm.title}
                    handleChange={handleInputChange}
                />
                <Input
                    title={t("common.lastName")}
                    type='text'
                    placeholder={`${t("signUp.surname")}`}
                    value={updateForm.title}
                    handleChange={handleInputChange}
                />
                <Input
                    title={t("common.email")}
                    type='email'
                    placeholder='mail@mail.com'
                    value={updateForm.title}
                    handleChange={handleInputChange}
                />
                <Input
                    title={t("common.phone")}
                    type='tel'
                    placeholder='eg:0011223344'
                    value={updateForm.title}
                    handleChange={handleInputChange}
                />
                <Option
                    location
                    value={updateForm.title}
                    handleChange={handleInputChange}
                />
                <div className='flex justify-center gap-x-10'>
                    {" "}
                    <Button
                        fullfilled='Apply'
                        handleClick={
                            null /*There should be a function to handle to the provided data to update the user info */
                        }
                    />
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
/*
This function is to bring the user data from the server ***FOR FUTURE USE***
export const getStaticProps = async () => {

    const fetchUser = await fetch('API GOES HERE');
    const userData = await fetchUser.json();
 return {
     props: {userData}
 }
 }
 */
