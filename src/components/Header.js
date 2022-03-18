import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [burgerState, setBurgerState] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Mode S</a>
        <a href="#">Mode 3</a>
        <a href="#">Mode X</a>
        <a href="#">Mode Y</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu />
      </RightMenu>

      <BurgerNav show={burgerState}>
        <ul>
          <CloseWrapper>
            <CustomClose />
          </CloseWrapper>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadstar</a>
          </li>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
        </ul>
      </BurgerNav>
    </Container>
  );
};

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }

  a {
    display: inline-flex;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    display: inline-block;
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 1000;
  overflow: none;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};

  ul {
    width: 300px;
    background-color: white;
    margin-left: auto;
    height: 100%;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: start;

    li {
      padding: 15px 0px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      a {
        font-weight: 600;
      }
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  border-radius: 50%;
  cursor: pointer;
`;

export default Header;
