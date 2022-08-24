import * as React from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookSquare} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export default function login() {
    const axios = require('axios');
    const [loginData, setLoginData] = useState({});
    const handleInputChange = (e) => {
        const { type, value } = e.target;
        setLoginData({ ...loginData, [type]: value });
    };
     const  handleLogin = async () => {
        axios.post('https://lets-share-capstone.herokuapp.com/api/auth/login', {

        email: 'amjad.maksuma@gmail.com' /*loginData.email*/,
        password: 'Nilay-123' /*loginData.password*/ },{ withCredentials: true})
        .catch(err => {alert("Please Check the email and password again") }).then( res =>  {console.log(res)})

    
}

const  logout = async () => {
    axios.post('https://lets-share-capstone.herokuapp.com/api/auth/logout', { withCredentials: true})
    .catch(err => {alert("Please Check the email and password again") }).then( res =>  {console.log(res)})


}

    return (
        <Layout>
            {/*main section*/}
            <div className='flex flex-col items-center p-2 md:flex-row  '>
                {/*left section*/}
                <button onClick={logout}> logout</button>
                <div className='flex w-1/2 flex-col items-center p-2'>
                    <div
                        id='leftcontainer'
                        className=' items-center text-fontColor'
                    >
                        <h1 className=' text-center text-2xl  font-bold  '>
                            Login
                        </h1>
                        <p className='py-1 '>Email</p>
                        <input
                            className=' w-72 rounded-lg  border-2  border-primary sm:w-96'
                            type='email'
                            placeholder='Email'
                            onChange={handleInputChange}
                        />
                        <p className='py-1'>Password</p>
                        <input
                            className=' w-72 rounded-lg  border-2 border-primary sm:w-96'
                            type='password'
                            placeholder='Password'
                            onChange={handleInputChange}
                        />
                        <div className='py-2'>
                            <label className='  text-s '>
                                <input
                                    type='checkbox'
                                    className='mr-1 rounded'
                                />
                                Remember me
                            </label>
                        </div>

                        <button onClick={handleLogin} className='w-72 rounded-lg border-2 border-primary bg-primary p-2 hover:text-[white] sm:w-96'>
                            Log in
                        </button>
                        <div className=' py-2 text-center '>
                            <p>
                                Dont have an account{" "}
                                <a
                                    className=' p-2 underline underline-offset-4'
                                    href='/signup'
                                >
                                    sign up
                                </a>
                            </p>
                            <a
                                className=' underline underline-offset-4'
                                href='#'
                            >
                                Forget Password
                            </a>
                        </div>

                        <div className='text-md text-center font-bold '>
                            <h1>Log in with </h1>
                        </div>

                        <div className=' hover:text-text-fontColor flex flex-row items-center justify-center gap-1 p-1 text-2xl  '>
                            <a href='#'>
                                <FaFacebookSquare
                                    color='#4867aa'
                                    className=' cursor-pointer'
                                />
                            </a>
                            <a href='#'>
                                <FcGoogle
                                    className='cursor-pointer'
                                />
                            </a>

                        </div>
                    </div>
                </div>
                {/*right section*/}
                <div
                    id='rightcontaier'
                    className=' relative flex h-[500px] w-1/2 p-5  '
                >
                    <Image
                        className=' justify-end'
                        src='/images/login-photo.svg'
                        layout='fill'
                        objectFit='fill'
                        alt='/'
                    />
                </div>
            </div>
        </Layout>
    );
}

