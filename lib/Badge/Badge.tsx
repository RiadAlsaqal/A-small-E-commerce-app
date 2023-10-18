import "./Badge.css";

const Badge = ({ label, children, color }) => {
  return (
    <div className="badge-container">
      <div className="badge" style={{ backgroundColor: color }}>
        {label}
      </div>
      <div className="badge-children">{children}</div>
    </div>
  );
};

export default Badge;
