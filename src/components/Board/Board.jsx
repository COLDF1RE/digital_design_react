import React, {useState} from 'react';
import Card from '../Card/Card';
import NoEvents from "../No-events/No-events";
import LoadMore from "../Load-more/Load-more";
import Sorting from "../Sorting/Sorting";
import { AppRoute } from '../../const';
import {useLocation} from "react-router-dom";
import {events} from "../../store";


const Board = ({PropsEvents}) => {

  const { pathname } = useLocation()

  const [step, setStep] = useState(20)

  const handleLoadMore = () => {
    PropsEvents.length >= step ? setStep(step + 10) : setStep(PropsEvents.length)
  }

  const handleClearArchive = (evt) => {
    evt.preventDefault()
    events.clearArchive()
    //вариант удаления перебором
    // events.archiveData.map(item => events.deleteEvent(item._id));
  }

  return (
    <section className="board">
      {pathname === AppRoute.MAIN && PropsEvents.length !==0 && <Sorting />}
      <div className="board__events">
        {PropsEvents.length !==0
          ? PropsEvents.slice(0, step).map(event => <Card event={event} key={event._id}/>)
          : <NoEvents/>
        }
      </div>


      {pathname === AppRoute.ARCHIVE && <button className="load-more" onClick={handleClearArchive}>Удалить все</button>}

      <LoadMore handleLoadMore={handleLoadMore}/>

    </section>
  )
}

export default Board;
