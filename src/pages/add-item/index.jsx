import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout/Layout";
import Option from "@/components/option";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AiOutlineCloudUpload } from "react-icons/ai";

import React, { useState } from "react";


export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}

function Index() {


    const [formData, setFormData] = useState({});
  


    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

            
    }




    const { t } = useTranslation("common");


    return (
        <>
            <Layout>
                <h1 className='mt-8 text-center font-head text-4xl font-bold tracking-wider text-fontColor'>
                    {t("addItem.addItem")}
                </h1>
                <div className='mb-12 grid '>
                    <Input
                        
                        setFormData={setFormData}
                        formData={formData}
                        name='title'
                        type='text'
                        title={t("addItem.title")}
                        placeholder='Enter Title'
                    />
                    <Option location='Location'
                    
                    setFormData={setFormData}
                    formData={formData}
                    
                    name='location'

                    />
                    <Option category='Category'
                    
                    setFormData={setFormData}
                    formData={formData}
                    
                    name='category'
                    
                    />

                    <div className='my-7 flex justify-center font-primary tracking-wider'>
                        <div className='flex w-[80%] flex-col items-start justify-center md:w-[60%] xl:w-[40%]'>
                            <label className='mb-3 pl-3 text-lg font-semibold text-fontColor'>
                                {t("addItem.description")}
                            </label>
                            <textArea
                                placeholder='Enter Description'

                                className='h-40 w-full rounded-lg border-0 shadow-lg'                            />
                        </div>
                    </div>
                    {/* <div className="">
                    <Input
                    
                    setFormData={setFormData}
                    formData={formData}
                    
                    name='images'
                        type='file'
                        title={t("addItem.uploadPhotos")}
                        placeholder='Upload Image'
                    />

                    </div> */}

                    <div className=' my-7 flex w-[80%] flex-col items-start justify-self-center md:w-[60%] xl:w-[40%]'>
                        <h2 className='mb-3 pl-3 font-primary text-lg font-semibold text-fontColor'>
                            {t("addItem.uploadPhotos")}
                        </h2>
                        <label className='flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-0 bg-[white] shadow-lg '>
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
                                    <span className='font-semibold'>
                                        drag and drop
                                    </span>
                                </p>
                                <p className='text-xs text-fontColor'>
                                    SVG, PNG, JPG or GIF (MAX. 800x600px)
                                </p>
                            </div>
                            <input
                                type='file'
                                multiple='multiple'
                                className=' w-40 font-primary text-sm text-[#8d8d8d] file:hidden focus:outline-none focus:ring-0 '
                            />
                        </label>

                    </div>

                    <div className=' flex w-[70%] flex-row justify-between justify-self-center md:w-[50%] xl:w-[35%]'>
                        <Button fullfilled={t("common.confirm")} />
                        <Button outLinedPrimary={t("common.cancel")} />
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Index;
