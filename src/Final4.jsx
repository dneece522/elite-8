import Championship from "./Championship"

const Final4 = (props) => {
  return (
    < >
      <h3>Final 4 Matchups:</h3>
      <ul>
        <li>
          <strong>
            {props.teams[1].seed}. {props.teams[1].name} 
          </strong> vs. {props.teams[5].seed}. {props.teams[5].name}
        </li>
        <li>
          <strong>
            {props.teams[3].seed}. {props.teams[3].name} 
          </strong> vs. {props.teams[7].seed}. {props.teams[7].name}
        </li>
      </ul>
      <div><Championship teams={props.teams}/></div>
    </>
  )
}

export default Final4