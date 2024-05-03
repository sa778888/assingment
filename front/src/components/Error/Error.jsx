/* eslint-disable react/prop-types */


const Error = ({err}) => {
  return <div className="flex items-center justify-center w-full h-full">
    <h3 className="text-headingColor text-[20px] leading-[30px] font-semibold">
        {err}
    </h3>
  </div>
}

export default Error;
