import React, {useState} from 'react';
import {useParams} from "react-router-dom";

const Event = ({events}) => {

  const {id} = useParams()
  const getTitleText = () => id ? 'Редактирование' : 'Добавление'
  const getButtonText = () => id ? 'Сохранить' : 'Добавить'

  const event = events.find(item => item._id === id);

  const [form, setForm] = useState({
    theme: id ? event.theme : '',
    comment: id ? event.comment : '',
    date: id ? event.data : new Date(),
  })

  function clearForm() {
    setForm({
      theme: '',
      comment: '',
      date: new Date()
    })
  }

  const handleFieldChange = (event) => {
    const {name, value} = event.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit form', form)
    clearForm()
  }

  return (
    <section className="board">
      <form className="board__form" onSubmit={handleSubmit}>
        <h2 className="board__title">{getTitleText()} события</h2>
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
            value={form.data}
          />
        </fieldset>
        <div className="btns">
          <button type="submit" className="btn-submit">{getButtonText()}</button>
          <button type="reset" className="btn-reset" onClick={clearForm}>Очистить</button>
        </div>
      </form>
    </section>
  );
};

export default Event;
