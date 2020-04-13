import React, { useState } from 'react';
import styles from './styles/App.module.scss';
import { Calendar } from './pages/Calendar';
import { Blog } from './pages/Blog';
import { Charge } from './pages/Charge';
import { Funds } from './pages/Funds';
import { Landing } from './pages/Landing';
import { Payments } from './pages/Payments';
import { Rentals } from './pages/Rentals';
import { Services } from './pages/Services';
import { User } from './pages/User';

//Pages
import { Route, Switch } from 'react-router';

import { Header } from './components/Header';


const App: React.FC = () => {

  return (
    <section className={styles.App}>
      <Header />
      <Switch>
        <Route path="/Calendar" component={Calendar}/>
        <Route path="/Blog" component={Blog}/>
        <Route path="/Charge" component={Charge}/>
        <Route path="/Funds" component={Funds}/>
        <Route path="/Landing" component={Landing}/>
        <Route path="/Payments" component={Payments}/>
        <Route path="/Rentals" component={Rentals}/>
        <Route path="/Services" component={Services}/>
        <Route path="/User" component={User}/>
      </Switch>
    </section>
  );
}

export default App;
