import React from 'react';
import Main from '../../pages/Main/Main';
import Archive from '../../pages/Archive/Archive';
import Form from "../../pages/Form/Form";
import NotFound from "../../pages/NotFound/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AppRoute} from "../../const";

const App = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact component={Main}/>
        <Route path={AppRoute.ARCHIVE} exact component={Archive}/>

        <Route path={AppRoute.ADD} exact component={Form}/>
        <Route path={AppRoute.EVENT} exact component={Form}/>

        <Route component={NotFound}/>
        {/*<Route path={AppRoute.FORM} exact component={Form}/>*/}
      </Switch>
    </BrowserRouter>

  )
}

export default App;
