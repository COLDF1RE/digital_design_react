import React from 'react';
import Event from "../../components/Event/Event";
import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";

const Form = ({events}) => {
  return (
    <>
      <Header/>
      <section className="main__wrapper">
        <Filter/>
        <Event events={events}/>
      </section>
    </>
  );
};

export default Form;
