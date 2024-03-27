import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import TeamList from "./TeamList";
import { employees } from "../data/data";

const Employees = () => {
  const [allEmployees, setAllEmployees] = useState(employees);
  const [teamMembers, setTeamMembers] = useState([]);
  const [averageAge, setAverageAge] = useState(0);

  const addToTeam = (employee) => {
    const updatedEmployees = allEmployees.map((emp) => {
      if (emp.id === employee.id) {
        return { ...emp, disabled: true };
      }
      return emp;
    });

    setAllEmployees(updatedEmployees);
    setTeamMembers([...teamMembers, employee]);
    updateAverageAge([...teamMembers, employee]);
  };

  const removeFromTeam = (member) => {
    const updatedTeam = teamMembers.filter((emp) => emp.id !== member.id);
    const updatedEmployeeList = allEmployees.map((emp) => {
      if (emp.id === member.id) {
        return { ...emp, disabled: false };
      }
      return emp;
    });

    setAllEmployees(updatedEmployeeList);
    setTeamMembers(updatedTeam);
    updateAverageAge(updatedTeam);
  };

  const updateAverageAge = (members) => {
    const totalAge = members.reduce((sum, member) => sum + member.age, 0);
    const avg = members.length > 0 ? totalAge / members.length : 0;
    setAverageAge(avg.toFixed(2));
  };

  const sortTeamByAge = () => {
    const sortedTeam = [...teamMembers].sort((a, b) => a.age - b.age);
    setTeamMembers(sortedTeam);
    updateAverageAge(sortedTeam);
  };

  return (
    <div style={{ display: "flex" }}>
      <EmployeeList employees={allEmployees} addToTeam={addToTeam} />
      <TeamList
        teamMembers={teamMembers}
        removeFromTeam={removeFromTeam}
        averageAge={averageAge}
        sortTeamByAge={sortTeamByAge}
      />
    </div>
  );
};

export default Employees;
