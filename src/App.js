import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/Topbar";
import './app.css'


function App() {
  return (
    <div className="App">
     <TopBar/>
     <div className="container">
       <Sidebar/>
       <div className="others">Other Pages</div>
     </div>
    </div>
  );
}

export default App;
