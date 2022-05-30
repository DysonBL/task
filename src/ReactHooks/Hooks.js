import React, { useEffect, useState,createContext} from 'react'
import { Button } from 'react-bootstrap'
import "./Hooks.css"
import UseContexts from "./UseContexts";

 const Hooks = () => {
     const [Name,setName]=useState('')    //useState Hooks
     const [Age,setAge] =useState(0)
     
     const userContext = createContext('')

     const nameChane=()=>{
         setName("Henry")
     }
     const nameClear=()=>{
         setName("")
         setAge('')
     }
     const incAge=()=>{
         setAge((c)=>c+1)
     }
     useEffect(()=>{                        //useEffect Hooks
      setAge(()=> Age+23)
     },[])
  return (
    <div>
        <h1>Learn React Hooks</h1>
        <h3>My Name is:<p>{Name}</p></h3><br/>
        <h3>Age:<p>{Age}</p></h3>
<UseContexts/>
        <div>
        <Button className ="change"onClick={nameChane}>Chanege</Button>
        <Button className ="clear"onClick={incAge}>Age</Button>
        <Button className ="clear"onClick={nameClear}>Clear</Button>

        </div>
       
    </div>
  )
}


export default Hooks