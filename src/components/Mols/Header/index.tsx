import React, { useState, useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import CollapsibleMenu from 'components/Atoms/CollapsibleMenu';
import Separator from 'components/Atoms/Separator';

import jfyLogo from 'assets/images/jfylogomini.png';

import { Container, LogoContent, Logo, UserContainer } from './styles';

interface HeaderProps {
  changeTab(tab: string): void;
  actualTab: string;
  tabs: Array<{ key: string; value: string }>;
}

const Header: React.FC<HeaderProps> = ({
  changeTab,
  actualTab,
  tabs,
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { push } = useHistory();

  const handleChangeTab = useCallback(
    (tab: string) => {
      changeTab(tab);
      push({
        pathname: `/${tab}`,
        state: { tab },
      });
    },
    [push, changeTab],
  );

  const handleCollapseMenu = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  return (
    <>
      <Container>
        <LogoContent>
          <Logo
            onClick={() => handleChangeTab('search')}
            src={jfyLogo}
            alt="jfyLogo"
          />
          <Separator type="vertical" />
          <UserContainer bg="https://avatars0.githubusercontent.com/u/53842905?s=460&u=e3ed01c01307e54599f5a8d7e38c99571a365b5f&v=4">
            <div className="image-container">
              <img
                src="https://avatars0.githubusercontent.com/u/53842905?s=460&u=e3ed01c01307e54599f5a8d7e38c99571a365b5f&v=4"
                alt="user"
              />
            </div>
            <div className="user-data-container">
              <h3>Thiago Kraetzer</h3>
              <p>Dev Full Stack</p>
              <p>Campinas - SP</p>
            </div>
          </UserContainer>
          <CollapsibleMenu
            items={tabs}
            handleChangeTab={handleChangeTab}
            handleCollapseMenu={handleCollapseMenu}
            isCollapsed={isCollapsed}
            actualTab={actualTab}
          >
            {children}
          </CollapsibleMenu>
        </LogoContent>
      </Container>
      <Separator type="horizontal" />
    </>
  );
};

export default Header;
