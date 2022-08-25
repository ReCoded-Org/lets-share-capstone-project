import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout/Layout";
import Input from "@/components/input";
import Option from "@/components/option";
import Button from "@/components/button";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

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
    return (
        <Layout>
            <div className='my-8 font-primary'>
                <div className='text-center font-head text-4xl font-semibold tracking-wider text-fontColor'>
                    <h1>{t("common.signUp")}</h1>
                </div>
                <Input
                    title={t("common.name")}
                    type='text'
                    placeholder={t("common.name")}
                />
                <Input
                    title={t("signUp.surname")}
                    type='text'
                    placeholder={t("signUp.surname")}
                />
                <Input
                    title={t("common.email")}
                    type='email'
                    placeholder='mail@example.com'
                />
                <Input
                    title={t("common.password")}
                    type='password'
                    placeholder='at least 8 characters'
                />
                <Input
                    title={t("common.password2")}
                    type='password'
                    placeholder='at least 8 characters'
                />
                <Input
                    title={t("common.phone")}
                    type='tel'
                    placeholder='eg: +901234567890'
                />
                <Option location />
                <Button fullfilled={t("signUp.button")} />
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
