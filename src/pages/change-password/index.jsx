import React from "react";
import Layout from "@/components/layout/Layout";
import Input from "@/components/input";
import Button from "@/components/button";
import Link from "next/link";
import { useState } from "react";
export default function ChangePassword() {
    const [fields, setFileds] = useState({});
    const handleInputChange = (e) => {
        const { title, value } = e.target;
        setFileds({ ...fields, [title]: value });
    };
    return (
        <div>
            <Layout>
                <div className='text-center text-2xl font-bold text-fontColor'>
                    <h1>Change Password</h1>
                </div>
                <Input
                    title='Current Password'
                    type='password'
                    placeholder='Please write your current Password'
                    value={fields.title}
                    handleChange={handleInputChange}
                />
                <Input
                    title='New Password'
                    type='password'
                    placeholder='At least 8 characters'
                    value={fields.title}
                    handleChange={handleInputChange}
                />
                <Input
                    title='Confirm New Password'
                    type='password'
                    placeholder='Write the password again'
                    value={fields.title}
                    handleChange={handleInputChange}
                />

                <div className='flex justify-center gap-x-10'>
                    {" "}
                    <Button
                        fullfilled='Change my Password'
                        handleClick={
                            null /*There should be a function to handle to the provided data to update the user password */
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
