import React from "react";
import Layout from "@/components/layout/Layout";
import Input from "@/components/input";
import Option from "@/components/option";
import Button from "@/components/button";
import { FaFacebookSquare, FaGoogle, FaLinkedin } from "react-icons/fa";

export default function Signup() {
    return (
        <div>
            <Layout>
                <div className='text-center text-2xl font-bold text-fontColor'>
                    <h1>Sign up</h1>
                </div>
                <Input title='Name' type='text' placeholder='Name Surename' />
                <Input title='Email' type='email' placeholder='mail@mail.com' />
                <Input
                    title='Password'
                    type='password'
                    placeholder='at least 8 characters'
                />
                <Input
                    title='Confirm Password'
                    type='password'
                    placeholder='at least 8 characters'
                />
                <Input title='Phone' type='tel' placeholder='eg:0011223344' />
                <Option location />
                <Button fullfilled='Sign up' />
                <div className='mt-8 mb-10 flex flex-col items-center text-center'>
                    <h3 className='mb-3 text-xl'>sign up with</h3>
                    <div className='my-5 flex gap-5'>
                        <a href='#'>
                            <FaFacebookSquare size={35} color='#33956D' />
                        </a>
                        <a href='#'>
                            <FaGoogle size={35} color='#33956D' />
                        </a>
                        <a href='#'>
                            <FaLinkedin size={35} color='#33956D' />
                        </a>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
