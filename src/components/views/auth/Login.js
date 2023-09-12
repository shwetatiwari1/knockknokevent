import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen relative z-0 flex bg-[#f2f2f2] justify-center items-center  ">
      {/* <img src="/images/background.jpg" alt="logo" className=" h-40 "></img> */}
      <div className="h-content flex flex-col h-content w-[85%] lg:w-[30%] md:w-[55%] sm:w-[75%] pb-8 gap-y-9 xs:w-[80%] bg-white  pt-9  shadow-xl rounded-lg">
        <p className="font-mono font-semibold text-4xl text-gray-500 ">
          KnockKnok Event
        </p>
        <form className="pl-16 pr-16 pb-7 mt-12 ">
          <div className="flex flex-col space-y-[15%]">
            <div className="relative z-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#afaeae"
                class="w-9 h-9 absolute z-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="text"
                className=" text-xl  pl-12 pb-2 text-[#afaeae] w-full focus:border-b-[black] outline-none border-b-2 border-b-[#afaeae]"
                placeholder="enter e-mail "
              />
            </div>
            <div className="relative z-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#afaeae"
                class="w-9 h-9 absolute "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <input
                type="password"
                placeholder="enter password"
                className=" text-xl  pl-12 pb-[10px] text-gray-800 w-full focus:border-b-black outline-none border-b-2 border-b-[#afaeae]"
              />
            </div>
            <button
              className="w-full bg-gray-800 text-white text-lg shadow-2xl font-semibold h-14  mt-8 hover:bg-[#898686] rounded-lg"
              onClick={() => navigate(`/`)}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
