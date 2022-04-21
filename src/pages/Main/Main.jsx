import React from 'react';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';
import Board from '../../components/Board/Board';

const Main = ({events}) => {
  return (
    <>
      <Header/>
      <section className="main__wrapper">
        <Filter />
        <Board events={events}/>
      </section>
    </>
  )
}

export default Main;
