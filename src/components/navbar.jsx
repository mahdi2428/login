import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    const[hidden , setHidden] = useState(false)
    return(
        <>
        <div className="hidden lg:flex justify-between px-[2%] mt-1 py-2 items-center border-b">
            <div>
                <p className="font-bold text">shop</p>
            </div>
            <div>
                <p className="text-3xl font-bold ">welcome</p>
            </div>
            <div>
                <Link to="/login">
                    <button className="border rounded-2xl px-3 py-2 hover:bg-black hover:text-white duration-300">
                        log in
                    </button>
                </Link>
                <button className="hidden">
                    <i class="bi bi-cart"></i>
                </button>
            </div>
        </div>
        <div className="flex lg:hidden justify-between px-[2%] mt-2">
            <div>
                <p className="font-bold text">shop</p>
            </div>
            <div>
                <i onClick={()=>setHidden(!hidden)} className={`bi bi-list text-xl`}></i>
            </div>
            {hidden && (<>
            <div className="absolute left-0 top-0 bg-white h-[98vh] w-[100vw] flex flex-col items-center">
                <div className=" w-full text-right">
                    <i onClick={()=>setHidden(false)} class="bi bi-x text-2xl"  ></i>
                </div>
                <div className="">
                    <Link to="/login">
                        <button className="border-b w-full flex justify-center">
                            log in
                        </button>
                    </Link>
                </div>    
            </div>
            </>)}
        </div>
        
        
        </>
    )
}