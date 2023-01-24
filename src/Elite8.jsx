import Final4 from "./Final4"

const Elite8 = (props) => {
  return (
    < >
      <h3>Elite 8 Matchups:</h3>
      <ul>
        <li>
          {props.teams[0].seed}. {props.teams[0].name} vs. 
          <strong>
            {props.teams[1].seed}. {props.teams[1].name}
          </strong>
        </li>
        <li>
          {props.teams[2].seed}. {props.teams[2].name} vs. 
          <strong>
            {props.teams[3].seed}. {props.teams[3].name}
          </strong>
        </li>
        <li>
          {props.teams[4].seed}. {props.teams[4].name} vs. 
          <strong>
            {props.teams[5].seed}. {props.teams[5].name}
          </strong>
        </li>
        <li>
          {props.teams[6].seed}. {props.teams[6].name} vs. 
          <strong>
            {props.teams[7].seed}. {props.teams[7].name}
          </strong>
        </li>
      </ul>
      <div><Final4 teams={props.teams}/></div>
    </>
  )
}

export default Elite8