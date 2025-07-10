 
import EmployeeCard from "../POC/EmployerCard";

function EmployeeList() {
  const employees = [
    { id: 1, name: "Kiruthika", designation: "Software Engineer", department: "IT", experience: 3 },
    { id: 2, name: "Amirtha Varsheni", designation: "Senior Developer", department: "IT", experience: 7 },
    { id: 3, name: "Sri Madhumitha", designation: "HR Manager", department: "HR", experience: 6 },
    { id: 4, name: "Varsha", designation: "Marketing Lead", department: "Marketing", experience: 2 },
    { id: 5, name: "Harsit", designation: "Product Owner", department: "Product", experience: 8 },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Employee Dashboard</h1>
      <div className="containerStyle">
        {employees.map((data:any) => (
          <EmployeeCard
            key={data.id}
            name={data.name}
            designation={data.designation}
            department={data.department}
            experience={data.experience}
          />
        ))}
      </div>

      <style>
        { ` .containerStyle  {
                    display: flex;
                    flexWrap: wrap;
                    gap: 16px; 
                    justifyContent: center
                    maxWidth: 900px;
                    margin: 0 auto;
                    padding: 20px;
                }
            `
        }
      </style>
    </div>
  );
}

export default EmployeeList;
