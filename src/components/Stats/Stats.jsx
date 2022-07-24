import Image from "next/image";

function Stats() {
    return (
        <>
            <div className='flex  h-60 justify-center bg-primary md:h-80 xl:h-80'>
                <Image
                    src='/images/donate.png'
                    alt='donate'
                    width={600}
                    height={1000}
                    className=' -z-1 ml-10 h-full w-full opacity-25'
                />
            </div>
            <div className='relative ml-8 mr-8 -mt-12  grid grid-cols-1 items-center gap-x-6 gap-y-6 rounded-2xl bg-[white] py-8  px-2 shadow-lg sm:grid-cols-2 md:-mt-24 lg:grid-cols-4 xl:-mt-24'>
                <div className='basis-1/4 text-center '>
                    <Image
                        src='/images/Icon1.png'
                        alt='icon'
                        layout='intrinsic'
                        height={60}
                        width={60}
                    />
                    <h2 className='font-bold text-fontColor '>1/3</h2>
                    <p className='text-fontColor'>
                        Lorem ipsum dolor sit amet,
                        <br /> consectetur adipiscing elit,
                        <br /> sed do eiusmod tempor incididunt ut
                        <br /> labore et dolore magna aliqua.
                    </p>
                </div>

                <div className='basis-1/4 text-center '>
                    <Image
                        src='/images/Icon2.png'
                        alt='icon'
                        layout='intrinsic'
                        height={60}
                        width={60}
                    />
                    <h2 className='font-bold text-fontColor '>75%</h2>
                    <p className='text-fontColor'>
                        Lorem ipsum dolor sit amet,
                        <br /> consectetur adipiscing elit,
                        <br /> sed do eiusmod tempor incididunt ut
                        <br /> labore et dolore magna aliqua.
                    </p>
                </div>

                <div className='basis-1/4 text-center '>
                    <Image
                        src='/images/Icon3.png'
                        alt='icon'
                        layout='intrinsic'
                        height={60}
                        width={60}
                    />
                    <h2 className='font-bold text-fontColor '>300</h2>
                    <p className='text-fontColor'>
                        Lorem ipsum dolor sit amet,
                        <br /> consectetur adipiscing elit,
                        <br /> sed do eiusmod tempor incididunt ut
                        <br /> labore et dolore magna aliqua.
                    </p>
                </div>

                <div className='basis-1/4 text-center  '>
                    <Image
                        src='/images/Icon4.png'
                        alt='icon'
                        layout='intrinsic'
                        height={50}
                        width={90}
                    />
                    <h2 className='font-bold text-fontColor '>Facts</h2>
                    <p className='text-fontColor'>
                        Lorem ipsum dolor sit amet,
                        <br /> consectetur adipiscing elit,
                        <br /> sed do eiusmod tempor incididunt ut
                        <br /> labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Stats;
