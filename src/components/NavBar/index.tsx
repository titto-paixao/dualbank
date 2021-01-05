import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavBarData } from './navBarData';


import { Container, Item } from './styles';

const NavBar: React.FC = () => {

  const location = useLocation();

  return (
    <Container>
      <ul>
        {NavBarData.map((item, index) => (
          <Item key={index} active={location.pathname === item.path ? true : false} >
            <Link to={item.path} >
              <img src={location.pathname === item.path ? item.icon_active : item.icon} alt={item.icon} />
            </Link>
          </Item>
        ))}
      </ul>
    </Container>
  );
};

export default NavBar;
