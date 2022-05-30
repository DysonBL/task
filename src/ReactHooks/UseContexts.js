import React,{useState}from 'react'
import Hooks from './Hooks'

const UseContexts = () => {
    const [UserDetail,SetUserDetail]=useState({
        name:"Henry",
        age:"23"
    })
  return (
    <div>
        <h1>My Profil</h1>
        <p>{UserDetail}</p>
        <Hooks UserDetail={UserDetail}/>

    </div>
  )
}
 export const ChildA = (props) => {
  return (
    <div>
        <h1>ChildA components</h1>
        <UseContexts UserDetail={props.UserDetail}/>

    </div>
  )
}

export const ChildB = (props) => {
  return (
    <div>
        <h1>ChildB components</h1>
        <p>My Name is :{props.name}</p>
        <p>My Age is: {props.age}</p>
    </div>
  )
}


export default UseContexts