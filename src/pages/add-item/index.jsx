import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout/Layout";
import Option from "@/components/option";

import React, { useState } from "react";

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

    return (
        <>
            <Layout>
                <h1 className='text-center text-2xl font-bold text-fontColor'>
                    Add Item
                </h1>
                <form className='mb-12'>
                    <Input
                        
                        setFormData={setFormData}
                        formData={formData}
                        name='title'
                        type='text'
                        title='Title'
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

                    <div className='my-7 flex justify-center'>
                        <div className='flex w-[80%] flex-col items-start justify-center md:w-[60%] xl:w-[40%]'>
                            <label className='mb-3 pl-3 text-xl font-semibold text-fontColor'>
                                Description
                            </label>
                            <textArea
                                placeholder='Enter Description'
                                className='h-40 w-full rounded-lg border-2 border-primary shadow-md'
                                
                            />
                        </div>
                    </div>
                    <Input
                    
                    setFormData={setFormData}
                    formData={formData}
                    
                    name='images'
                        type='file'
                        title='Upload Photos'
                        placeholder='Upload Image'
                    />
                    <div className='flex flex-row justify-evenly'>
                        <Button fullfilled='Confirm' onclick={handleSubmit} />
                        <Button outLinedPrimary='cancel' />
                    </div>
                </form>
            </Layout>
        </>
    );
}

export default Index;
