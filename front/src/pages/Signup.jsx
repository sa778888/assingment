import signupImg from "../assets/images/signup.gif";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../config";
import {toast} from "react-toastify";
import HashLoader from "react-spinners/HashLoader.js";
const Signup = () =>{

    const [loadingState, setLoadingState] = useState(false);
    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        gender:"",
        role:"patient"
    });
    const handleInputChange = e => {
        setFormData({...formData, [e.target.name]:e.target.value})
    };
    const submitHandler = async event=>{

        event.preventDefault();
        setLoadingState(true);

        try{
            const res = await fetch(`${BASE_URL}/auth/register`,{
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(formData)
            });
            const {message} = await res.json();
            if(!res.ok){
                throw new Error(message);
            }
            setLoadingState(false);
            toast.success(message);
            navigate('/login');
        }catch(err){
            toast.error(err.message);
            setLoadingState(false);
        }
    }
    return <section className="px-5 xl:px-0">
        <div className="max-w-[1170px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block bg-primaryColor rounded-l-lg">
                    <figure className="rounded-l-lg">
                        <img src={signupImg} alt="" className="w-full rounded-l-lg"/>
                    </figure>
                </div>

                <div className="rounded-l-lg lg:pl-16 py-10">
                    <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
                        Create an <span className="text-primaryColor">account</span>
                    </h3>
                    <form onSubmit={submitHandler}>
                        <div className="mb-5">
                            <input type="text" placeholder="Full name" name="name" value={formData.name} onChange={handleInputChange} className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:online-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer" required />
                        </div>
                        <div className="mb-5">
                            <input type="text" placeholder="Enter your email" name="email" value={formData.email} onChange={handleInputChange}   className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:online-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer" required />
                        </div>
                        <div className="mb-5">
                            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange}  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:online-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer" required />
                        </div>
                        <div className="mg-5 flex items-center justify-between">
                            <label htmlFor="" className="text-headingColor font-bold text-[16px] leading-7">
                                Are you a:
                                <select name="role" value={formData.role} onChange={handleInputChange} className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
                                    <option value="patient">Patient</option>
                                    <option value="doctor">Doctor</option>
                                </select>
                            </label>

                            <label className="text-headingColor font-bold text-[16px] leading-7">
                                Are you a:
                                <select name="gender" value={formData.gender} onChange={handleInputChange} className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                        </div>

                        <div className="mb-5 flex items-center gap-3">
                            {/* { selectedFile && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                                <img src={previewURL} alt="" className="w-full rounded-full"/>
                            </figure>}
                            <div className="relative h-[50px] w-[130px]">
                                <input type="file" name="photo" id="customFile" accept=".jpg, .png" onChange={handleFileInputChange} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"/>
                                <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer">
                                    Upload Photo
                                </label>
                            </div> */}
                        </div>
                        <div className="mt-7">
                        <button disabled={true && loadingState} type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 ">
                            {loadingState? <HashLoader size={35} color="#ffffff"/> : 'Sign Up'}
                        </button>
                        </div>
                        <p className="mt-5 text-textColor text-center">
                            Have an account? <Link to='/login' className="text-primaryColor font-medium ml-1">Login now!</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
};
export default Signup;