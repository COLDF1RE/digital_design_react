import React from 'react';
import { AppRoute } from '../../const';
import {Link} from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Ooops!</h2>
      <h4 className={classes.subtitle}>It seems like that's not what you were looking for.</h4>
      <Link to={AppRoute.MAIN} className={classes.link}>Go home</Link>
    </div>
  );
};

export default NotFound;
