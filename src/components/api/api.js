import axios from 'axios';
const url = 'http://localhost:8000';

export const LoginUser = async (data)=>{
    try{
        const response = await axios.post(`${url}/login`,data,{
            timeout:4000,
        })
        console.log(response);
        return {
            status:response.status,
            username:response.data.username,
            email:response.data.email,
            image:response.data.image,
            totalLikes:response.data.totalLikes,              
            totalPost:response.data.totalPost,
            token:response.data.token,
            id:response.data.id
        }
    } catch(error){
        if(error.response?.status>=400){
            return {
                status:error.response.status,
                message:error.response.data.message
            }
        }
        return {
            message:"Internet is slow Try Again"
        }
    }
}


// export const getUserData = async ()=>{
//     try{
//         const userId = localStorage.getItem('userId');
//         const response = await axios.get(`${url}/user/${userId}`,{
//             headers:{
//                 authorization: localStorage.getItem("token")
//             },
//             timeout:4000
//         });
//         if(response.status && response.status===200){
//             return {
//                 status:response.status,
//                 username:response.data.username,
//                 email:response.data.email,
//                 image:response.data.image,
//                 totalLikes:response.data.totalLikes,
//                 totalPost:response.data.totalPost
//             }
//         }
//     } catch(error){
//         if(error.response.staus>=400){
//             localStorage.clear();
//             return {
//                 status:response.status,
//                 message:error.response.data.message
//             }
//         }
//     }
// }

export const getAllBlog = ()=>{
    try{

    } catch(error){
        console.log("Error while getting all the Blog",error);
        return {
            status: error.response.status,
            message:error.response.message
        }
    }
}