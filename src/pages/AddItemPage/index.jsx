import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout/Layout";
import Option from "@/components/option";

import React from "react";

function index() {
    return (
        <>
            <Layout>
                <h1 className='text-center text-2xl font-bold text-fontColor'>
                    Add Item
                </h1>
                <form className='mb-12'>
                    <Button />
                    <Input
                        type='text'
                        title='Title'
                        placeholder='Enter Title'
                    />
                    <Option location='Location' />
                    <Option category='Category' />

                    <div className='my-7 flex justify-center'>
                        <div className='flex w-[80%] flex-col items-start justify-center md:w-[60%] xl:w-[40%]'>
                            <label className='mb-3 pl-3 text-xl font-semibold text-fontColor'>
                                Description
                            </label>
                            <input
                                type='text'
                                placeholder='Enter Description'
                                className='h-40 w-full rounded-lg border-2 border-primary shadow-md'
                            />
                        </div>
                    </div>
                    <Input
                        type='file'
                        title='Upload Photos'
                        placeholder='Upload Image'
                    />
                    <div className='flex flex-row justify-evenly'>
                        <Button fullfilled='Confirm' />
                        <Button outLinedPrimary='Cancle' />
                    </div>
                </form>
            </Layout>
        </>
    );
}

export default index;
