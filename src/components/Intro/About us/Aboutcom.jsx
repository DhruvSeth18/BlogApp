import React, { useState } from 'react'

const Aboutcom = () => {
    const font = {
        fontFamily: `Libre Baskerville, Georgia, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`,
    };
    const buttons = ["text 1", "text 2", "text 3"];
    const images = [
        "https://images.pexels.com/photos/21338071/pexels-photo-21338071/free-photo-of-a-crescent-moon-is-seen-in-the-dark-sky.jpeg",
        "https://images.pexels.com/photos/6424619/pexels-photo-6424619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6063623/pexels-photo-6063623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ]
    const [state, setState] = useState(0);
    return (
        <>
        <div className='w-full hell bg-[#101517] text-white flex flex-col p-5 gap-10 md:p-20 xl:p-20'>
            <div className='flex flex-col gap-4'>
                <p className='font-normal text-2xl md:text-4xl 2xl:text-6xl leading-snug tracking-[0.6rem]' style={font}>
                Do it all with
                <br />
                Quill-Quest.com
                </p>
                <p className='text-gray-300 md:text-xl text-m  tracking-[0.2rem]'>
                Write, share, and reach an audience. Link, sell, and showcase your
                <br />
                work. Anything, everything—all in one place.
                </p>
            </div>
            <div className='flex flex-col xl:flex-row gap-10 md:gap-30 xl:gap-52'>
                <div className='flex xl:flex-col gap-4'>
                    {buttons.map((item, index)=>{
                        return(
                            <div onMouseEnter={()=>{
                                setState(index);
                            }} key={index} className='text-2xl' style={{
                                font,
                                color: index == state? 'gray':'',
                            }}>
                                {item}
                            </div>
                        )
                    })}
                </div>
                <div className='max-w-[45rem]'>
                    <img src={images[state]} className='h-full w-full object-cover' />
                </div>
            </div>
        </div>
    </>
  )
}
export default Aboutcom