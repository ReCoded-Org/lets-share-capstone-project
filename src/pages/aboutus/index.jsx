import React from "react";
import OurTeam from "@/components/OurTeam";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

export default function Aboutus() {
    return (
        <Layout>
            <div className='mt-[20px] flex flex-col items-center px-5 md:ml-20 md:h-[60vh] md:flex-row  '>
                <div className=' relative flex h-[30rem] w-full flex-row items-center md:order-1  '>
                    <Image
                        src='/puzzels.svg'
                        layout='fill'
                        objectFit='contain'
                        alt='/'
                    />
                </div>
                <div className='relative mx-10  my-[30px] flex   h-[341px] w-[60%] flex-col items-center justify-center text-center md:items-start'>
                    <h2 className='text-2xl font-bold text-fontColor'>
                        Who we are
                    </h2>
                    <p className='text-2xll mb-8 py-5 sm:w-[100%] md:text-left md:text-xl'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugiat, iusto sed alias obcaecati veniam cumque
                        nesciunt sint, possimus, adipisci animi mollitia quam?
                        Pariatur, consequatur? Saepe illum mollitia repellendus
                        quod perferendis? consectetur adipisicing elit. Fugiat,
                        iusto sed alias obcaecati veniam cumque
                    </p>
                </div>
            </div>
            <OurTeam />
        </Layout>
    );
}
