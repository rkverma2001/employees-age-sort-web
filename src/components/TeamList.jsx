import "./TeamList.css";

const TeamList = ({
  teamMembers,
  removeFromTeam,
  averageAge,
  sortTeamByAge,
}) => {
  return (
    <div className="team-container">
      <h2>Team Members</h2>
      <button onClick={sortTeamByAge} className="sort-button">
        SORT BY AGE
      </button>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id} className="team-card">
            <p>
              {member.first_name} {member.last_name} - {member.age} years
            </p>
            <button
              onClick={() => removeFromTeam(member)}
              className="remove-button"
            >
              REMOVE
            </button>
          </li>
        ))}
      </ul>
      <p className="average-age">Average Age: {averageAge}</p>
    </div>
  );
};

export default TeamList;
