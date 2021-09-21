import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/Topbar";
import './app.css'
import Home from "./components/pages/home/Home";
import UserList from "../src/components/pages/userList/UserList";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from "./components/pages/user/User";


function App() {
  return (
    <Router className="App">
     <TopBar/>
     <div className="container">
       <Sidebar/>
       <Switch>
         <Route exact path="/">
         <Home/>
         </Route>
         <Route path="/users">
         <UserList/>
         </Route>
         <Route path="/user/">
         <User/>
         </Route>
       </Switch>
     </div>
    </Router>
  );
}

export default App;
