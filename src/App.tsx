import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Project from "./pages/Project/Project";
import Dashboard from "./pages/Dashboard/Dashboard";
import LegalMentions from "./pages/LegalMentions/LegalMentions";
import UserProfile from "./pages/UserProfile/UserProfile";
import Navbar from "./components/Navbar";
import Step from "./pages/Step/Step";
import Task from "./pages/Task/Task";
import Members from "./pages/Members/Members";
import Purchases from "./pages/Purchases/Purchases";
import Documents from "./pages/Documents/Documents";

export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard:/idUser" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:idProject/documents" element={<Documents />} />
        <Route path="/project/:idProject/purchases" element={<Purchases />} />
        <Route path="/project/:idProject/members" element={<Members />} />
        <Route path="/project/:idProject/step/:idStep" element={<Step />} />
        <Route path="/project/:idProject/step/:idStep/task/:idTask" element={<Task />} />
        <Route path="/legal-mentions" element={<LegalMentions />} />
        <Route path="/profile/:idProfile" element={<UserProfile />} />
      </Routes>
    </>
  )
}
