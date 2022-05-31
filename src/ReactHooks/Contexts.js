import React,{createContext, useState,useContext}from 'react'

const userContext = createContext();
const Contexts = () => {
    const [UserDetail,SetUserDetail]=useState("Henry Dyson")
  return (
    <userContext UserDetail={UserDetail}>
      <div>       
        <h1>My Profil</h1>
        <p>Name:{UserDetail}</p>
        {console.log(UserDetail,"Name")}
        <ChildA UserDetail={UserDetail}/>
    </div>
    </userContext>
    
  )
}
 const ChildA = (props) => {
  return (
    <div>
        <h1>ChildA components</h1>
        <p>Who are you:{props.UserDetail}</p><br/>
        <ChildB UserDetail={props.UserDetail}/>
    </div>
  )
}
 const ChildB = (props) => {
  return (
    <div>
        <h1>ChildB components</h1>
        <p>My Name is :{props.UserDetail}</p>
        {  console.log(props.UserDetail,"childB")
}
<ChildC/>
    </div>
  )
}

const ChildC = (props) => {
  const user = useContext(userContext);
  console.log(userContext,"c com")
  return (
    <div>
        <h1>Child"C" components</h1>
        <p>{props.user}</p>
        {console.log(user,"user")}
        </div>
  )
}


export default Contexts