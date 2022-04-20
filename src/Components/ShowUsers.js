// import React, { useEffect, useState } from 'react'
// // import { useNavigate } from 'react-router';

// export default function ShowUsers() {
//   const [fdata,setFdata] = useState([])

//   // const data = JSON.parse(localStorage.getItem("Users"))
//   // setFdata(data);
//   // console.log({fdata});

//   useEffect(()=>{
//     const data = JSON.parse(localStorage.getItem("Users"))
//     setFdata(data);
//   },[])
//   return (
//     <>
//     <h1> aaaaaaaaaaaaaaaaaaaaaaaaaaa </h1>

//    {/* {fdata && !fdata === undefined && fdata.map((data, i) => { 
//      <h2>
//        {data.fname}
//      </h2>
//    })} */}

//     </>
//   )
// }

// secound trick to push data history and location to acc.. data 
// import React from 'react'

// export default function ShowUsers(props) {

//   const { fname, lname, mNumber } =
//     (props.location && props.location.state) || {};
//   return (
//     <div>




import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ShowUsers() {
  const [fdata, setFdata] = useState([])
  const [Delete, setDelete] = useState(false)
  
const navigate = useNavigate();
// const params =useParams();
  
  useEffect(() => {
     const data = JSON.parse(localStorage.getItem("Users"))
    setFdata(data);
    console.log(data);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Users"))
   setFdata(data);
   setDelete(false)
 }, [Delete]);

  const handleDelete = (i) => {
    fdata.splice(i, 1);
    setFdata(fdata);
    setDelete(true)
    localStorage.setItem("Users", JSON.stringify(fdata))
  };


  
  const Edit = (i) => {
   console.log(fdata[i]);
   navigate(`/fillData/${i}`)
   
  }



  return (
    <div>
      <table class="table">
        <thead>
          <tr>

            <th scope="col">fname</th>
            <th scope="col">Lastname</th>
            <th scope="col">mobileNumber:</th>
            <th scope="col">City</th>
            <th scope="col">gender</th>
            <th scope="col">hobby</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
      </table>
      {

fdata.length > 0 && fdata.map((dd, i) => (

          <table class="table">

            <tbody>
              <tr>
                <td>{dd.fname}</td>
                <td>{dd.lname}</td>
                <td>{dd.mNumber}</td>
                <td>{dd.city}</td>
                <td>{dd.gender}</td>
                <td>{dd.hobby}</td>
                <td> <button className='btn btn-danger' onClick={() => handleDelete(i)}>Delete</button> 
                <button className='btn btn-warning mx-2'onClick={() => Edit(i)}>Edit</button>
                
                </td>
              </tr>
            </tbody>
          </table>
        )
        )
      }

    </div>
  )
}


