import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import '../Components/ShowUsers'


export default function AddUsers(props) {
  // all fields data to pass array to object 
const navigate = useNavigate();

  const [user, setUser] = useState({
    fname: '' ,
    lname: '',
    mNumber: ''
  });

  const {id} = useParams();
  useEffect(()=>{
    if(id){
      let obj = JSON.parse(localStorage.getItem('Users'));
      console.log("________________________",obj[id]);
      setUser({
     fname: obj[id].fname,
    lname: obj[id].lname,
    mNumber: obj[id].mNumber
      })

    }
  },[id])
  

  // input field states 
  // const [fname,setFname]=useState('');
  // const[lname,setLname]=useState('');
  // const[mNumber,setMnumber]=useState('');

  // submit handler events 

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
if(id==null){ 
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

  else{

let UpdateData=JSON.parse(localStorage.getItem('Users'))
// console.log("UpdateData",UpdateData);
UpdateData[id].fname=user.fname;
UpdateData[id].lname=user.lname;
UpdateData[id].mNumber=user.mNumber;
localStorage.setItem('Users',JSON.stringify(UpdateData))


  }
    // reset data 
    setUser({
      fname: '',
      lname: '',
      mNumber: ''
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
          <div className="col-3">


            
          </div>
        </div>
        <button type="submit" class="btn btn-primary mt-4 mx-3" >Submit</button>
      </form>

    </>                                                                         
  )
}
