import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import EndingFood from './EndingFood';
import FullMenu from './FullMenu';
import MainCourse from './MainCourse';
import SoupStarter from './SoupStarter';
import Home from './Home.js';
import Item from './item';


function App() {
  return (
    <Router>
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/SoupStarter' exact component={SoupStarter} />
              <Route path='/MainCourse'exact  component={MainCourse} />
              <Route path='/FullMenu' exact component={FullMenu} />
              <Route path='/EndingFood' exact component={EndingFood} />
              <Route path='/Item' exact component={Item} />
          </Switch>
    </Router>
  );
}

export default App;
