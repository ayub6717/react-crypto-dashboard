import Sidebar from "./layout/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Markets from "./pages/Markets";
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="md:ml-[19.2rem] bg-[#F0F8FF] px-[34px] min-h-[calc(100vh-98px)]">
          <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/markets" element={<Markets />} />
              <Route exact path="/transactions" element={<Transactions />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/setting" element={<Setting />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
