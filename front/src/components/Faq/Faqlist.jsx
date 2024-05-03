import {faqs} from "../../assets/data/faqs";
import Faqitem from "./Faqitem";

const Faqlist = ()=>{
    return (
        <ul className="mt-16">
            {faqs.map((item,index)=> <Faqitem key={index} item={item}/>)}
        </ul>
    )

}
export default Faqlist;