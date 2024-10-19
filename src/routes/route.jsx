import React from "react";
import Navbar from "../components/navbar"
import Contextcontroller from "../context/context"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Verifiction from "../components/log in/verifiction"
import Forgotpassword from "../components/log in/forgotpassword"
import Changepassword from "../components/log in/changepassword"
import LoginSingup from "../components/log in/login&singup";
export default function RoutesURL(){
    return(
        <BrowserRouter>
        <Contextcontroller>
            <Navbar />
          <Routes>
            <Route path="/login" element={<LoginSingup />} />
            <Route path="/login/verifiction" element={<Verifiction />} />
            <Route path="/login/forgotpassword" element={<Forgotpassword />} />
            <Route path="/login/reset/:token" element={<Changepassword />} />
          </Routes>
        </Contextcontroller>
      </BrowserRouter>  
    )
}