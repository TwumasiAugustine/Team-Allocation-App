
import TeamMemberCard from "./TeamMemberCard";
const TeamMembers = ({ employees, handleEmployeeCardClick, selectedTeam}) => {

    return (
        < >
            {
                employees.map((employee) => 
                    <TeamMemberCard key={employee.id} employee={employee} selectedTeam={selectedTeam} handleEmployeeCardClick={ handleEmployeeCardClick} />
                )
            }
        </>
    )
}

export default TeamMembers