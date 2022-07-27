import React, { useState } from "react";

export default function Input({ title, type, placeholder }) {
    const [value, setValue] = useState("");
    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className='my-7 flex justify-center'>
            <div className='flex w-[80%] flex-col items-start justify-center md:w-[60%] xl:w-[40%]'>
                <label className='mb-3 pl-3 text-xl font-semibold text-fontColor'>
                    {title}
                </label>
                <input
                    type={type}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className='w-full rounded-lg border-2 border-primary shadow-md'
                />
            </div>
        </div>
    );
}
