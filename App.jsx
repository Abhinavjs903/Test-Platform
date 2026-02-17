import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import ProfileSetup from "./pages/ProfileSetup";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";
import Result from "./pages/Result";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/setup" element={<ProfileSetup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/test" element={<Test />} />
      <Route path="/result" element={<Result />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
