function CoreConcepts(props) {
  return (
    <li>
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.title}></img>
      <p>{props.description}</p>
    </li>
  );
}

export default CoreConcepts;
