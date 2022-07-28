import Image from "next/image";

function Stats() {
    return (
        <div className='bg-[#FAFAFA]'>
            <div className='flex  h-60 justify-center bg-primary md:h-80 xl:h-80'>
                <Image
                    src='/images/donate.png'
                    alt='donate'
                    width={600}
                    height={1000}
                    className=' -z-1 ml-10 h-full w-full opacity-25'
                />
            </div>
            <div className='container relative mx-auto -mt-12   grid  grid-cols-1 items-center gap-x-6 gap-y-6 rounded-2xl bg-[white] px-4 py-8  shadow-lg sm:grid-cols-2 md:-mt-24 lg:grid-cols-4 xl:-mt-24'>
                <div className='group basis-1/4 rounded-lg p-3 text-center transition-all duration-500 hover:-translate-y-5 hover:bg-[#168940c2] hover:text-[white]'>
                    <Image
                        src='/images/Icon1.png'
                        alt='icon'
                        layout='intrinsic'
                        height={60}
                        width={60}
                        className=''
                    />
                    <h2 className='font-bold text-fontColor group-hover:text-[#eaffef]'>
                        1/3
                    </h2>
                    <p className='text-fontColor group-hover:text-[#eaffef]'>
                        Lorem ipsum dolor sit amet,
                        <br /> consectetur adipiscing elit,
                        <br /> sed do eiusmod tempor incididunt ut
                        <br /> labore et dolore magna aliqua.
                    </p>
                </div>

                <div className='group basis-1/4 rounded-lg p-3 text-center transition-all duration-500 hover:-translate-y-5 hover:bg-[#168940c2] hover:text-[white]'>
                    <Image
                        src='/images/Icon2.png'
                        alt='icon'
                        layout='intrinsic'
                        height={60}
                        width={60}
                    />
                    <h2 className='font-bold text-fontColor group-hover:text-[#eaffef]'>
                        75%
                    </h2>
                    <p className='text-fontColor group-hover:text-[#eaffef]'>
                        Lorem ipsum dolor sit amet,
                        <br /> consectetur adipiscing elit,
                        <br /> sed do eiusmod tempor incididunt ut
                        <br /> labore et dolore magna aliqua.
                    </p>
                </div>

                <div className='group basis-1/4 rounded-lg p-3 text-center transition-all duration-500 hover:-translate-y-5 hover:bg-[#168940c2] hover:text-[white]'>
                    <Image
                        src='/images/Icon3.png'
                        alt='icon'
                        layout='intrinsic'
                        height={60}
                        width={60}
                    />
                    <h2 className='font-bold text-fontColor group-hover:text-[#eaffef]'>
                        300
                    </h2>
                    <p className='text-fontColor group-hover:text-[#eaffef]'>
                        Lorem ipsum dolor sit amet,
                        <br /> consectetur adipiscing elit,
                        <br /> sed do eiusmod tempor incididunt ut
                        <br /> labore et dolore magna aliqua.
                    </p>
                </div>

                <div className='group basis-1/4 rounded-lg p-3 text-center transition-all duration-500 hover:-translate-y-5 hover:bg-[#168940c2] hover:text-[white]'>
                    <Image
                        src='/images/Icon4.png'
                        alt='icon'
                        layout='intrinsic'
                        height={50}
                        width={90}
                    />
                    <h2 className='font-bold text-fontColor group-hover:text-[#eaffef]'>
                        Facts
                    </h2>
                    <p className='text-fontColor group-hover:text-[#eaffef]'>
                        Lorem ipsum dolor sit amet,
                        <br /> consectetur adipiscing elit,
                        <br /> sed do eiusmod tempor incididunt ut
                        <br /> labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Stats;
