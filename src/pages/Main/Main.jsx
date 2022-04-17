import React from 'react';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';
import Board from '../../components/Board/Board';

const Main = () => {
  return (
    <>
      <Header/>
      <section className="main__wrapper">
        <Filter />
        <Board/>
      </section>
    </>
  )
}

export default Main;
