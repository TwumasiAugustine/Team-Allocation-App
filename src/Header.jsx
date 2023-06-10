const Header = ({selectedTeam, teamMemberCount}) => {
    return (
        <div className='container justify-content-center text-center'>
            <h2 className="h1 m-2">Team Member Allocation</h2>
            <span className='h3 m-2 p-3'>
                {selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? "Member" : "Members"}
            </span>
        </div>
    )
}

export default Header;