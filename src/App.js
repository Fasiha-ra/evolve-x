import React from "react";
import SignUp from "./components/Auth";
import { GlobalStyles } from "./components/Global.styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OTP from "./components/Auth/OTP";
import UploadProfile from "./components/Auth/UploadProfile";
import AdminLayout from "./components/AdminLayout";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import Feed from "./components/Feed";
import MyProfile from "./components/MyProfile";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/signUp" element={<OTP />} />
          <Route path="/UploadProfile" element={<UploadProfile />} />
          <Route path="/UpdateProfile" element={<MyProfile />} />
          <Route path="/" element={<AdminLayout />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/support" element={<Error404 />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/session" element={<Error404 />} />
            <Route path="/calendar" element={<Error404 />} />
            <Route path="/notification" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
