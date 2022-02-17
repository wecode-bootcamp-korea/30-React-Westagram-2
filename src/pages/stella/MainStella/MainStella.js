import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from '../../stella/Feeds/Feeds';
import Aside from '../../stella/Aside/Aside';
import './MainStella.scss';

function MainStella() {
  return (
    <>
      <Nav />
      <main className="main">
        <div className="inner">
          <div className="wrap">
            <Feeds />
            <Aside />
          </div>
        </div>
      </main>
    </>
  );
}

export default MainStella;
