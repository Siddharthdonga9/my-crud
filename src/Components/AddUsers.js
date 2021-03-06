import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../Components/ShowUsers'
import { connect } from 'react-redux';
import { CreateData, EditData, DeletData } from '../Redux/Actions/Action'


function AddUsers(props) {
  const { list, dispatch } = props;

  const navigate = useNavigate();

  const [editIndex, setEditIndex] = useState(null)
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    mNumber: '',
    city: '',
    gender: '',
    hobby: [],

  });

  console.log("props---------------------------------------------------->", props);
  const handelHobbyValue = (e) => {

    let value = user.hobby || [];
    if (e.target.checked) {
      value.push(e.target.value);
    } else {
      value = user.hobby.filter((item) => item !== e.target.value);
    }
    setUser((preState) => ({
      ...preState,
      hobby: value,
    }))
  };

  const { id } = useParams();
  useEffect(() => {
    if (id) {
     
      // redux***************************
      setUser(list.Data[id])
      setEditIndex(id)
    }
  }, [id])




  const UserSubmithandler = (e) => {
    e.preventDefault();
    
    if (editIndex === null) {
      dispatch(CreateData(user))
      setEditIndex(null);
      setUser(user);
    } else {
      dispatch(EditData({ Data: user, id: editIndex }))
      list.Data[id].fname = user.fname;
      list.Data[id].lname = user.lname;
      list.Data[id].mNumber = user.mNumber;
      list.Data[id].city = user.city;
      list.Data[id].gender = user.gender;
      list.Data[id].hobby = user.hobby;
      setEditIndex(null);
      setUser(user);
    }
    // reset data 
    setUser({
      fname: '',
      lname: '',
      mNumber: '',
      city: '',
      gender: '',
      hobby: [],
    })
    navigate('/')

  }



  return (
    <>
      <h1 className='text-center'> {id ? "Edit" : "Add"} Users</h1>
      <form onSubmit={UserSubmithandler}>
        <div className="row g-3 mt-5">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              name='fname'
              onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} value={user.fname} />
          </div>
          <div className="col-6">
            <input type="text" name='lname' className="form-control" placeholder="Last name" aria-label="Last name" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} value={user.lname} />
          </div>
          <div className="col-6">
            <input type="number" name='mNumber' className="form-control" placeholder="mobile number" aria-label="mobile number" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} value={user.mNumber} />
          </div>
          <div className="col-6">

            <select name='city' onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} className="form-select" aria-label="Default select example">
              <option >City</option>
              <option value="surat">surat</option>
              <option value="Vadodra">Vadodra</option>
              <option value="Ahmdabad">Ahmdabad</option>
            </select>
          </div>
          <div className="col-6">

            <div class="form-check">

              <input class="form-check-input" type="radio" name="gender" id="male" value='male' onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} checked={user.gender === 'male' ? true : false} />
              <label class="form-check-label" for="male">
                Male
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" id="female" value='female' onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} checked={user.gender === 'female' ? true : false} />
              <label class="form-check-label" for="female">
                Female
              </label>
            </div>

          </div>
          <div className="col-6">

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="Cricket" value="Cricket" name='hobby' onChange={handelHobbyValue} checked={user && user.hobby.filter((e) => (e === "Cricket"))[0] === 'Cricket' ? true : false} />
              <label className="form-check-label" for="Cricket">Cricket</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="Football" value="Football" name='hobby' onChange={handelHobbyValue} checked={user && user.hobby.filter((e) => (e === "Football"))[0] === 'Football' ? true : false} />
              <label className="form-check-label" for="Football">Football</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="Hokey" value="Hokey" name='hobby' onChange={handelHobbyValue} checked={user && user.hobby.filter((e) => (e === "Hokey"))[0] === 'Hokey' ? true : false} />
              <label className="form-check-label" for="Hokey">Hokey</label>
            </div>

          </div>
        </div>
        <button type="submit" class="btn btn-primary mt-4 mx-3" >Submit</button>
      </form>

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};
export default connect(mapStateToProps)(AddUsers);