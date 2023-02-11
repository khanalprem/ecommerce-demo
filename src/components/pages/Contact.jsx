import React, { useState } from 'react'
import {BiPlusCircle, BiTrash} from  "react-icons/bi";

const Contact = () => {
  const [name, setName] = useState();
  const [email , setEmail] = useState();
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data,{name,email}]);
  }
  const removeData = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }
  return (
    <>
    <div className="container">
      <div className="is-flex col-gap-16 is-center mb-24">
        <input className="" type= "text" value={name} name="" onChange={(e) => setName(e.target.value)}/>
        <input className="" type="email" value={email} name="" onChange={(e) => setEmail(e.target.value)} />
        <button className="btn btn-sm btn-secondary" onClick={() => addData()}>{BiPlusCircle}</button>
      </div>

      {data.length ? data.map((item,index) => {
        return (
          <ul className="fs-h3 ff-medium is-flex is-between is-align-center col-gap-40 user-list" key={index} >
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li ><BiTrash onClick={() => removeData(index)}/></li>
          </ul>
        )
      }) : null}
    </div>
      
    </>
  )
}

export default Contact