import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MailIcon from '@mui/icons-material/Mail';
import { FaUser } from "react-icons/fa";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import './sign.css';
import Cartoon from './cartoon.png';
import Google from './images.png';

const signin={}

const Signin=()=>{
    const [passVisible,setPassVisible]=useState(false);
    const togglePassVisible=()=>{
        setPassVisible(!passVisible);
    }
    const [sign,setLogin] = useState(signin);
    const onInputChange = (e)=>{
        setLogin({...sign,[e.target.name]:e.target.value});
    }

    return (
        <>
            <div className="h-screen flex justify-center items-center bg-white">
                <div className="h-[530px] w-[95%] xl:w-[55%] lg:w-[65%] md:w-[80%] flex bg-white p-4 rounded-md">
                    {/* Johny Test Logo */}
                    <div className="hidden sm:block flex-1/2">
                        <img className="w-full h-full scale-x-[-1]" src={Cartoon} alt="" />
                    </div>
                    <div className='flex flex-col flex-1'>
                        {/* Signup Title */}
                        <div className="w-full h-[110px] flex justify-center items-center">
                            <p className="font-bold text-5xl ">Sign Up</p>
                        </div>
                        {/* Username */}
                        <div>
                            <label for="first_name" class="block font-medium mb-1 text-md">Username</label>
                            <div class="relative mb-4">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-2 cursor-pointer">
                                    <FaUser className="text-gray-500" />
                                </div>
                                <input type="text" onChange={(e)=>{onInputChange(e)}} name='username' id="input-group-1" className=" border border-gray-300 text-sm rounded-lg focus:outline-none block w-full ps-10 p-2.5 " placeholder="Enter Username" required />
                            </div>
                        </div>
                        {/* Email Login Form  */}
                        <div>
                            <label for="first_name" class="block font-medium mb-1 text-md">Email</label>
                            <div class="relative mb-4">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-2 cursor-pointer">
                                    <MailIcon className="text-gray-500" />
                                </div>
                                <input type="email" onChange={(e)=>{onInputChange(e)}} name='email' id="input-group-1" className=" border border-gray-300 text-sm rounded-lg focus:outline-none block w-full ps-10 p-2.5 " placeholder="Enter Email" required />
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
                        {/* confirm password Login FOrm  */}
                        <div>
                            <label for="first_name" class="block mb-1 text-sm font-medium ">Confirm-Password</label>
                            <div class="relative mb-2">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-2 cursor-pointer" onClick={togglePassVisible}>
                                    {passVisible ? <VisibilityIcon className="text-gray-500" /> : <VisibilityOffIcon className="text-gray-500" />}
                                </div>
                                <input type={passVisible ? 'text' : 'password'} onChange={(e)=>{onInputChange(e)}} name='repassword' id="input-group-1" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full ps-10 p-2.5  " placeholder="Enter Password" required />
                            </div>
                        </div>
                        {/* Forgot password */}
                        <div className="flex w-full justify-between mb-3">
                            <p className="text-blue-500 cursor-pointer">Alerady have a account?</p>
                            <p className="text-blue-500 cursor-pointer">Forgot Password ?</p>
                        </div>
                        {/* Button Login */}
                        <div className="flex justify-center mb-3">
                            <button className="border-2 w-full text-center text-white bg-black text-xl p-1 font-bold rounded-md hover:text-black hover:bg-white hover:border-black" type="submit" onClick={()=>{console.log(sign)}}>Sign in</button>
                        </div>
                        {/* Login with Google    */}
                        <div className="flex w-full justify-center">
                            <button className="w-full h-[35px] border-2 border-black justify-center flex gap-4 rounded-md">
                                <img className=" h-full " src={Google} alt="google image" />
                                <p className="flex h-full items-center font-bold">Sign in with Google</p>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Signin;