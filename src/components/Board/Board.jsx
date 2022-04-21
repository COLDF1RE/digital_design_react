import React from 'react';
import Card from '../Card/Card';
import NoEvents from "../No-events/No-events";
import LoadMore from "../Load-more/Load-more";
import Sorting from "../Sorting/Sorting";
import { AppRoute } from '../../const';
import {useLocation} from "react-router-dom";

const Board = ({events}) => {

  const { pathname } = useLocation()

  return (
    <section className="board">
      {pathname === AppRoute.MAIN && <Sorting />}
      <div className="board__events">
        {events.length !==0
          ? events.map(event => <Card {...event} key={event._id}/>)
          : <NoEvents/>
        }
      </div>
      <LoadMore/>
    </section>
  )
}

export default Board;
