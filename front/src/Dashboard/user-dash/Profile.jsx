/* eslint-disable react/prop-types */

import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { BASE_URL, token } from "../../config";
import {toast} from "react-toastify";
import HashLoader from "react-spinners/HashLoader.js";

const Profile = ({user}) => {

  const [loadingState, setLoadingState] = useState(false);
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
      name:"",
      email:"",
      password:"",
      gender:"",
      bloodgroup:''
  });
  useEffect(()=>{
    setFormData({name: user.name, email: user.email, gender: user.gender, bloodgroup:user.bloodgroup});
  },[user]);
  
  const handleInputChange = e => {
      setFormData({...formData, [e.target.name]:e.target.value})
  };

  // useEffect(()=>{
  //   setFormData({name: user.name, email: user.email, gender: user.gender, bloodgroup:user.bloodgroup});
  // },[user]);
  

  const submitHandler = async event=>{

      event.preventDefault();
      setLoadingState(true);

      try{
          const res = await fetch(`${BASE_URL}/users/${user._id}`,{
              method:'put',
              headers:{
                  'Content-Type':'application/json',
                  Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(formData)
          });
          const {message} = await res.json();
          if(!res.ok){
              throw new Error(message);
          }
          setLoadingState(false);
          toast.success(message);
          navigate('/users/profile/me');
      }catch(err){
          toast.error(err.message);
          setLoadingState(false);
      }
  }
  return (
    <div className="mt-10">
      <form onSubmit={submitHandler}>
                        <div className="mb-5">
                            <input type="text" placeholder="Full name" name="name" value={formData.name} onChange={handleInputChange} className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:online-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer" required />
                        </div>
                        <div className="mb-5">
                            <input type="text" placeholder="Enter your email" name="email" value={formData.email} onChange={handleInputChange}   className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:online-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer" required />
                        </div>
                        <div className="mb-5">
                            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange}  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:online-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"  />
                        </div>
                        <div className="mb-5">
                            <input type="text" placeholder="Blood Group" name="bloodgroup" value={formData.bloodgroup} onChange={handleInputChange}  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:online-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer" required />
                        </div>
                        <div className="mg-5 flex items-center justify-between">
                          
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
                            
                        </div>
                        <div className="mt-7">
                        <button disabled={true && loadingState} type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 ">
                            {loadingState? <HashLoader size={25} color="#ffffff"/> : 'Update'}
                        </button>
                        </div>
                        
                    </form>
    </div>
  )
}

export default Profile