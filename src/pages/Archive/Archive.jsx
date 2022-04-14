import React from 'react';
import Board from '../../components/Board/Board';
import Header from '../../components/Header/Header';
import { AppRoute } from '../../const';
import LoadMore from "../../components/Load-more/Load-more";
import Sorting from "../../components/Sorting/Sorting";

const Archive = () => {
  return (
    <>
      <Header mode={AppRoute.ARCHIVE}/>
      <section className="main__wrapper">
        <Board enableSorting={false}/>
      </section>
    </>
  )
}

export default Archive;
