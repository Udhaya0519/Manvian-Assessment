import { Route, Routes } from "react-router-dom"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import RegisterPage from "./pages/RegisterPage"
import ApplyLeavePage from "./pages/ApplyLeavePage"
import UsersPage from "./pages/UsersPage"


function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route index element={<Hero />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/users" element={<UsersPage />}/>
          <Route path="/apply-leave" element={<ApplyLeavePage />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
