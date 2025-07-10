interface EmployeeCardProps {
  name: string;
  designation: string;
  department: string;
  experience: number;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, designation, department, experience }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: experience > 5 ? "rgba(255, 165, 0, 0.08)" : "rgba(255, 255, 255, 0.05)", 
    boxShadow: experience > 5 ? "0 0 10px #333" : "none",
    width: "250px",       
    color: "white",   
    boxSizing: "border-box",
  };

  return (
    <><div style={cardStyle}>
      <h3>{name}</h3>
      <p><strong>Designation:</strong> {designation}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Experience:</strong> {experience} {experience > 1 ? "Years" : "Year"}</p>
    </div>
    </>
  );
}

export default EmployeeCard;
