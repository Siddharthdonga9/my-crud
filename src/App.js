import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AddUsers from './Components/AddUsers';

import ShowUsers from './Components/ShowUsers';

function App() {
  return (
<>
 
<Router>
            <Navbar/>
            <Routes>
                <Route  path='/fillData/:id' element={<AddUsers/>}  exact> </Route>
                <Route  path='/fillData' element={<AddUsers/>}  exact> </Route>
                <Route path='/' element={<ShowUsers/>} exact> </Route>
          
                
        </Routes>
        </Router>
 

 
 </>
  );
}

export default App;
