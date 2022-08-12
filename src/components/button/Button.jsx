import React from "react";

export default function Button(props) {
    const fullfilled = props.fullfilled;
    const outLinedPrimary = props.outLinedPrimary;
    const outLinedSecondary = props.outLinedSecondary;
    const extended = props.extended;
    return (
        <div className='flex justify-center'>
            <button
            onClick={props.onclick}
                className={
                    fullfilled
                        ? "my-5 h-9 w-[120px] rounded-full bg-primary text-xl font-semibold text-[white] shadow-md"
                        : outLinedPrimary
                        ? "my-5 h-9 w-[120px] rounded-full border-2 border-primary text-xl font-semibold text-primary shadow-md"
                        : outLinedSecondary
                        ? "my-5 h-9 w-[120px] rounded-full border-2 border-secondary text-xl font-semibold text-secondary shadow-md"
                        : extended
                        ? "my-5 h-9 w-[80%] rounded-full bg-primary text-xl font-semibold text-[white] shadow-md md:w-[60%] xl:w-[40%]"
                        : null
                }
            >
                {fullfilled
                    ? fullfilled
                    : outLinedPrimary
                    ? outLinedPrimary
                    : outLinedSecondary
                    ? outLinedSecondary
                    : extended
                    ? extended
                    : null}
            </button>
        </div>
    );
}
