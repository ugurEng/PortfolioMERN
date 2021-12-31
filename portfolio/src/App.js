import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './Pages/Home';
import Coaching from "./Pages/Coaching";
import Commercial from './Pages/CommercialProjects';
import Login from './Pages/Login';
import AddProject from './Dasboard/AddProject';
import Projects from './Pages/Projects';
import AdminMentoring from './Dasboard/AdminMentoring';
import AdminMERN from './Dasboard/AdminMERN';
import AdminShopify from './Dasboard/AdminShopify';
import ContactUs from './Pages/ContactUs';
import AboutMe from './Pages/AboutMe';
import Services from './Pages/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Projects.js" exact component={Projects}/>
          <Route path="/Coaching.js" component={Coaching}/>
          <Route path="/Login.js" component={Login}/>
          <Route path="/Commercial.js" component={Commercial}/>
          <Route path="/AddProject.js" component={AddProject}/>
          <Route path="/AdminMentoring.js" component={AdminMentoring}/>
          <Route path="/AdminMERN.js" component={AdminMERN}/>
          <Route path="/AdminShopify.js" component={AdminShopify}/>
          <Route path="/ContactUs.js" component={ContactUs}/>
          <Route path="/AboutMe.js" component={AboutMe}/>
          <Route path="/Services.js" component={Services}/>
          
        </Switch>
      </div>
    </Router>
  );
}

      
    

export default App;
