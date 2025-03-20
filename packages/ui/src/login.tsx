"use client"
import { useAtom } from "jotai";
import { BeakerIcon } from "../icons/beakerIcon.js";
import { CloseIcon } from "../icons/closeIcon.js";
import { FacebookIcon } from "../icons/facebookIcon.js";
import { GoogleIcon } from "../icons/googleIcon.js";
import { RazorpayIcon } from "../icons/razorpayIcon.js";
import { LoginAtom } from "@repo/atoms/loginAtom";


export function Login () {

    const [isLoginTabOpen, setLoginTabOpen] = useAtom(LoginAtom);

    return <div className={`fixed bg-neutral-900/30 h-full w-full z-50 backdrop-blur-sm justify-center ${isLoginTabOpen ? ' flex' : 'hidden'}`}>
        <div className="relative rounded-lg xl:h-[60%] xl:min-h-0 lg:h-[45%] lg:min-h-0 md:h-[55%] md:min-h-0 min-h-[60%] xl:w-[55%] md:w-[50%] w-[70%] flex xl:flex-row flex-col  bg-black p-4 place-self-center">
            <div className="absolute top-0 left-0 text-white p-2 cursor-pointer"
            onClick={() => {setLoginTabOpen(false)}}>
                <CloseIcon size="xl"/>
            </div>
            <div className="h-full xl:w-[60%] w-full flex flex-col">
                <div className="flex justify-around items-center gap-2 xl:mt-20">
                    <div className="flex gap-2 items-center">
                      <div className="text-green-500 cursor-default"><BeakerIcon size="login"/></div>
                      <div className="text-white sm:text-4xl text-xl font-extrabold cursor-default">FLEXLAB</div>
                    </div>

                    <div className="">
                        <RazorpayIcon size="4xl"/>
                    </div>
                </div>

                <div className="text-white text-center sm:text-2xl font-semibold">
                    Welcome! <br/> Register to avail best deals!
                </div>
            </div>
            <div className="bg-white xl:w-[40%] h-full w-full rounded-lg flex flex-col">
                <div className="px-7 flex flex-col">
                  <div className="text-center sm:text-2xl text-xl font-bold pt-7">Login/Signup</div>
                  <div className="text-center text-gray-600 text-base sm:text-base text-sm">Enter Username & Password</div>
                  <div className="flex flex-col gap-2">
                      <input className=" p-2 border w-full sm:mt-5 mt-2 rounded-lg" placeholder="Username"></input>
                      <input className=" p-2 border w-full rounded-lg" placeholder="Password"></input>
                      <button className="bg-black w-full text-white px-5 py-1 rounded-lg focus:bg-white focus:text-black focus:border focus:border-black">Proceed</button>
                  </div>
                </div>

                <div className="flex items-center sm:mt-4 mt-2">
                  <div className="flex-grow border-t border-gray-300 mx-4"></div>
                  <span className="text-gray-600">or</span>
                  <div className="flex-grow border-t border-gray-300 mx-4"></div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="text-center font-semibold text-lg">Login with</div>
                    <div className="flex justify-center items-center gap-3 my-2">
                        <div className="bg-black rounded-md p-1 hover:scale-105 transition-all cursor-pointer"><GoogleIcon size="2xl"/></div>
                        <div className="bg-black rounded-md p-1 text-white hover:scale-105 transition-all cursor-pointer"><FacebookIcon size="2xl"/></div>
                    </div>
                </div>
            </div>
        </div>
         
    </div>
}