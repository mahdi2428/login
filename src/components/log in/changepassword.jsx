import React, { useContext, useEffect } from "react";
import { Functioncontext } from "../../context/context";
import { useParams } from "react-router-dom";


export default function Changepassword(){
    const{passwordchanged,
        fillpassword,
       changepasswords,
       setpasswordchanged} = useContext(Functioncontext)
       const {token} = useParams()
        useEffect((e)=>{
            setpasswordchanged((perv)=>({...perv , token : token}))
        },[])
    return(
        <>
        <div className="flex justify-center items-center h-[80vh] ">
            <div className="grid lg:grid-cols-2  justify-center items-center border rounded-2xl h-[50%]">
                <div className="bg-black w-full h-full rounded-l-2xl hidden lg:block">
                    <div className="text-white flex flex-col items-center justify-around px-5 py-7 h-full" > 
                        <p className="text-2xl font-bold">rest your password!!</p>
                        <p className="text-xl font-semibold">dont forget this time</p>
                        <button onClick={()=>window.location.replace("/login")} className="text-white bg-blue-400 w-[90%] rounded-2xl text-center hover:bg-blue-600 duration-300 py-2">back</button>
                    </div>
                </div>
                <div className="flex flex-col gap-5 px-5 py-7">
                    <div className="w-full">
                        <p className="text-lg font-bold"> change your password</p>
                    </div>
                    <div className="w-full">
                        <input value={passwordchanged.password} onChange={(e)=>{fillpassword(e,'password')}} className="py-2 px-3 border rounded-2xl w-full" type="password" placeholder="password" />
                    </div>
                    <div className="w-full">
                        <input value={passwordchanged.confirmpassword} onChange={(e)=>{fillpassword(e,'confirmpassword')}} className="py-2 px-3 border rounded-2xl w-full" type="password" placeholder="confrim password"></input>
                    </div>  
                    <div className="w-full">
                        <button onClick={changepasswords} className='bg-black w-full flex justify-center rounded-2xl text-white py-2 px-3 duration-300'>
                            submit
                        </button>
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}