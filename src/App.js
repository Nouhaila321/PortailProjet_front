import './style/App.css'
import { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrincipalePage from './component/PrincipalePage';
import Projet from './component/Projet';
import Navbar from './component/Navbar';
import ListeProjets from './component/ListeProjets';


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
            <Route exact path='/'>
              <PrincipalePage />
            </Route>
            
            <Route exact path={[
                '/projets',
                '/projets/:type',
              ]}>
              <ListeProjets/>
            </Route>

            <Route exact path={[
                '/projet:id',
                '/projet',
              ]}>
                <Projet/>
            </Route>
            
        </Switch>

      </Router>
    );
  }
}
export default App;
