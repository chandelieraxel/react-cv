import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/react-cv' exact component={Home} />
          <Route path='/compétences' component={Knowledges} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
          <Route component={NotFound} />
          {/* Ici on relie nos paths aux pages dédidées*/}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
