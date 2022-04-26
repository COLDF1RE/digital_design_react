import React from 'react';
import Main from '../../pages/Main/Main';
import Archive from '../../pages/Archive/Archive';
import Form from "../../pages/Form/Form";
import NotFound from "../../pages/NotFound/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AppRoute} from "../../const";
import {observer} from 'mobx-react-lite'

const App = observer(() => {

  return (

    <BrowserRouter>
      <Switch>

        {/*<Route path={AppRoute.MAIN} exact render={(props) => <Main events={data} {...props} />}/>*/}
        {/*<Route path={AppRoute.ARCHIVE} exact render={(props) => <Archive events={data} {...props} />}/>*/}
        {/*<Route path={AppRoute.EVENT} exact render={(props) => <Form events={data} {...props} />}/>*/}

        <Route path={AppRoute.MAIN} exact component={Main}/>
        <Route path={AppRoute.ARCHIVE} exact component={Archive}/>
        <Route path={AppRoute.EVENT} exact component={Form}/>

        <Route component={NotFound}/>

      </Switch>
    </BrowserRouter>

  )
})

export default App;
