import React from 'react';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';
import Board from '../../components/Board/Board';
import { AppRoute } from '../../const.js';
import Sorting from "../../components/Sorting/Sorting";

const Main = () => {
  return (
    <>
      <Header mode={AppRoute.MAIN}/>
      <section className="main__wrapper">
        <Filter />
        <Board mode={AppRoute.MAIN}/>
      </section>
    </>
  )
}

export default Main;
