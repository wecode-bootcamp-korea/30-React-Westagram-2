import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from './Feeds';
import Aside from './Aside';
import './MainKyle.scss';

const MainKyle = () => {
  return (
    <div className="Main">
      <Nav />
      <main>
        <Feeds />
        <Aside />
      </main>
    </div>
  );
};

export default MainKyle;
