import React from 'react'
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../API/api'

function Assignment() {


  const AssignmnetSignout = () =>{
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
   
  }

  }

  
    console.log(isAuthenticated())
    return (
      <>
      {isAuthenticated()?(
      <div>

<button style={{ fontSize: 18, backgroundColor: "#990099", color: "white", borderRadius: 5, border: "none", alignItems: "right", cursor: "pointer", float: "right" }} onClick={() => AssignmnetSignout()}>Logout</button>


      </div>
      ):(<>
      
        <div>
          You are Logout 
        </div>
        <div>
          <Link to="/">Login</Link>
        </div>
      
      </>)
      }
      </>
    )
}

export default Assignment