import "./App.css";
import Students from "./components/Students.jsx";
import StaffCard from "./components/StaffCard.jsx";
import Staffprofiles from "./components/staffdata.js"


function App() {
 return(
<div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-10 px-5">

  <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
    Mita School Amazing Staff
  </h1>

  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

    {Staffprofiles.map((staff, index) => (
      <><StaffCard key={index} staff={staff} /></>
    ))}
  </div>
</div>



 );
}
export default App;
 