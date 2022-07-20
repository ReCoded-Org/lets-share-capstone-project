import * as React from "react";
import Image from "next/image";
import { IoIosHelpBuoy } from "react-icons/io";

const HeroSection = () => {
    return (
        <div>
            <div
                id='firstSection'
                className='mt-[70px] grid grid-cols-1 items-center px-5 md:mx-20 md:grid-cols-2 md:gap-20'
            >
                <div className='md:order-1'>
                    <Image
                        src='/../public/images/undraw.png'
                        width={850}
                        height={700}
                        alt='/'
                    />
                </div>
                <div className='my-[30px] flex flex-col items-center justify-center text-center'>
                    <p className='mb-8 py-5 text-2xl md:text-3xl'>
                        Lorem ipsum dolor sit amet, consectetur hello adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                    </p>
                    <button
                        type='submit'
                        className='rounded-full bg-primary py-3 px-6 text-3xl font-bold  text-[white]'
                    >
                        donate Now
                    </button>
                </div>
            </div>
            <hr className='my-10 mx-20 border-primary' />
            <div id='causes' className='my-10'>
                <h2 className='text-center text-4xl font-black text-fontColor'>
                    Causes
                </h2>
                <div className='grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 '>
                    <div className='mx-10 my-10 flex flex-col items-center gap-5 px-5'>
                        <IoIosHelpBuoy size={130} color='#F07167' />
                        <h3 className='text-2xl font-bold text-fontColor'>
                            title
                        </h3>
                        <p className='text-center text-lg md:text-xl'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Necessitatibus deleniti minima voluptatem
                            autem sequi, ut non. Qui harum quisquam asperiores
                            impedit, quas velit consectetur ducimus adipisci et
                            fugit placeat blanditiis.
                        </p>
                    </div>
                    <div className='mx-10 my-10 flex flex-col items-center gap-5 px-5'>
                        <IoIosHelpBuoy size={130} color='#F07167' />
                        <h3 className='text-2xl font-bold text-fontColor'>
                            title
                        </h3>
                        <p className='text-center text-lg'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Necessitatibus deleniti minima voluptatem
                            autem sequi, ut non. Qui harum quisquam asperiores
                            impedit, quas velit consectetur ducimus adipisci et
                            fugit placeat blanditiis.
                        </p>
                    </div>
                    <div className='mx-10 my-10 flex flex-col items-center gap-5 px-5'>
                        <IoIosHelpBuoy size={130} color='#F07167' />
                        <h3 className='text-2xl font-bold text-fontColor'>
                            title
                        </h3>
                        <p className='text-center text-lg'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Necessitatibus deleniti minima voluptatem
                            autem sequi, ut non. Qui harum quisquam asperiores
                            impedit, quas velit consectetur ducimus adipisci et
                            fugit placeat blanditiis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
