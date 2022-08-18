import React from "react";

function Card({ cat, setFilterParam }) {
    return (
        <>
            <div
                onClick={() => setFilterParam(cat)}
                className='group mx-auto flex h-fit w-fit cursor-pointer flex-col items-center justify-between rounded-lg p-4 text-center  shadow-xl hover:animate-bounce '
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 '
                    fill='#F07167'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'
                    />
                </svg>

                <span className='mt-4 font-bold text-primary'>{cat}</span>
            </div>
        </>
    );
}

export default Card;
