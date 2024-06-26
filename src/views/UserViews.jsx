import { Routes, Route, Outlet } from "react-router-dom";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { DropdownPage } from "../components/dropdown/DropdownPage.jsx";
import { Login } from "../components/auth/Login.jsx";
import { Register } from "../components/auth/Register.jsx";
import { ResultsList } from "../components/results/ResultsList.jsx";

export const UserViews = (currentUser) => {

  return (
    <Routes>
    <Route path="/" 
          element={
    <>
      <Outlet />
    </>
    }> 
      <Route index element={<Welcome />} />

    </Route>
    <Route path="/Dropdown" element={<DropdownPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/results/:resultId" element={<ResultsList />} />
  </Routes>
    )
}