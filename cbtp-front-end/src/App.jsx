import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Markup/Page/Role/Mother/Nav";
import Aboutus from "./Markup/Page/Common/Aboutus";
import Service from "./Markup/Page/Common/Service";
import Myinfo from "./Markup/Page/Role/Mother/Myinfo";
import Index from "./Markup/Page/Common/Index";
import Login from "./Markup/Page/Common/Login";
import FourO4 from "./Markup/Page/Common/FourO4";
import MotherRegistration from "./Markup/Page/Role/Reciption/MotherRegistration";
import Profile from "./Markup/Page/Common/Profile";
import SignUp from "./Markup/Page/Common/Signup";
import MotherList from "./Markup/Page/Role/Reciption/MotherList";
import ChildInfo from "./Markup/Page/Role/Reciption/ChildInfo";
import AllUsers from "./Markup/Page/Role/Admin/AllUsers";
import UserRegistration from "./Markup/Page/Role/Admin/UserRegistration";
import Dashborde from "./Markup/Page/Role/Admin/Dashborde";
import ForgetPassword from "./Markup/Page/Common/ForgetPassword";
import Confirm from "./Markup/Page/Common/Confirm";
import NewPassword from "./Markup/Page/Common/NewPassword";
import AddUser from "./Markup/Page/Role/Admin/AddUser";
import UpdateUser from "./Markup/Page/Role/Admin/UpdateUser";
import VaccineList from "./Markup/Page/Role/Admin/VaccineList";
import UpdateChild from "./Markup/Page/Role/Reciption/UpdateChild";
import UpdateMother from "./Markup/Page/Role/Reciption/UpdateMother";
import ChooseVaccine from "./Markup/Page/Role/Reciption/ChooseVaccine";
import AddVaccine from "./Markup/Page/Role/Admin/AddVaccine";
import UpdateVaccine from "./Markup/Page/Role/Admin/UpdateVaccine";
import AddNews from "./Markup/Page/Common/AddNews";
import ChildRegstration from "./Markup/Page/Role/Reciption/ChildRegstration";

import UpdateNews from "./Markup/Page/Common/UpdateNews";
import ToastNotification from "./Markup/Component/Common/Toast/Toast";
import { useAuth } from "./Context/AuthContext";

function App() {
  const [count, setCount] = useState(0);
  const { isAdmin, isHp, isRegistrar, isMother, userData, isLoggedIn } =useAuth();
  // console.log(userData);

  return (
    <>
      <ToastNotification />
      <Routes>
        {/* For all */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/service" element={<Service />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="*" element={<FourO4 />} />

        {/* For mother */}
        <Route path="/myinfo" element={<Myinfo />} />
        <Route path="/login" element={<Login />} />

        {/* For reception */}

        <Route path="/motherRegistration" element={<MotherRegistration />} />
        <Route path="/motherlist" element={<MotherList />} />
        <Route path="/childinfo" element={<ChildInfo />} />
        <Route path="/updatechildinfo" element={<UpdateChild />} />
        <Route path="/updatemotherinfo" element={<UpdateMother />} />
        <Route path="/choosevaccine" element={<ChooseVaccine />} />
        <Route path="/childregitration" element={<ChildRegstration />} />

        {/* For Health Officer */}

        {/* For Admin */}
        <Route path="/vaccinelist" element={<VaccineList />} />
        <Route path="/alluser" element={<AllUsers />} />
        {/* <Route path="/userRegistration" element={<UserRegistration/>} /> */}
        <Route path="/dashbord" element={<Dashborde />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/updateuser" element={<UpdateUser />} />
        <Route path="/addvaccine" element={<AddVaccine />} />
        <Route path="/updatevaccine" element={<UpdateVaccine />} />
        <Route path="/addnews" element={<AddNews />} />
        <Route path="/updatenews" element={<UpdateNews />} />

        <Route path="/listvacc" element={<listofVaccines />} />
      </Routes>
    </>
  );
}

export default App;
