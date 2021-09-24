import './style/App.css'
import { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Projet from './component/Projet';
import Client from './component/Client';
import Collaborateur from './component/Collaborateur';

import PrincipalePage from './component/PrincipalePage';
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
                '/projet/:idP/:idC',
                '/projet',
              ]}>
                <Projet/>
            </Route>

            <Route exact path={[
                '/client/:idC',
                
              ]}>
                <Client/>
            </Route>

            <Route exact path={[
                '/Collaborateur/:idCollab',
                
              ]}>
                <Collaborateur/>
            </Route>
            
        </Switch>

      </Router>
    );
  }
}
export default App;
