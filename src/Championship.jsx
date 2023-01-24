import Champion from "./Champion"

const Championship = (props) => {
  return (
    < >
      <h3>Championship:</h3>
      <ul>
        <li>
          {props.teams[1].seed}. {props.teams[1].name} vs. 
          <strong>
            {props.teams[3].seed}. {props.teams[3].name}
          </strong>
        </li>
      </ul>
      <div><Champion teams={props.teams}/></div>
    </>
  )
}

export default Championship