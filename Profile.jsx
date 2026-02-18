import Sidebar from "../components/Sidebar";

function Profile() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <h2>Profile</h2>
        <p>Name: Abhinav</p>
        <p>Semester: 3</p>
        <p>College: MAIT</p>
      </div>
    </div>
  );
}

export default Profile;
