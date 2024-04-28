import axios from 'axios';
const url = 'http://localhost:8000';

export const LoginUser = async (data) => {
    try {
        const response = await axios.post(`${url}/login`, data, {
            timeout: 4000,
        })
        console.log(response);
        if (response.status === 200) {
            return {
                status: response.data.status,
                username: response.data.username,
                email: response.data.email,
                image: response.data.image,
                totalLikes: response.data.totalLikes,
                totalPost: response.data.totalPost,
                token: response.data.token,
                id: response.data.id
            }
        }
    } catch (error) {
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            message: "Internet is slow Try Again"
        }
    }
}
export const signUser = async (data) => {
    try {
        const response = await axios.post(`${url}/signin`, data, {
            timeout: 4000,
        })
        console.log(response);
        if (response.status === 201) {
            return {
                status: response.data.status,
                message: response.data.message
            }
        }
    } catch (error) {
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            status: 'fail',
            message: "Internet is slow Try Again"
        }
    }
}

export const createBlogRequest = async (data) => {
    try {
        const response = await axios.post(`${url}/userblog/${localStorage.getItem('userId')}`, data, {
            headers: {
                authorization: localStorage.getItem("token")
            },
            timeout: 4000,
        })
        if (response.status === 201) {
            return {
                status: response.data.status,
                message: response.data.message
            }
        }
    } catch (error) {
        if (error.response?.status >= 400) {
            return {
                status: error.response.data.status,
                message: error.response.data.message
            }
        }
        return {
            status: 'fail',
            message: "Internet is slow Try Again"
        }
    }
}


export const getTypeBlog = async (type) => {
    try {
        const response = await axios.get(`${url}/blogs/${type || 'all'}`, {
            timeout: 4000,
        });
        if (response.status === 204) {
            return {
                status: 'fail',
                message: 'no data found'
            }
        }
        return {
            status: response.data.status,
            Blogs: response.data.Blogs,
            message: response.data.message
        }
    } catch (error) {
        console.log("Error while getting all the Blog", error);
        if (error.response?.status >= 400) {
            return {
                status: error.response.status,
                message: error.response.message
            }
        }
        return {
            message: "Internet is Slow try again"
        }
    }
}