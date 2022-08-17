import React from "react";
import Layout from "@/components/layout/Layout";
import Input from "@/components/input";
import Option from "@/components/option";
import Button from "@/components/button";
import Link from "next/link";
import { useState } from "react";
export default function EditProfile(/*{ userData }*/) {
    const [updateForm, setUpdateForm] = useState({
        /* here, we have to put the default values of user's info "userData" */
    });
    const handleInputChange = (e) => {
        const { title, value } = e.target;
        setUpdateForm({ ...updateForm, [title]: value });
    };
    return (
        <div>
            <Layout>
                <div className='text-center text-2xl font-bold text-fontColor'>
                    <h1>Update profile</h1>
                </div>
                <Input
                    title='Name'
                    type='text'
                    placeholder='Name Surename'
                    value={updateForm.title}
                    handleChange={handleInputChange}
                />
                <Input
                    title='Email'
                    type='email'
                    placeholder='mail@mail.com'
                    value={updateForm.title}
                    handleChange={handleInputChange}
                />
                <Input
                    title='Password'
                    type='password'
                    placeholder='at least 8 characters'
                    value={updateForm.title}
                    handleChange={handleInputChange}
                />
                <Input
                    title='Confirm Password'
                    type='password'
                    placeholder='at least 8 characters'
                    value={updateForm.title}
                    handleChange={handleInputChange}
                />
                <Input
                    title='Phone'
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
                <Option
                    lang
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
            </Layout>
        </div>
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
