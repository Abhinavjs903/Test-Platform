import Sidebar from "../components/Sidebar";
import ProgressCard from "../components/ProgressCard";

function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <h2>Dashboard</h2>
        <ProgressCard />
      </div>
    </div>
  );
}

export default Dashboard;
