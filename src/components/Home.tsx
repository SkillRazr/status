
import { useNavigate } from "react-router-dom"
import "../App.css"
export default function Home(){
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/status");
  }
    return(
        <>
        <h1>Open Source Status Page</h1>
        <div className="card">
          <button style={{color:"#FF66AF"}} onClick={handleClick}>
            Click Here
          </button>
        </div>
        <p className="read-the-docs">
        A status page on a website serves as a communication tool to inform users about the current operational status of the website or service. It typically includes information about any ongoing incidents, planned maintenance, and historical uptime data.
        </p>
      </>
    )
}