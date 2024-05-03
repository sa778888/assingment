import userImg from "../../assets/images/doctor-img01.png";
import { useContext, useState } from "react";
import {authContext} from "../../context/AuthContext";
import Mybooking from "./Mybooking";
import Profile from "./Profile";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { token } from "../../config";

const Myaccount = () => {
    const [loadingState, setLoadingState] = useState(false);
    const navigate = useNavigate();
    const {dispatch} = useContext(authContext);
    const [activeTab, setActiveTab] = useState('booking');
    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    };
    const deleteAcc = async(e)=>{
        e.preventDefault();
        setLoadingState(true);
        try{
            const res = await fetch(`${BASE_URL}/users/${data._id}`,{
                method:'delete',
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const {message} = await res.json();
            if(!res.ok){
                throw new Error(message);
            }
            setLoadingState(false);
            toast.success(message);
            dispatch({type:"LOGOUT"});
            navigate('/login');
        }catch(err){
            toast.error(err.message);
            setLoadingState(false);
        }

    };
    const {data, loading, error} = useGetProfile(`${BASE_URL}/users/profile/me`);
    console.log(data ,'userdata');

  return <section>
    <div className="max-w-[1170px] px-5 mx-auto">

        { loading && <Loading /> && !error }
        { error && !loading && <Error err={error} />}

    {
        !loading && !error && (<div className="grid md:grid-cols-3 gap-10">
        <div className="pb-[50px] px-[30px] rounded-md">
            <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                    <img src={userImg} alt="" className="w-full h-full rounded-full"/>
                </figure>
            </div>
        <div className="text-center mt-4">
            <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">{data.name}</h3>
            <p className="text-textColor text-[15px] leading-6 font-medium">{data.email}</p>
            <p className="text-textColor text-[15px] leading-6 font-medium">Blood type: <span>{data.bloodgroup}</span></p>
        </div>
        <div className="mt-[50px] md:mt-[100px]">
            <button onClick={handleLogout} className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white">Logout</button>
            <button onClick={deleteAcc} className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">Delete Account</button>
        </div>
        </div>
        <div className="md:col-span-2">
            <div>
            <button onClick={()=> setActiveTab('booking')} className={`${activeTab === 'booking' ? 'bg-blue-600 text-white' : null}   py-2 mr-3 px-3 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
    My Bookings
            </button>
            <button onClick={()=> setActiveTab('profile')} className={`${activeTab === 'profile' ? 'bg-blue-600 text-white' : null}   py-2 mr-3 px-3 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
    Profile Setting
            </button>
        </div>
       
        {
            activeTab==='booking' && <Mybooking/>
        }
        {
            activeTab==='profile' && <Profile user={data}/> 
        }
        </div>
        
    </div>)
    }
    </div>
  </section>
}
export default Myaccount