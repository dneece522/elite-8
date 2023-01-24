const Teams = (props) => {
  return (
    < >
      <h2>Teams in the Elite 8:</h2>
      <ul>
        {props.teams.map(team =>
          <li>
            {team.name} is a {team.seed} seed, who plays in the {team.conference}, and is {team.blueBlood ? "" : "not"} a blueblood.
          </li>
        )}
      </ul>
    </>
  )
}

export default Teams