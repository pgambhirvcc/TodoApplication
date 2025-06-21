import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { DummyPage } from "./pages/DummyPage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const isUserAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  //   if (!isUserAuthenticated) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <Routes>
      <Route path="/dummy" element={<DummyPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
