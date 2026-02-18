function ProgressCard() {
  return (
    <div className="card">
      <h3>Daily Goal</h3>
      <p>10 / 30 Questions</p>
      <div style={{
        height: "10px",
        background: "#334155",
        borderRadius: "5px",
        marginTop: "10px"
      }}>
        <div style={{
          width: "30%",
          height: "100%",
          background: "#3b82f6",
          borderRadius: "5px"
        }} />
      </div>
    </div>
  );
}

export default ProgressCard;
