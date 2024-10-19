import React, { createContext,useState } from "react";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
export const Functioncontext = createContext(null)

export default function Contextcontroller(props){
    const[signininfo , setsignininfo] =useState({
        name : "" ,
        lastname: "",
        email : "" ,
        password:"",
        date:""
    })
    const[logininfo , setlogininfo] =useState({
        email:"",
        password:"",
    })
    const[massege, setmassege ]=useState()
    const[verinfo , setverinfo] = useState({
        email:'',
        code:0
    })
    const [forgotpassemail , setforgotpassemail] = useState({
        email: ""
    })
    const [passwordchanged , setpasswordchanged] = useState({
        password : "",
        confirmpassword : ""
    })
    const fillpassword = (e,fieldname)=>{
        setpasswordchanged((perv)=>({...perv , [fieldname]:e.target.value}))
    }
    const fillemail = (e,fieldname)=>{
        setforgotpassemail((perv)=>({...perv , [fieldname]:e.target.value}))
    }
    const verifictioninfo =(e , fieldname)=>{
        setverinfo((perv)=>({...perv , [fieldname]:e.target.value}))
    }
    
    const SINGIN =async()=>{
        let resdata
        await fetch("http://localhost:4000/clientsignup",{
            method : "POST",
            headers : {
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(signininfo),
            credentials: 'include'
        }).then((res)=>res.json()).then((data)=>{console.log(data);resdata = data })
        if(resdata.success === true){
            alert("verifiction code is sent!")
            window.location.replace('/verifiction')
        }else(
            setmassege(resdata.message)
            
        )
    }
    const LOGIN = async() =>{
        let resdata;
        await fetch("http://localhost:4000/clientlogin",{
            method : "POST",
            headers : {
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(logininfo),
            credentials : "include"
        }).then((res)=>res.json()).then((data)=>{console.log(data);resdata=data})
        if(resdata.success){
            let resdata ; 
            const value = Cookies.get('jwtclient')
            await fetch("http://localhost:4000/jwt",{
                method : "POST",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({cookiess : value}), 
            }).then((res)=>res.json()).then((data)=>resdata = data)
            if(resdata.success){
                alert("welcome")
                window.location.replace('/')
            }
        }else{
            alert(resdata.message)
        }
    }
    
    const verifiction = async() =>{
        let resdata
        await fetch("http://localhost:4000/verify",{
            method : "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email:verinfo.email , code :verinfo.code})
        }).then((res)=>res.json()).then((data)=>{console.log(data);resdata=data})
        if(resdata.success){
            alert(resdata.message)
            window.location.replace('/login')
        }else{
            alert(resdata.message)
        }
    }

    const forgotpassword =async()=>{
        let resdata; 
        await fetch("http://localhost:4000/forgotpassword",{
            method : "POST",
            headers :{
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(forgotpassemail)
        }).then((res)=>res.json()).then((data)=>resdata =data )
        if(resdata.success){
            alert(resdata.message)
            window.location.replace('/login')
        }else{
            alert(resdata.message)
        }
    }
    const changepasswords = async() =>{
        let resdata ;
        if(passwordchanged.password === passwordchanged.confirmpassword){
           await fetch("http://localhost:4000/reset",{
            method: "POST",
            headers :{
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ token :passwordchanged.token ,  password:passwordchanged.password} )
        }).then((res)=>res.json()).then((data)=>{console.log(data)})
        }else{
            alert("passwords are not matched")
        }
        
    }
    const values={signininfo ,
         setsignininfo ,
         logininfo ,
         setlogininfo ,
         SINGIN ,
         LOGIN , 
         massege , 
         verifictioninfo ,
         verinfo  , 
         verifiction ,
         fillemail ,
         forgotpassword ,
         forgotpassemail,
         passwordchanged,
         fillpassword,
        changepasswords,
        setpasswordchanged}
    return(
        <Functioncontext.Provider value={values}>
            {props.children}
        </Functioncontext.Provider>
    )
}