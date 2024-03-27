import "./EmployeesList.css";

const EmployeeList = ({ employees, addToTeam }) => {
  return (
    <div className="employee-container">
      <h2>Employees List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id} className="card">
            <p>
              {employee.first_name} {employee.last_name} - {employee.age} years
            </p>
            <button
              onClick={() => addToTeam(employee)}
              disabled={employee.disabled}
              className={`button ${employee.disabled ? "disabled" : ""}`}
            >
              ADD
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
