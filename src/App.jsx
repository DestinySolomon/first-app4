import "./App.css";
import Students from "./components/Students.jsx";

function App() {
  return (
    <>
      <h1>Today's Class</h1>
      

      <h2>Props and Proptype</h2>

      <Students name="Dee" age={20} isLoggedin={false} />
    </>
  );
}

export default App;
