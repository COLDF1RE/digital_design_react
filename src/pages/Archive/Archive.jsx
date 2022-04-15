import React from 'react';
import Board from '../../components/Board/Board';
import Header from '../../components/Header/Header';
import { AppRoute } from '../../const';
import LoadMore from "../../components/Load-more/Load-more";


const Archive = () => {

  return (
    <>
      <Header mode={AppRoute.ARCHIVE}/>
      <section className="main__wrapper">
        <Board mode={AppRoute.ARCHIVE}/>
      </section>
    </>
  )
}

export default Archive;
