

const Championship = (props) => {
  return (
    < >
      <h3>Championship:</h3>
      <ul>
        <li>
          {props.teams[1].seed}. {props.teams[1].name} vs. {props.teams[3].seed}. {props.teams[3].name}
        </li>
      </ul>
    </>
  )
}

export default Championship