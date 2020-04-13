import React, { useState } from 'react';
import styles from './styles/App.module.scss';

//Pages
import { Route, Switch } from 'react-router';

import { Header } from './components/Header';


const App: React.FC = () => {

  return (
    <section className={styles.App}>
      <Header />
      <Switch>

      </Switch>
    </section>
  );
}

export default App;
