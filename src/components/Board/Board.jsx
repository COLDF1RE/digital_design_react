import React from 'react';
import Card from '../Card/Card';
import NoEvents from "../No-events/No-events";
import LoadMore from "../Load-more/Load-more";
import Sorting from "../Sorting/Sorting";

const Board = (props) => {

  return (
    <section className="board">
      <Sorting enableSorting={props.enableSorting}/>
      <div className="board__events">
        <Card/>
        {/*<NoEvents/>*/}
      </div>
      <LoadMore/>
    </section>
  )
}

export default Board;
