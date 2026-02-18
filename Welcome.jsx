import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Welcome to Marks AI
      </motion.h1>

      <p>Practice. Analyze. Improve.</p>
      <br />
      <button className="btn" onClick={() => navigate("/setup")}>
        Login with Google
      </button>
    </div>
  );
}

export default Welcome;
