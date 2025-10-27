import "./App.css";
import Students from "./Students";
import data from "./components/data.js";

function App2(){
    return(
        <>



         <div>
        <h2>User Lists</h2>
        {data.map((user) => (
          <div
            key={user.id}
            style={{
              border: "2px solid grey",
              padding: "12px",
              marginBottom: "5px",
            }}
          >
            <h2>{user.name}</h2>
            <img
              style={{ borderRadius: "100px", height: "100px" }}
              src={user.imgSrc}
            ></img>
            <p>
              <strong>{user.company}</strong>
            </p>
            <p>
              <strong>{user.username}</strong>
            </p>
            <p>
              <strong>{user.email}</strong>
            </p>
            <p>
              <strong>{user.country}</strong>
            </p>
            <p>
              <strong>{user.phone}</strong>
            </p>
          </div>
        ))}

        
      </div>
       
        </>
    )
}

export default App2;