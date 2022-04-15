import React from 'react';
import Card from '../Card/Card';
import NoEvents from "../No-events/No-events";
import LoadMore from "../Load-more/Load-more";
import Sorting from "../Sorting/Sorting";
import { AppRoute } from '../../const';

const Board = ({mode}) => {

  return (
    <section className="board">
      {mode === AppRoute.MAIN && <Sorting />}
      <div className="board__events">
        <Card/>
        {/*<NoEvents/>*/}
      </div>
      <LoadMore/>
    </section>
  )
}

export default Board;
