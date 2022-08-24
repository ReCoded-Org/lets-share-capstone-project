import React from "react";
import { FaChair } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { FcElectronics, FcAcceptDatabase } from "react-icons/fc";
import { BiCategory } from "react-icons/bi";

function Card({ cat, setFilterParam }) {
    return (
        <>
            <div
                onClick={() => setFilterParam(cat)}
                className='group mx-auto flex h-28 w-24 cursor-pointer flex-col items-center justify-around rounded-xl bg-[white] p-4 text-center text-sm shadow-md hover:scale-[102%] hover:bg-[#f3f3f3] hover:shadow-xl active:bg-[#f3f3f3] md:h-40 md:w-36  md:text-base '
            >
                {cat == "All" ? (
                    <FcAcceptDatabase color='#F07167' size={40} />
                ) : cat == "Furniture" ? (
                    <FaChair color='#D68C3A' size={40} />
                ) : cat == "Clothes" ? (
                    <GiClothes color='#B855FA' size={50} />
                ) : cat == "Electronics" ? (
                    <FcElectronics color='#F07167' size={40} />
                ) : cat == "Others" ? (
                    <BiCategory color='#F07167' size={40} />
                ) : null}

                <span className='mt-4 font-bold text-primary'>{cat}</span>
            </div>
        </>
    );
}

export default Card;
