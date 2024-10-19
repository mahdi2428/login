import React, { useContext, useState } from "react";
import { Functioncontext } from "../../context/context";
import { Link, Outlet } from "react-router-dom";

export default function LoginSingup(){
    const{signininfo , setsignininfo ,setlogininfo,logininfo ,SINGIN,LOGIN ,massege} = useContext(Functioncontext)
    const [toggle , settoggle] = useState(false)
    const [check , setcheck] =useState(false)

    const signinform = (e , fieldname)=>{
        setsignininfo((perv)=>({...perv , [fieldname] : e.target.value}))
    }
    const loginform = (e , fieldname)=>{
        setlogininfo((perv)=>({...perv , [fieldname] : e.target.value}))
    }
    return(
        <>
        <div className="h-[80vh] lg:flex justify-center items-center hidden ">
            <div className="grid grid-cols-2 gap-10 items-center border rounded-2xl w-fullpy-5 px-8 relative lg:w-[60%] xl:w-[40vw] py-5">
                <div>
                    <div className="flex flex-col gap-5  items-center justify-center">
                        <div className="text-2xl font-bold">
                            <p>
                                log in
                            </p>
                        </div>
                        <div className="w-full">
                            <input value={logininfo.email} onChange={(e)=>{loginform(e , 'email')}} className="py-2 px-3 border rounded-2xl w-full" type="email" placeholder="email"></input>
                        </div>
                        <div className="w-full">
                            <input value={logininfo.password} onChange={(e)=>{loginform(e , 'password')}} className="py-2 px-3 border rounded-2xl w-full" type="password" placeholder="password"></input>
                        </div>
                        <div className="w-full text-blue-300 text-sm cursor-pointer">
                            <Link to='/login/forgotpassword'>
                                <p>forgotten password ? </p>
                            </Link>
                        </div>
                        <div className=" w-full ">
                            <button onClick={LOGIN}  className="bg-black w-full flex justify-center rounded-2xl text-white py-2 px-3 cursor-pointer">
                                login
                            </button>
                        </div>
                    </div>
                </div>
                        
                <div>
                    <div className="flex flex-col gap-5  items-center justify-center">
                        <div className="text-2xl font-bold">
                            <p>
                                sing up
                            </p>
                        </div>
                        <div className="w-full">
                            <input value={signininfo.name} onChange={(e)=>{signinform(e , 'name')}} className="py-2 px-3 border rounded-2xl w-full" type="text" placeholder="name"></input>
                        </div >
                        <div className="w-full">
                            <input value={signininfo.lastname} onChange={(e)=>{signinform(e , 'lastname')}} className="py-2 px-3 border rounded-2xl w-full" type="text" placeholder="lastname"></input>
                        </div>
                        <div className="w-full">
                            <input value={signininfo.email} onChange={(e)=>{signinform(e , 'email')}} className="py-2 px-3 border rounded-2xl w-full" type="email" placeholder="email"></input>
                        </div>
                        <div className="w-full">
                            <input value={signininfo.password} onChange={(e)=>{signinform(e , 'password')}} className="py-2 px-3 border rounded-2xl w-full" type="password" placeholder="password"></input>
                        </div>
                        <div className="w-full">
                            <input value={signininfo.date} onChange={(e)=>{signinform(e , 'date')}} className="py-2 px-3 border rounded-2xl w-full" type="date" placeholder="password"></input>
                        </div>
                        <div className="w-full flex gap-1 items-center text-sm">
                            <input checked={check} onChange={(e)=>{setcheck(e.target.checked)}} type="checkbox" />
                            <p >agreed to all policies</p>
                        </div>
                        <div>
                            <p>{massege}</p>
                        </div>
                        <div className="w-full">
                            <button onClick={SINGIN} disabled={!check} className={check ? `bg-black w-full flex justify-center rounded-2xl text-white py-2 px-3 duration-300` : `bg-black w-full flex justify-center rounded-2xl text-white py-2 px-3 cursor-not-allowed opacity-75 duration-300`}>
                                sing up
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className={toggle ? `right-[51%] w-[50%] h-full bg-black absolute top-0 rounded-l-2xl transition-all duration-1000 flex flex-col items-center justify-around py-10 z-30 cursor-pointer ` : ` right-0 w-[50%] h-full bg-black absolute top-0 rounded-r-2xl transition-all duration-1000 flex flex-col items-center justify-around py-10 z-30 cursor-pointer `}>
                    <p className="text-white font-bold text-4xl">welcome</p>
                    <p className="text-white text-center px-2">to be able to purache please enter your persnoal info</p>
                    <button className="text-white bg-blue-400 w-[90%] rounded-2xl text-center hover:bg-blue-600 duration-300 py-2"  onClick={()=>{settoggle(!toggle)}}>{toggle ? "log in " : "sing up"}</button>
                </div>
            </div>
        </div>






        <div className="lg:hidden">
            {toggle ?
            <div className="flex items-center h-screen justify-center ">
                <div className="border rounded-2xl w-fullpx-7 py-5 px-10 m-3 lg:m-0">
                    <div className="flex flex-col gap-5  items-center justify-center ">
                        <div className="text-2xl font-bold">
                            <p>
                                log in
                            </p>
                        </div>
                        <div className="w-full">
                            <input value={logininfo.email} onChange={(e)=>{loginform(e , 'email')}} className="py-2 px-3 border rounded-2xl w-full" type="email" placeholder="email"></input>
                        </div>
                        <div className="w-full">
                            <input value={logininfo.password} onChange={(e)=>{loginform(e , 'password')}} className="py-2 px-3 border rounded-2xl w-full" type="password" placeholder="password"></input>
                        </div>
                        <div className="w-full text-blue-300 text-sm cursor-pointer">
                            <Link to='forgotpassword'>
                                <p>forgotten password ? </p>
                            </Link>
                        </div>
                        <div>
                            <p>if you haven't register yet <span className="text-blue-500 hover:text-blue-700" onClick={()=>settoggle(false)}>sign up</span></p>
                        </div>
                        <div className=" w-full ">
                            <button onClick={LOGIN}  className="bg-black w-full flex justify-center rounded-2xl text-white py-2 px-3 cursor-pointer">
                                login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
     :
        <div className="flex items-center h-screen justify-center">
            <div className="border rounded-2xl w-fullpx-7 py-5 m-3 lg:m-0">
                <div className="flex flex-col gap-5  items-center justify-center px-10">
                    <div className="text-2xl font-bold">
                        <p>
                            sing up
                        </p>
                    </div>
                    <div className="w-full">
                        <input value={signininfo.name} onChange={(e)=>{signinform(e , 'name')}} className="py-2 px-3 border rounded-2xl w-full" type="text" placeholder="name"></input>
                    </div >
                    <div className="w-full">
                        <input value={signininfo.lastname} onChange={(e)=>{signinform(e , 'lastname')}} className="py-2 px-3 border rounded-2xl w-full" type="text" placeholder="lastname"></input>
                    </div>
                    <div className="w-full">
                        <input value={signininfo.email} onChange={(e)=>{signinform(e , 'email')}} className="py-2 px-3 border rounded-2xl w-full" type="email" placeholder="email"></input>
                    </div>
                    <div className="w-full">
                        <input value={signininfo.password} onChange={(e)=>{signinform(e , 'password')}} className="py-2 px-3 border rounded-2xl w-full" type="password" placeholder="password"></input>
                    </div>
                    <div className="w-full">
                        <input value={signininfo.date} onChange={(e)=>{signinform(e , 'date')}} className="py-2 px-3 border rounded-2xl w-full" type="date" placeholder="password"></input>
                    </div>
                    <div className="w-full flex gap-1 items-center text-sm">
                        <input checked={check} onChange={(e)=>{setcheck(e.target.checked)}} type="checkbox" />
                        <p >agreed to all policies</p>
                    </div>
                    <div>
                        <p>{massege}</p>
                    </div>
                    <div>
                        <p>you already have an account <span className="text-blue-500 hover:text-blue-700" onClick={()=>settoggle(true)}>login</span></p>
                    </div>
                    <div className="w-full">
                        <button onClick={SINGIN} disabled={!check} className={check ? `bg-black w-full flex justify-center rounded-2xl text-white py-2 px-3 duration-300` : `bg-black w-full flex justify-center rounded-2xl text-white py-2 px-3 cursor-not-allowed opacity-75 duration-300`}>
                            sing up
                        </button>
                    </div>
                </div>
            </div>
           </div> }
           <Outlet />
        </div>    

        
        </>
    )
}