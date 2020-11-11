import React, { useState, useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';

/* Páginas */
import Header from 'components/Mols/Header';
import Dashboard from 'pages/Dashboard';
import Favorites from 'pages/Favorites';

const Routes: React.FC = () => {
  const [tab, setTab] = useState('cursos');

  const HeaderTabs = useMemo(
    () => [
      { key: 'search', value: 'Pesquisar' },
      { key: 'favorites', value: 'Favoritos' },
    ],
    [],
  );
  return (
    <>
      <Header actualTab={tab} tabs={HeaderTabs} changeTab={setTab} />
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/search" component={Dashboard} exact />
        <Route path="/favorites" component={Favorites} exact />
      </Switch>
    </>
  );
};

export default Routes;
