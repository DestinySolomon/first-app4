
function Students(props){
return(
    <>
    <div>Students Components</div>
    <h3>{props.name}</h3>
    <h3>{props.age}</h3>
    <h3>{props.isLoggedin ? "Yes" : "No"}</h3>
       
    </>
)
}

export default Students;