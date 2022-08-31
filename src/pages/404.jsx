import * as React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
export default function NotFoundPage() {
    return (
        <Layout>
            <div
                className='
    flex
    h-screen
    w-screen
    items-center
    justify-center
   
  '
            >
                <div className='bg-white rounded-md bg-[#dddddda2] px-40 py-16 shadow-2xl'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-9xl font-bold text-[#33956D]'>
                            404
                        </h1>

                        <h6 className='mb-2 text-center text-2xl font-bold text-primary md:text-3xl'>
                            <span className='text-[#ff0000b3]'>Oops!</span> Page
                            not found
                        </h6>

                        <p className='text-gray-500 mb-8 text-center md:text-lg'>
                            The page you&apos;re looking for isn&apos;t exist.
                        </p>

                        <Link href='/'>
                            <a className='rounded-md bg-[#0000ff55] px-6 py-2 text-sm font-semibold text-[#1a1a58d5]'>
                                Go home
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
