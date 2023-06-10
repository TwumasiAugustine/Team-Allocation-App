import femaleProfile from "./assets/femaleProfile.png";
import maleProfile from "./assets/maleProfile.png";

const TeamMemberCard = ({employee, selectedTeam, handleEmployeeCardClick}) => {

    return (
        <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ?
            "card m-2 p-3 standout " : "card m-2 p-3")} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
            {(employee.gender === "male") ? <img src={maleProfile} className='card-img-top'  alt='male profile'/>
            : <img src={femaleProfile} className='card-img-top' alt='female profile'/>}
            <div className='card-body'>
                <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                <p className='card-text'><b>Designation: </b> { employee.designation }</p>
            </div>
        </div>
    )
}
export default TeamMemberCard;