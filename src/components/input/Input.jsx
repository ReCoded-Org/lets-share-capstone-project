import React from "react";

export default function Input({
    title,
    name,
    value,
    type,
    placeholder,
    setFormData,
    formData,
}) {
    // const [value, setValue] = useState("");
    function handleChange(e) {
        // setValue(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className='my-7 flex justify-center font-primary tracking-wider'>
            <div className='flex w-[80%] flex-col items-start justify-center md:w-[60%] xl:w-[40%]'>
                <label className='mb-3 pl-3 text-lg font-semibold text-fontColor'>
                    {title}
                </label>
                <input
                    title={title}
                    type={type}
                    value={value}
                    name={name}
                    onChange={handleChange}
                    placeholder={placeholder}
                    multiple={type === "file"}
                    className='form-control h-10 w-full rounded-lg border-0 bg-[white] bg-clip-padding shadow-lg'
                />
            </div>
        </div>
    );
}
