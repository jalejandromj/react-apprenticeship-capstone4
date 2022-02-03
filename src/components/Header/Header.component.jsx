import React, { useEffect } from 'react';
//import { useNavigate } from "react-router-dom";

import { useGeneralContext } from '../../state/GeneralContext';
import Col from '../Col';
import Row from '../Row';
import { ReactComponent as MenuSVG } from '../../assets/svg/menu.svg';
import { HeaderNav } from './Header.styles';

function Header() {
  //let navigate = useNavigate();
  const { displaySidebar, setDisplaySidebar } = useGeneralContext();
  console.log(displaySidebar);
  /*const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/login')
  }*/

  useEffect(() => {
    
  }, []);

  return (
    <HeaderNav id="header">
      <Row>
        <Col md={2} lg={2} style={{ alignItems: 'start', justifyContent: 'center', paddingLeft: "2%" }}>
          <span>logo</span>
        </Col>
        <Col md={6} lg={8} style={{ justifyContent: 'center' }}>
          <span>Search</span>
        </Col>
        <Col
          md={2} lg={1}
          style={{ alignItems: 'end', justifyContent: 'center' }}
        >
          <span>Cart</span>
        </Col>
        <Col md={2} lg={1} style={{ alignItems: 'end', justifyContent: 'center' }}>
          <figure onClick={() => setDisplaySidebar(!displaySidebar)} style={{cursor: "pointer"}}><MenuSVG style={{fill: "white", height: "100%"}}/></figure>
        </Col>
      </Row>
    </HeaderNav>
  );
}

export default Header;