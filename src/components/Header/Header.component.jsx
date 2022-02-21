import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useGeneralContext } from '../../state/GeneralContext';
import Button from '../Button';
import Col from '../Col';
import Input from '../Input';
import Row from '../Row';
import { ReactComponent as MenuSVG } from '../../assets/svg/menu.svg';
import { ReactComponent as CartSVG } from '../../assets/svg/cart.svg';
import { HeaderNav } from './Header.styles';

function Header() {
  let navigate = useNavigate();
  const { displaySidebar, setSearch } = useGeneralContext();
  const [searchInput, setSearchInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setSearch(searchInput);
    navigate(`/search/?q=${searchInput}`)
  }

  useEffect(() => {
    
  }, []);

  return (
    <HeaderNav id="header">
      <Row>
        <Col md={2} lg={2} style={{ alignItems: 'start', justifyContent: 'center', paddingLeft: "2%" }}>
          <Link to="/home">
            <span style={{cursor: "pointer", color: "rgb(var(--discreet-white))"}}>WizeCommerce</span>
          </Link>
        </Col>
        <Col md={6} lg={8} centerY>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <Col md={9} lg={10} style={{ justifyContent: 'center' }}>
                <Input name="search" noLabel onChange={(e) => setSearchInput(e.target.value)} placeholder="Search" required value={searchInput}/>
              </Col>
              <Col md={3} lg={2} style={{ alignItems: 'start' }} centerY>
                <Button type="button">Search</Button>
              </Col>
            </Row>
          </form>
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