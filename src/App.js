import React, {Component} from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Login from './Components/login'
import Logout from './Components/logout'
import Admin from './Components/admin'


class App extends Component {

  render(){
  return (


   <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/logout" component={Logout}/>

    </Switch>
  );
}
}

export default App;
