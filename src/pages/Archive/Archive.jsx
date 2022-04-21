import React from 'react';
import Board from '../../components/Board/Board';
import Header from '../../components/Header/Header';

const Archive = ({events}) => {

  const archiveEvents = events.filter(x=>x.archive);

  return (
    <>
      <Header/>
      <section className="main__wrapper">
        <Board events={archiveEvents}/>
      </section>
    </>
  )
}

export default Archive;
