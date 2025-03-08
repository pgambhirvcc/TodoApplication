import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DummyPage } from "./pages/DummyPage";

function App() {
  return (
   <Routes>
      <Route path="/dummy" element={<DummyPage />} />
   </Routes>
  );
}

export default App;
