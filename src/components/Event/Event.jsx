import React, {useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {events} from "../../store/index";
import moment from 'moment';
import "moment/locale/ru";

const Event = observer(() => {

  const {id} = useParams()
  const setTitleText = () => id ? 'Редактирование' : 'Добавление'
  const setButtonText = () => id ? 'Сохранить' : 'Добавить'
  const newDate = moment(new Date()).format('YYYY-MM-DD HH:mm')

  //Нахожу нужный мне объект по айди
  const {allData} = events
  const event = allData.find(item => item._id === id);

  const [form, setForm] = useState({
    // При F5 на странице редактирования event всегда false, тк не успевает прийти ответ с сервера
    // Как это лучше исправить?
    // Еще хочу сделать проверку, что если текущий адрес useParams.id !=== _id ни одной из карт,
    // то открывал страницу 404. Это будет нормальная реализация?
    theme: event ? event.theme : '',
    comment: event ? event.comment : '',
    date: event ? event.date : newDate,
  })

  function clearForm() {
    setForm({
      theme: '',
      comment: '',
      date: newDate
    })
  }

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (id) {
      events.editEvent({
        id: event._id,
        favorite: event.favorite,
        archive: event.archive,
        ...form
      })
      handleClick()
    } else {
      events.addEvent(form)
      // clearForm()
      handleClick()
    }
    console.log('submit form', form)
  }

  let history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (
    <section className="board">
      <form className="board__form" onSubmit={handleSubmit}>
        <h2 className="board__title">{setTitleText()} события</h2>
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
          <textarea
            type="text"
            onChange={handleFieldChange}
            className="board__input board__input--theme"
            name="theme"
            value={form.theme}
            required
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--comment">
          <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
          <textarea
            type="text"
            onChange={handleFieldChange}
            className="board__input board__input--comment"
            name="comment"
            value={form.comment}
            required
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">Дата:</label>
          <input
            type="datetime-local"
            onChange={handleFieldChange}
            className="board__input board__input--date"
            name="date"
            value={form.date}
          />
        </fieldset>
        <div className="btns">
          <button type="submit" className="btn-submit">{setButtonText()}</button>
          <button type="reset" className="btn-reset" onClick={clearForm}>Очистить</button>
        </div>
      </form>
    </section>
  );
})

export default Event;
