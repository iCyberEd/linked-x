import React from 'react';
import './App.css';
import Header from './components/header/Header';
import User from './components/user/User';
import { Route } from 'react-router-dom';
import Profile from './components/user/profile/Profile';
import Info from './components/info/Info';
import News from './components/info/News';
import Content from './components/content/Content';
import Elements from './components/content/Elements';
import Users from './components/user/users/Users';
import IncidentsContainer from './components/incidents/IncidentsContainer';
import Residence from './components/user/profile/Residence';





const App = (props) => {
  return (
    
      <div className="App">
        <Header />
        <User udb={props.state.usersDB} />
        <div className="content">
          <Route path="/content" component={Content} />
          <Route path="/user/profile" render={ () => <Profile udb={props.state.usersDB} dispatch={props.dispatch} />} />
          <Route path="/info" component={Info} />
          <Route path="/news" component={News} />
          <Route path="/elements" component={Elements} />
          <Route path="/incidents" render={ () => (<IncidentsContainer                  
                  dispatch={props.dispatch}  
                  incidents={props.state.incidents} />)} 
                  />
          <Route path="/users" render={ () => <Users udb={props.state.usersDB} />} /> 
          <Route path="/user/residence" component={Residence} />    
        </div>
      </div>
    
  );
}

export default App;
