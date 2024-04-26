import { useEffect, useState } from "react"
import { getAllBlog } from "../api/api";
const Blog = ()=>{
    const [blog,setBlog] = useState([]);
    useEffect(()=>{
        const fetchData = async () =>{
            const response = await getAllBlog();
            if(response.status===200 && response.data.status==='success'){
                setBlog(response.data.Blogs);

            } else if(response.status===204 && response.data.status==='success'){
                setBlog(response.data.Blogs);
            }
        }
        console.log("reach blog");
        fetchData();
    },[]);

    return (
        <>
            <h1>Hello my name is dhurv seth</h1>
        </>
    )
}
export default Blog;