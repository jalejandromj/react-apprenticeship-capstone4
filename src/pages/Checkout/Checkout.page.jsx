import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useGeneralContext } from '../../state/GeneralContext';
import Button from '../../components/Button';
import { CheckoutTableHead } from './CheckoutTableHead.component';
import { CheckoutTableFooter } from './CheckoutTableFooter.component';
import Col from "../../components/Col";
import Input from "../../components/Input";
import Row from "../../components/Row";
import Textarea from "../../components/Textarea";
import { calculateTotal } from "../../utils/utils.js";

function CheckoutPage() {
  const { cart } = useGeneralContext();

  const RenderRows = () => Object.keys(cart).map((key, index) => {
    if(key !== "totalQty"){
      return(
        <tr key={`row-${index}`} style={{height: "5vh"}}> 
          <td style={{paddingLeft: "15px"}}>
            <Link to={`/product/${key}`}><p style={{margin: 0}}>{cart[key].name}</p></Link>
          </td>
          <td style={{textAlign: "center"}}><span>{cart[key].qty}</span></td>
          <td style={{textAlign: "right"}}><span>$ {cart[key].qty*cart[key].eachPrice}</span></td>
        </tr>
      )
    }
  });

  const OrderTable = () => {
    return(
      <>
        <Row> 
          <Col md={12} style={{paddingTop: "5%"}}>
            <h4 style={{paddingBottom: "0"}}>Order Overview</h4>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <table>
              <CheckoutTableHead />
              <tbody>
                <RenderRows />
              </tbody>
              <CheckoutTableFooter calculateTotal={calculateTotal} cart={cart}/>
            </table>
          </Col>
        </Row>
      </>
    );
  }
  
  const ButtonsRow = () => {
    return(
      <Row>
        <Col md={6} style={{alignItems: "start"}}>
          <Link to="/cart">
            <Button className="selected">Back to Cart</Button>
          </Link>
        </Col>
        <Col md={6} style={{alignItems: "end"}}>
          <Button className="selected" disabled>Place Order</Button>
        </Col>
      </Row>
    );
  }

  useEffect(() => {
    
  }, []);

  return (
    <section className="content checkout-page" style={{height: "auto", padding: "0% 2% 0% 2%"}}>
      <Row> 
        <Col md={12} style={{paddingTop: "5%"}}>
          <h1 style={{paddingBottom: "0"}}>Checkout</h1>
        </Col>
      </Row>
      <form>
        <Row> 
          <Col md={2}>
            <Input label="Name" name="name" placeholder="John Doe" required theme="dark" type="text"/>
          </Col>
          <Col md={2}>
            <Input label="Email" name="email" placeholder="email@gmail.com" required theme="dark" type="email"/>
          </Col>
          <Col md={2}>
            <Input label="ZipCode" name="zipcode" placeholder="89123" required theme="dark" type="number"/>
          </Col>
        </Row>
        <Row> 
          <Col md={6}>
            <Textarea label="Remarks" name="notes" placeholder="Any order comments or notes..." required theme="dark"/>
          </Col>
        </Row>
        <OrderTable />
        <ButtonsRow />
      </form>
    </section>
  );
}

export default CheckoutPage;