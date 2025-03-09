import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DummyPage } from "./pages/DummyPage";
import { SignupPage } from "./pages/SignupPage";

function App() {
  return (
   <Routes>
      <Route path="/dummy" element={<DummyPage />} />
      <Route path="/signup" element={<SignupPage />} />
   </Routes>
  );
}

export default App;
