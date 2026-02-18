import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ProfileSetup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  return (
    <div className="container">
      <h2>Complete Your Profile</h2>

      <input
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select>
        <option>Semester 1</option>
        <option>Semester 2</option>
        <option>Semester 3</option>
      </select>

      <select>
        <option>MAIT</option>
        <option>MSIT</option>
        <option>USICT</option>
      </select>

      <button className="btn" onClick={() => navigate("/dashboard")}>
        Continue
      </button>
    </div>
  );
}

export default ProfileSetup;
