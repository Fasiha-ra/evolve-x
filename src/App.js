import React from "react";
import SignUp from "./components/Auth";
import { GlobalStyles } from "./components/Global.styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OTP from "./components/Auth/OTP";
import UploadProfile from "./components/Auth/UploadProfile";
import Header from "../src/components/Header/index";
import AdminLayout from "./components/AdminLayout";
import Home from "./components/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/signUp" element={<OTP />} />
          <Route path="/UploadProfile" element={<UploadProfile />} />
          <Route path="/" element={<AdminLayout />}>
            <Route path="/dashboard" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
