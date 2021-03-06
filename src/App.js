import React from 'react'
import './App.css';
 import NavBar from './components/NavBar';
 import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
  import Home from './components/Pages/Home/Home';
  import Companies from './components/Pages/Companies/Companies';
  import Answers from './components/Pages/Answers/Answers';
  import Notification from './components/Pages/Notification/Notification';
  import Login from './components/Pages/Login/Login';
  import Profile from './components/Pages/Profile/Profile';
  import SearchBar from './components/Pages/SearchBar';
 
function App() {
  // const [progress, setProgress] = useState(0);
  return (
    <div className="App">
       <Router>
           <NavBar/>
           <Home />
             <Switch>
                 <Route path="/home"><Home  /></Route>
                 <Route exact path="/companies"><Companies/></Route>
                 <Route exact path="/ans"><Answers/></Route>
                 <Route exact path="/notifications"><Notification/></Route>
                 <Route exact path="/search"><SearchBar/></Route>
                 <Route exact path="/login"><Login/></Route>
                 <Route exact path="/profile"><Profile/></Route>
             </Switch>
       </Router>
       

    </div>
  );
}

export default App;
