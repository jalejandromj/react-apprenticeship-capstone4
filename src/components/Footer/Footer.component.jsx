import React, { useEffect } from 'react';
//import { useNavigate } from "react-router-dom";

//import { useGeneralContext } from '../../state/GeneralContext';
import Col from '../Col';
import Row from '../Row';
import { FooterComponent } from './Footer.styles';

function Footer() {

  useEffect(() => {
    
  }, []);

  return (
    <FooterComponent>
      <Row>
        <Col md={6}>
          <span>Ecommerce created during Wizeline’s Academy React Bootcamp</span>
        </Col>
        <Col md={3}>
        
        </Col>
      </Row>
    </FooterComponent>
  );
}

export default Footer;