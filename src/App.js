import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import {Switch , Route} from 'react-router-dom'
import Index from './Components/Home/Index';
import Reservations from './Components/Reservation/Reservations';
import Footer from './Components/Footer';
import Teams from './Components/Team/Teams';
import Contacts from './Components/Contact/Contacts';
import Menus from './Components/Menu/Menus';
function App() {
  return (
   <React.Fragment>
      <Navbar/>
       <Switch>
         <Route exact path="/" component={Index}/>
         <Route exact path="/reservation" component={Reservations}/>
         <Route exact path="/team" component={Teams}/>
         <Route exact path="/contact" component={Contacts}/>
         <Route exact path="/menu" component={Menus}/>
       </Switch>
       <Footer/>
   </React.Fragment>
  );
}

export default App;
