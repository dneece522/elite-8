

const Final4 = (props) => {
  return (
    < >
      <h3>Final 4 Matchups:</h3>
      <ul>
        <li>
          {props.teams[1].seed}. {props.teams[1].name} vs. {props.teams[5].seed}. {props.teams[5].name}
        </li>
        <li>
          {props.teams[3].seed}. {props.teams[3].name} vs. {props.teams[7].seed}. {props.teams[7].name}
        </li>
      </ul>
    </>
  )
}

export default Final4