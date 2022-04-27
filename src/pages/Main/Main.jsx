import React from 'react';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';
import Board from '../../components/Board/Board';
import {events} from "../../store/index";
import {observer} from 'mobx-react-lite';

const Main = observer(() => {

  // const {notArchiveData} = events
  const {filteredData} = events

  return (
    <>
      <Header/>
      <section className="main__wrapper">
        <Filter />
        <Board PropsEvents={filteredData}/>
      </section>
    </>
  )
})

export default Main;
