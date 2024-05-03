import {services} from "../../assets/data/services.js";
import Sercard from "./Sercard.jsx"
const Serlis = ()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
        {services.map((item,index)=> <Sercard key={index} item={item} index={index}/>)}
    </div>
}
export default Serlis;
