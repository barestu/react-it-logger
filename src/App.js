import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import AddButton from './components/layout/AddButton';
import LogModalAdd from './components/logs/LogModalAdd';
import LogModalEdit from './components/logs/LogModalEdit';
import TechModalAdd from './components/techs/TechModalAdd';
import TechModalList from './components/techs/TechModalList';
import LogList from './components/logs/LogList';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddButton />
        <LogModalAdd />
        <LogModalEdit />
        <TechModalAdd />
        <TechModalList />
        <LogList />
      </div>
    </Fragment>
  );
};

export default App;
