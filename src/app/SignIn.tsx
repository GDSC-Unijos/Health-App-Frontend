import { Link } from "react-router-dom";
import Onboard from "./components/Onboard";
import google from '../images/google.png'

export default function SignIn(){
    return(

<section className="relative flex flex-wrap lg:h-screen lg:items-center ">

  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-3/5 lg:px-8 lg:py-24 ">
      <div className="border-solid border border-gray rounded-lg py-6">
          <div className="mx-auto max-w-lg text-center">
          <h1 className="text-4xl font-bold sm:text-3xl text-[#263A5C] text-center">Login</h1>

          <p className="mt-4 text-[#B1B5B9] text-center text-xl">
            Input your details
          </p>
        </div>

        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4 ">
          <div className="w-full">
            <label htmlFor="email" className="sr-only">Enter your Id</label>
             <p className="text-[#B1B5B9] pb-[5px] text-[18px] font-semibold w-[20rem] m-auto">Enter Your Id</p>
            <div className="relative flex justify-center">
              <input
                type="email"
                className="w-[20rem] border-[#B1B5B9] border-[1px] rounded-[6px] bg-rgba-34-31-31-40 p-3  text-xl shadow-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <p className="text-[#B1B5B9] pb-[5px] text-[18px] font-semibold w-[20rem] m-auto">Enter Your Password</p>
            <div className="relative flex justify-center">
              <input
                type="password"
                className="w-[20rem] border-[#B1B5B9] border-[1px] rounded-[6px]  p-3  text-xl shadow-sm"
              />
                </div>
                <div className=" w-4/5 flex justify-end">
                <a className=" text-[#0099D7] text-[15px] text-end">Forgot Password?</a>
                </div>
              </div>
              <div className=" w-full flex justify-center">
              <button
              type="submit"
              className=" rounded-[20px] bg-[#0099D7] px-7 py-3 text-sm font-medium text-white w-3/5 m-auto"
            >
              Sign in
            </button>
              </div>
              <div className="flex  justify-center ">
            <p className="text-lg text-[#221F1F]">
              Don't have an account?
              <Link className="text-[#407CE2]" to="/signup">   Sign up</Link>
            </p>
          </div>
          <button className="w-[20rem] flex text-center mt-7 bg-white border border-solid justify-center m-auto">
            <img className="w-[2rem] m-2"
            src={google}
            alt="google"
            />
            <h2 className="m-3 font-semibold">Sign In with Google</h2>
        </button>
        </form>
       

      </div>
    
  </div>
        <div className="relative w-full  lg:h-full lg:w-2/5  bg-[#263A5C]  px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24 bg-blac ">
          <div style={{ height: "100%" }}>
          <Onboard/>
          </div>
  </div>
</section>
        
    )
}           