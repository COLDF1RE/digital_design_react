import React from 'react';
import { AppRoute } from '../../const';
import {Link, useLocation} from "react-router-dom";
import classNames from "classnames";

const Header = () => {

  const { pathname } = useLocation()

    return (
      <section className="main__header">
        <section className="main__header-wrap">
          <span className="main__header-logo">SomeList</span>
          <div className="main__header-group-lnk">
            {/*<Link to={AppRoute.MAIN} className={`main__header-lnk ${location.pathname === AppRoute.MAIN && 'lnk-active'}`}>События</Link>*/}
            {/*<Link to={AppRoute.ARCHIVE} className={`main__header-lnk ${location.pathname === AppRoute.ARCHIVE && 'lnk-active'}`}>Архив</Link>*/}
            <Link to={AppRoute.MAIN} className={classNames('main__header-lnk', {'lnk-active': pathname === AppRoute.MAIN})}>События</Link>
            <Link to={AppRoute.ARCHIVE} className={classNames('main__header-lnk', {'lnk-active': pathname === AppRoute.ARCHIVE})}>Архив</Link>
          </div>
        </section>
      </section>
    )
}

export default Header;
