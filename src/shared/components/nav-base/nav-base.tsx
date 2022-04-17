import React, { ReactElement } from 'react';

import styled, { useTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from './logo.png';

type propsType = {
  children: any,
}

const Logo = styled.img`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
`;

const LinksContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const NavDrawer = styled.div`
  float: left;
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${props => props.theme.navDrawer.width};
  background-color: ${props => props.theme.palette.secondaryBg};
`;

const MyNavLink = styled(NavLink)`
  box-sizing: border-box;
  position: relative;
  color: ${props => props.theme.palette.text.primary};
  border-left: 4px solid ${props => props.theme.palette.secondaryBg};
  padding: 12px 16px;
  display: block;
  text-decoration: none;
`;

const AppBody = styled.div`
  margin-left: ${props => props.theme.navDrawer.width};
  background-color: ${props => props.theme.palette.mainBg};
`;

const links = [
  {
    id: 'cards',
    label: 'Cards Database',
    url: '/cards',
  },
  {
    id: 'sets',
    label: 'Card Sets',
    url: '/sets',
  },
];

function NavBase({ children }: propsType): ReactElement<typeof NavBase> {
  const theme = useTheme();

  return (
    <React.Fragment>
      <NavDrawer>
        <Logo title="GL-Magic" alt="App logo" src={logo} />
        <LinksContainer>
          {links.map(link => (
            <MyNavLink
              key={link.id}
              to={link.url}
              activeStyle={{
                backgroundColor: theme.palette.mainBg,
                borderColor: theme.palette.highlight,
              }}
            >
              {link.label}
            </MyNavLink>
          ))}
        </LinksContainer>
      </NavDrawer>
      <AppBody>{children}</AppBody>
    </React.Fragment>
  );
}

export default NavBase;
