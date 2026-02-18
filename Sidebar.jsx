import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Home</Link><br /><br />
      <Link to="/test">Tests</Link><br /><br />
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Sidebar;
