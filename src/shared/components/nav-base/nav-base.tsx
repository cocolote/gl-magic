import { ReactElement } from 'react';
import { useTheme } from 'styled-components';

import { links } from './links';
import {
  Logo,
  LinksContainer,
  NavDrawer,
  MyNavLink,
  AppBody,
} from './styled.components';
import logo from './logo.png';


type propsType = {
  children: any,
}

function NavBase({ children }: propsType): ReactElement<typeof NavBase> {
  const theme = useTheme();

  return (
    <>
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
    </>
  );
}

export default NavBase;
