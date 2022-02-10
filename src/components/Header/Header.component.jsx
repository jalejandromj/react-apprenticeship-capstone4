import React, { useEffect } from 'react';
//import { useNavigate } from "react-router-dom";

import { useGeneralContext } from '../../state/GeneralContext';
import Col from '../Col';
import Input from '../Input';
import Row from '../Row';
import { ReactComponent as MenuSVG } from '../../assets/svg/menu.svg';
import { ReactComponent as CartSVG } from '../../assets/svg/cart.svg';
import { HeaderNav } from './Header.styles';

function Header() {
  const { displaySidebar } = useGeneralContext();

  useEffect(() => {
    
  }, []);

  return (
    <HeaderNav id="header">
      <Row>
        <Col md={2} lg={2} style={{ alignItems: 'start', justifyContent: 'center', paddingLeft: "2%" }}>
          <span style={{color: "rgb(var(--discreet-white))"}}>WizeCommerce</span>
        </Col>
        <Col md={6} lg={8} style={{ justifyContent: 'center' }}>
          <Input name="search" noLabel placeholder="Search"/>
        </Col>
        <Col
          md={2} lg={1}
          style={{ alignItems: 'end', justifyContent: 'center' }}
        >
          <figure style={{cursor: "pointer"}}><CartSVG style={{fill: "white", height: "100%"}}/></figure>
        </Col>
        <Col md={2} lg={1} style={{ alignItems: 'end', justifyContent: 'center' }}>
          <figure onClick={() => console.log(!displaySidebar)} style={{cursor: "pointer"}}><MenuSVG style={{fill: "white", height: "100%"}}/></figure>
        </Col>
      </Row>
    </HeaderNav>
  );
}

export default Header;