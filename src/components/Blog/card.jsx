import { Card } from '@mui/material';
import { useState } from 'react';
import { FaShareAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Blogcard = ({ item }) => {
    const [like, setLike] = useState(false);
    const [share, setShare] = useState(false);
    console.log("hello from Card",item);
    return (
        <Card maxW='md'sx={{borderRadius:'7px'}} className='min-w-[300px] max-w-[300px] relative h-[390px] text-black border-2 bg-white'>
            <p className='m-2'>{item.category}</p>
            <div className='flex justify-center'>
                <img
                    className='w-[100%] h-[160px] rounded-lg'
                    src={item.image}
                />
            </div>
            <div className='m-2 text-justify'>
                <p className='text-[22px] mb-1'>Education is Important</p>
                <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum debitis ducimus exercitationem iure assumenda possimus?&nbsp;....</p>
            </div>
            <div className='flex justify-around w-[70px] absolute bottom-3 left-[7px]'>
                {like ? (
                    <AiFillHeart
                        onClick={() => setLike(!like)}
                        className='text-[30px] active:scale-75 text-red-500 cursor-pointer'
                    />
                ) : (
                    <AiOutlineHeart
                        onClick={() => setLike(!like)}
                        className='text-[30px] active:scale-75 cursor-pointer'
                    />
                )}
                <FaShareAlt
                    onClick={() => setShare(!share)}
                    className={`text-[25px] relative mt-[2px] cursor-pointer ${share ? 'text-blue-500' : ''}`}
                />
            </div>
        </Card>
    )
}
export default Blogcard;