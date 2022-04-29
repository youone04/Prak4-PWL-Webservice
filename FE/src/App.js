import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import AOS from 'aos';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import Kontak from "./Pages/Kontak";

function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
    AOS.refresh();
  }, [])
  return (
     <Router>
     <Switch>
       <Route path="/" exact component={Home} />      
       <Route path="/kontak" exact component={Kontak} />
       {/* <Route path="*" exact component={Error_404} /> */}
     </Switch>
   </Router>
  );
}

export default App;
