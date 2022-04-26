import React, {useState} from 'react';
import Card from '../Card/Card';
import NoEvents from "../No-events/No-events";
import LoadMore from "../Load-more/Load-more";
import Sorting from "../Sorting/Sorting";
import { AppRoute } from '../../const';
import {useLocation} from "react-router-dom";


const Board = ({events}) => {

  const { pathname } = useLocation()

  const [step, setStep] = useState(20)

  const handleLoadMore = () => {
    events.length >= step ? setStep(step + 10) : setStep(events.length)
  }

  const handleDeleteArchiveEvents = (evt) => {
    evt.preventDefault()
    events.deleteArchiveEvents()
  }

  return (
    <section className="board">
      {pathname === AppRoute.MAIN && events.length !==0 && <Sorting />}
      <div className="board__events">
        {events.length !==0
          ? events.slice(0, step).map(event => <Card event={event} key={event._id}/>)
          : <NoEvents/>
        }
      </div>

      {/*//Себе: дописать функционал удалить все карты со страницы архива*/}
      {pathname === AppRoute.ARCHIVE && <button className="load-more" onClick={handleDeleteArchiveEvents}>Удалить все</button>}

      {/*Тут на месте можно простым способом onClick повестить?*/}
      {/*<LoadMore onClick={handleLoadMore}/>*/}
      <button className='load-more' type='button' onClick={handleLoadMore}>Загрузить еще</button>

    </section>
  )
}

export default Board;
