
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CreateData, EditData, DeletData } from '../Redux/Actions/Action'
import { connect } from 'react-redux';
 function ShowUsers(props) {
  const [fdata, setFdata] = useState([])

  
  

  const navigate = useNavigate();
const { list, dispatch } = props;
console.log("list Data----------------------------->",props.list.Data);
  console.log("props------------------------------------------->Show User",props);


  const handleDelete = (i) => {
    props.list.Data.splice(i, 1);
    setFdata(props.list.Data);
    dispatch(DeletData(props.list.Data));
  };


  
  const Edit = (i) => {
   console.log(props.list.Data[i]);
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

props.list.Data.length > 0 && props.list.Data.map((dd, i) => (

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

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};
export default connect(mapStateToProps)(ShowUsers);

