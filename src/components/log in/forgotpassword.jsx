import React, { useContext } from "react";
import { Functioncontext } from "../../context/context";

export default function Forgotpassword(){
    const {fillemail ,
        forgotpassword ,
        forgotpassemail} = useContext(Functioncontext)
    return(
        <>
        <div className="flex justify-center items-center h-[80vh] ">
            <div className="grid lg:grid-cols-2 h-[50%] justify-center items-center border rounded-2xl m-3 lg:m-0">
                <div className="bg-black w-full h-full rounded-l-2xl hidden lg:block">
                    <div className="text-white flex flex-col items-center justify-around px-5 py-7 h-full" > 
                        <p className="text-xl font-bold">you can change your password with your email!</p>
                        <p className="text-lg font-semibold">check your email after entering your email</p>
                        <button onClick={()=>window.location.replace('/login')} className="text-white bg-blue-400 w-[90%] rounded-2xl text-center hover:bg-blue-600 duration-300 py-2">back</button>
                    </div>
                </div>


                <div className="flex flex-col gap-5 px-5 py-7">
                    <div className="w-full">
                        <p className="text-lg font-bold"> link for changing your password will be sent!</p>
                    </div>
                    <div className="w-full">
                        <input value={forgotpassemail.email} onChange={(e)=>{fillemail(e,'email')}} className="py-2 px-3 border rounded-2xl w-full" type="email" placeholder="email" />
                    </div>
                    <div className="w-full">
                        <button onClick={forgotpassword} className='bg-black w-full flex justify-center rounded-2xl text-white py-2 px-3 duration-300'>
                            submit
                        </button>
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}