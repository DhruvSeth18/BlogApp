import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MailIcon from '@mui/icons-material/Mail';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import './login.css';
import Cartoon from './cartoon.png';
import Google from './images.png';


const loginForm = {
    email:'',
    password:''
}
const Login = () => {
    const [passVisible, setPassVisible] = useState(false);
    const [login,setLogin] = useState(loginForm);

    const togglePassVisible = () => {
        setPassVisible(!passVisible);
    }
    const onInputChange = (e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
        console.log(login);
    }
    return (
        <>
            <div className="h-screen flex justify-center items-center bg-white">
                <div className="h-[450px] w-[95%] xl:w-[45%] lg:w-[55%] md:w-[70%] sm:w-[90%] flex bg-white p-4 rounded-md">
                    <form className='flex flex-col flex-1'>
                        {/* lOGIN Title */}
                        <div className="w-full h-[110px] flex justify-center items-center">
                            <p className="font-bold text-5xl ">Login</p>
                        </div>
                        {/* Email Login Form  */}
                        <div>
                            <label for="first_name" class="block font-medium mb-1 text-md">Email</label>
                            <div class="relative mb-4">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-2 cursor-pointer">
                                    <MailIcon className="text-gray-500" />
                                </div>
                                <input type="email" onChange={(e)=>{onInputChange(e)}} name='email' id="input-group-1" className=" border border-gray-300 text-sm rounded-lg focus:outline-none block w-full ps-10 p-2.5 " placeholder="Enter Username" required />
                            </div>
                        </div>
                        {/* password Login FOrm  */}
                        <div>
                            <label for="first_name" class="block mb-1 text-sm font-medium ">Password</label>
                            <div class="relative mb-2">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-2 cursor-pointer" onClick={togglePassVisible}>
                                    {passVisible ? <VisibilityIcon className="text-gray-500" /> : <VisibilityOffIcon className="text-gray-500" />}
                                </div>
                                <input type={passVisible ? 'text' : 'password'} onChange={(e)=>{onInputChange(e)}} name='password' id="input-group-1" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full ps-10 p-2.5  " placeholder="Enter Password" required />
                            </div>
                        </div>
                        {/* Forgot password */}
                        <div className="flex w-full justify-end mb-3">
                            <p className="text-blue-500 cursor-pointer">Forgot Password ?</p>
                        </div>
                        {/* Button Login */}
                        <div className="flex justify-center mb-3">
                            <button className="border-2 w-full text-center text-white bg-black text-xl p-1 font-bold rounded-md hover:text-black hover:bg-white hover:border-black" type="submit">Login</button>
                        </div>
                        {/* Login with Google    */}
                        <div className="flex w-full justify-center">
                            <button className="w-full h-[35px] border-2 border-black justify-center flex gap-4 rounded-md">
                                <img className=" h-full " src={Google} alt="google image" />
                                <p className="flex h-full items-center font-bold">Login with Google</p>
                            </button>
                        </div>
                    </form>
                    {/* Johny Test Logo */}
                    <div className="hidden sm:block flex-1/2">
                        <img className="w-full h-full" src={Cartoon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;