import React from 'react';
import Main from '../../pages/Main/Main';
import Archive from '../../pages/Archive/Archive';
import Form from "../../pages/Form/Form";
import NotFound from "../../pages/NotFound/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AppRoute} from "../../const";

const App = ({events}) => {
  return (

    <BrowserRouter>
      <Switch>

        <Route path={AppRoute.MAIN} exact render={(props) => <Main events={events} {...props} />}/>
        <Route path={AppRoute.ARCHIVE} exact render={(props) => <Archive events={events} {...props} />}/>
        <Route path={AppRoute.EVENT} exact render={(props) => <Form events={events} {...props} />}/>

        {/*<Route path={AppRoute.EVENT} exact component={Form}/>*/}
        <Route component={NotFound}/>

      </Switch>
    </BrowserRouter>

  )
}

export default App;
