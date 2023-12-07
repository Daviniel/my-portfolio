import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './components/mainPage/MainPage';
import ProjectsPage from './components/projectsPage/ProjectsPage';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
