import React from 'react';
import Event from "../../components/Event/Event";
import Header from "../../components/Header/Header";
import {AppRoute} from "../../const";
import Filter from "../../components/Filter/Filter";

const Form = () => {
  return (
    <>
      <Header mode={AppRoute.MAIN}/>
      <section className="main__wrapper">
        <Filter/>
        <Event/>
      </section>
    </>
  );
};

export default Form;
