import "../Stylesheets/mystyle.css";

function CalculateScore(props) {
  const average = props.Total / props.goal;

  return (
    <div className="box">
      <h1>Student Score Calculator</h1>

      <p><strong>Name:</strong> {props.Name}</p>
      <p><strong>School:</strong> {props.School}</p>
      <p><strong>Total Score:</strong> {props.Total}</p>
      <p><strong>Goal:</strong> {props.goal}</p>

      <h2>Average Score = {average}</h2>
    </div>
  );
}

export default CalculateScore;
