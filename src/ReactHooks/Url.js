import React from 'react'
import CustemHooks from './CustemHooks';

const Url = () => {
    const [data] = CustemHooks("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
    <h1>CustemHooks</h1>
    {data &&
      data.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
  </>
  )
}

export default Url