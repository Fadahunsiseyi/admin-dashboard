import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/Topbar";
import './app.css'
import Home from "./components/pages/home/Home";


function App() {
  return (
    <div className="App">
     <TopBar/>
     <div className="container">
       <Sidebar/>
       <Home/>
     </div>
    </div>
  );
}

export default App;
