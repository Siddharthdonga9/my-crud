import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../Components/ShowUsers'


export default function AddUsers() {
  // all fields data to pass array to object 
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fname: '',
    lname: '',
    mNumber: '',
    city: '',
    gender: '',
    hobby: [],

  });
  // hobby




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
      let obj = JSON.parse(localStorage.getItem('Users'));
      console.log("________________________", obj[id]);
      setUser({
        fname: obj[id].fname,
        lname: obj[id].lname,
        mNumber: obj[id].mNumber,
        city: obj[id].city,
        gender: obj[id].gender,
        hobby: obj[id].hobby,

      })
      
     


    }
  }, [id])

  // const hobbyData = () => {

  //   let checklist = document.getElementsByName('hobby');
  //      checklist.forEach((item, i) => {
  //      user.hobby.forEach((element) => {
  //         if (item.value === element) {
  //           document.getElementById(item.id).checked = true;
  //         }
  //       })

  //     })

  // }


  const UserSubmithandler = (e) => {
    e.preventDefault();
    // creating object 
    // props.history.push({
    //   pathname: "/showUsers",
    //   user
    // });
    // es6 use the object only key (key and value same hoy tyare khali key ne use kari shakiae 6iae )
    // let data ={
    //   fname,
    //   lname,
    //   mNumber
    // }

    //  setUser(data);



    // setFname('');
    // setLname('');
    // setMnumber('');
    navigate('/')

    //  localStorage.setItem('Users',JSON.stringify([...user,data]))
    //  
    if (id == null) {
      const fieldValue = localStorage.getItem('Users');
      // console.log({ fieldValue });
      const items = (() => {
        return (fieldValue === null)
          ? []
          : JSON.parse(fieldValue);
      })();
      if (fieldValue !== null) {

        setUser(user);
      }
      items.push(user);
      localStorage.setItem('Users', JSON.stringify(items));
    }

    else {

      let UpdateData = JSON.parse(localStorage.getItem('Users'))
      // console.log("UpdateData",UpdateData);
      UpdateData[id].fname = user.fname;
      UpdateData[id].lname = user.lname;
      UpdateData[id].mNumber = user.mNumber;
      UpdateData[id].city = user.city;
      UpdateData[id].gender = user.gender;
      UpdateData[id].hobby = user.hobby;
      localStorage.setItem('Users', JSON.stringify(UpdateData))


    }
    // reset data 
    setUser({
      fname: '',
      lname: '',
      mNumber: '',
      city: '',
      gender: '',
    })

    // edit

  }



  return (
    <>
      <h1 className='text-center'>Add Users</h1>
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
            <input type="text" name='mNumber' className="form-control" placeholder="mobile number" aria-label="mobile number" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} value={user.mNumber} />
          </div>
          <div className="col-6">

            <select name='city' onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} className="form-select" aria-label="Default select example">
              <option >City</option>
              <option  value="surat">surat</option>
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
              <input className="form-check-input" type="checkbox" id="Cricket" value="Cricket" name='hobby' onChange={handelHobbyValue} checked={user&&user.hobby.filter((e)=>(e==="Cricket"))[0]==='Cricket'?true:false}/>
              <label className="form-check-label" for="Cricket">Cricket</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="Football" value="Football" name='hobby' onChange={handelHobbyValue} checked={user&&user.hobby.filter((e)=>(e==="Football"))[0]==='Football'?true:false}/>
              <label className="form-check-label" for="Football">Football</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="Hokey" value="Hokey" name='hobby' onChange={handelHobbyValue} checked={user&&user.hobby.filter((e)=>(e==="Hokey"))[0]==='Hokey'?true:false} />
              <label className="form-check-label" for="Hokey">Hokey</label>
            </div>

          </div>
        </div>
        <button type="submit" class="btn btn-primary mt-4 mx-3" >Submit</button>
      </form>

    </>
  )
}
