import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DummyPage } from "./pages/DummyPage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";

function App() {
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
