import React from "react";

export default function Input(props) {
    const title = props.title;
    const name = props.name;
    const email = props.email;
    const password = props.password;
    const phone = props.phone;

    return (
        <div className='my-7 flex justify-center'>
            <div className='flex w-[80%] flex-col items-start justify-center md:w-[60%] xl:w-[40%]'>
                <label className='mb-3 pl-3 text-xl font-semibold text-fontColor'>
                    {title
                        ? "Title"
                        : name
                        ? "Name"
                        : email
                        ? "Email"
                        : password
                        ? "Password"
                        : phone
                        ? "Phone"
                        : "title"}
                </label>
                <input
                    type={
                        title
                            ? "text"
                            : name
                            ? "text"
                            : email
                            ? "email"
                            : password
                            ? "password"
                            : phone
                            ? "tel"
                            : "text"
                    }
                    placeholder={
                        title
                            ? "Title"
                            : name
                            ? "Name"
                            : email
                            ? "Email"
                            : password
                            ? "Password"
                            : phone
                            ? "Phone"
                            : "title"
                    }
                    name={
                        title
                            ? "text"
                            : name
                            ? "text"
                            : email
                            ? "email"
                            : password
                            ? "password"
                            : phone
                            ? "phone"
                            : "text"
                    }
                    className='w-full rounded-lg border-2 border-primary shadow-md'
                />
            </div>
        </div>
    );
}
