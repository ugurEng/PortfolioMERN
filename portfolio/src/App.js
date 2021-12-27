import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './Pages/Home';
import Mentoring from "./Pages/Mentoring";
import Mernstack from './Pages/CommercialProjects';
import Login from './Pages/Login';
import AddProject from './Dasboard/AddProject';
import Projects from './Pages/Projects';
import AdminMentoring from './Dasboard/AdminMentoring';
import AdminMERN from './Dasboard/AdminMERN';
import AdminShopify from './Dasboard/AdminShopify';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Projects.js" exact component={Projects}/>
          <Route path="/Mentoring.js" component={Mentoring}/>
          <Route path="/Login.js" component={Login}/>
          <Route path="/Mernstack.js" component={Mernstack}/>
          <Route path="/AddProject.js" component={AddProject}/>
          <Route path="/AdminMentoring.js" component={AdminMentoring}/>
          <Route path="/AdminMERN.js" component={AdminMERN}/>
          <Route path="/AdminShopify.js" component={AdminShopify}/>
          
        </Switch>
      </div>
    </Router>
  );
}

      
    

export default App;
