import * as React from "react";
// import { useState } from "react";
import Layout from "@/components/layout/Layout";
import UserInfo from "@/components/UserInfo";
import MyItems from "@/components/MyItems";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { auth } from "firebaseConfig";
// import { useTranslation } from "react-i18next";
const ProfileInfo = () => {
    return (
        <Layout>
            <UserInfo />
            <MyItems />
        </Layout>
    );
};
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}

export default ProfileInfo;
