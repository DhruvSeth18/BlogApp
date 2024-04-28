import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../api/api";
import { FaShareAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { IoBookmark } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { Avatar } from "@mui/material";
import './readBlog.css';

const ReadBlog = () => {
    const [details, setDetails] = useState({});
    const [share, setShare] = useState(false);
    const [like, setLike] = useState(false);
    const [bookmark, setBookMark] = useState(false);
    const { blogId } = useParams();
    
    useEffect(() => {
        const BlogDetails = async () => {
            const response = await getSingleBlog(blogId);
            if (response.status && response.status === 'success') {
                setDetails(response.Blog);
                console.log(response.Blog);
            }
        }
        BlogDetails();
    }, [blogId])
    return (<>
        <div className="w-[100%] mt-[75px] mb-[100px] flex justify-center">
            <div className="w-[95%] sm:w-[80%] lg:w-[60%] xl:w-[50%] flex flex-col gap-1">
                <div>
                    {details.image && <img className="w-[100%] h-[320px] lg:h-[360px] select-none" src={details.image} alt="#image" />}
                </div>
                <div className="flex gap-3 mt-3 relative">
                    {like ? (
                        <AiFillHeart
                            onClick={() => setLike(!like)}
                            className='text-[34px] active:scale-75 text-red-500 cursor-pointer'
                        />
                    ) : (
                        <AiOutlineHeart
                            onClick={() => setLike(!like)}
                            className='text-[34px] active:scale-75 cursor-pointer'
                        />
                    )}
                    <FaShareAlt onClick={() => setShare(!share)} className={`text-[25px] relative mt-[2px] transition duration-200 cursor-pointer ${share ? 'text-blue-500' : ''}`} />
                    {bookmark ? (
                        <IoBookmark
                            onClick={() => setBookMark(!bookmark)}
                            className='text-[32px] active:scale-75 text-red-500 cursor-pointer absolute right-1'
                        />
                    ) : (
                        <IoBookmarkOutline
                            onClick={() => setBookMark(!bookmark)}
                            className='text-[32px] active:scale-75 cursor-pointer absolute right-1'
                        />
                    )}
                </div>
                <div className="w-[100%] flex justify-center mb-[40px]">
                    {details.title && <p className="md:w-[750px] text-[30px] md:text-[60px] text-center font-medium">{details.title.substring(0, 90)}</p>}
                </div>
                <div className="flex justify-center gap-1 w-[100%] mb-10">
                    <div className="flex gap-9">
                        {details.author && <Avatar sx={{height:'70px',width:'70px'}} alt={details.author.username}  src={details.author.image} />}
                        <div className="flex flex-col">
                            {details.author && <p className="text-[30px]">{details.author.username}</p>}
                            <div className="flex gap-3">
                                <div> 
                                    {details.author &&<p className="flex-1 text-[14px]">Total Post : {details.author.totalPost}</p>}
                                </div>
                                <div> 
                                    {details.author &&<p className="flex-1 text-[14px]">Total Likes : {details.author.totalLikes}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="width-[100%]] flex">
                    <span className="flex-1 border-2 border-cyan-300 h-0 relative top-[30px]"></span>
                    <p className="mr-4 ml-4 text-[40px]">Content</p>
                    <span className="flex-1 border-2 border-cyan-300 h-0 relative top-[30px]" ></span>
                </div>
                <div className="w-[100%]">
                    {
                        details.data && <div className="blogPage w-[100%] " dangerouslySetInnerHTML={{ __html: details.data }}></div>
                    }
                </div>
            </div> 
        </div>
    </>)
}
export default ReadBlog;