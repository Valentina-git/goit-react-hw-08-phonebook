import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import mainRoutes from '../../redux/routes/mainRoutes';
import { isAuth } from '../../redux/selectors/authSelectors';
import LogOutMenu from '../logOutMenu/LogOutMenu';
import HeaderStyled from './HeaderStyled';

const Header = () => {
  const isAuthenticated = useSelector(isAuth);

  return (
    <HeaderStyled>
      {isAuthenticated
        ? mainRoutes.map(
            route =>
              !route.restricted && (
                <NavLink
                  className="navlink"
                  activeClassName="navlink-active"
                  to={route.path}
                  key={route.name}
                  exact={route.exact}
                >
                  {route.name}
                </NavLink>
              ),
          )
        : mainRoutes.map(
            route =>
              !route.private && (
                <NavLink
                  className="navlink"
                  activeClassName="navlink-active"
                  to={route.path}
                  key={route.name}
                  exact={route.exact}
                >
                  {route.name}
                </NavLink>
              ),
          )}
      {isAuthenticated && <LogOutMenu />}
    </HeaderStyled>
  );
};

export default Header;
