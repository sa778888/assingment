import {formatedDate} from "../../utils/formatDate";

const Docabout = ()=>{
    return <div>
        <div>
            <h3 className="text[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                About of
                <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                    Muhibur Rahman
                </span>
            </h3>
            <p className="text__para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor lorem nec ullamcorper sollicitudin. Aenean mollis sem mi, eu efficitur purus aliquet ut. Aenean lacinia est accumsan, scelerisque dolor in, posuere sapien. Praesent vel tristique nulla. Nunc gravida tempus tellus id cursus.
            </p>
        </div>
        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                Education
            </h3>
            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-[15px] text-irisBlueColor leading-6 font-semibold">
                            {formatedDate('12-9-2014')} - {formatedDate('1-10-2017')}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            PHD in Surgery
                        </p>
                       
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                            AIIMS, New Delhi.
                        </p>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-[15px] text-irisBlueColor leading-6 font-semibold">
                            
                            {formatedDate('12-1-2009')} - {formatedDate('11-5-2013')}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            PHD in Surgery
                        </p>
                        
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                            AIIMS, New Delhi.
                        </p>
                </li>
            </ul>
        </div>
        <div className="mt-12">
            <h3 className="text[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2"> 
                Experience
            </h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formatedDate('12-9-2014')} - {formatedDate('1-10-2017')}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                            Sr. Surgeon
                    </p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                            AIIMS, New Delhi.
                    </p>

                </li>
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formatedDate('12-9-2010')} - {formatedDate('1-10-2013')}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                            Surgeon
                    </p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                            AIIMS, New Delhi.
                    </p>

                </li>
            </ul>
        </div>
    </div>
}
export default Docabout;