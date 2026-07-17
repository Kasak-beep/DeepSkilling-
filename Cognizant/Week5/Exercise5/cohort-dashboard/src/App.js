import CohortDetails from "./Components/CohortDetails";
import cohorts from "./cohorts";

function App() {
  return (
    <div>
      <h1>Cognizant Cohort Dashboard</h1>

      {cohorts.map((cohort) => (
        <CohortDetails key={cohort.id} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
