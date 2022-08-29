import React from "react";

export default function Button(props) {
    const fullfilled = props.fullfilled;
    const outLinedPrimary = props.outLinedPrimary;
    const outLinedSecondary = props.outLinedSecondary;
    const extended = props.extended;
    const handleClick = props.handleClick;
    return (
        <div className='flex justify-center font-primary'>
            <button
            onClick={props.onClick}
                className={
                    fullfilled
                        ? "my-5 h-9 w-[120px] rounded-full bg-primary text-lg text-[white] shadow-md transition duration-200 hover:scale-[105%] hover:bg-secondary hover:shadow-md"
                        : outLinedPrimary
                        ? "my-5 h-9 w-[120px] rounded-full border-2 border-primary text-lg text-primary shadow-md transition duration-300 hover:scale-[105%] hover:border-secondary hover:shadow-md"
                        : outLinedSecondary
                        ? "my-5 h-9 w-[120px] rounded-full border-2 border-secondary text-lg text-secondary shadow-md transition duration-[200] hover:bg-secondary hover:text-[white] hover:shadow-lg"
                        : extended
                        ? "my-5 h-9 w-[80%] rounded-full bg-primary text-lg text-[white] shadow-md md:w-[60%] xl:w-[40%]"
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
