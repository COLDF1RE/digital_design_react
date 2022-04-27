import React from 'react';
import Board from '../../components/Board/Board';
import Header from '../../components/Header/Header';
import {events} from '../../store/index';
import {observer} from "mobx-react-lite";

const Archive = observer(() => {

  // const archiveEvents = events.filter(x=>x.archive);
  const {archiveData} = events

  return (
    <>
      <Header/>
      <section className="main__wrapper">
        {/*<Board events={archiveEvents}/>*/}
        <Board PropsEvents={archiveData}/>
      </section>
    </>
  )
})

export default Archive;
