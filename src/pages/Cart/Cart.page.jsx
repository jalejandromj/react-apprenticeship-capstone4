import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { useGeneralContext } from '../../state/GeneralContext';
import Button from '../../components/Button';
import { CartTableFooter } from './CartTableFooter.component';
import { CartTableHead } from './CartTableHead.component';
import Col from "../../components/Col";
import Input from '../../components/Input';
import Row from "../../components/Row";
import { Figure, Image } from './Cart.styles';

function CartPage() {
  const { cart, setCart } = useGeneralContext();
  const [stockError, setStockError] = useState(false);
  
  const RenderRows = () => Object.keys(cart).map((key, index) => {
    if(key !== "totalQty"){
      return(
        <tr key={`row-${index}`} style={{height: "20vh"}}> 
          <td style={{height: "20vh"}}>
            <Figure><Image src={cart[key].img}/></Figure>
          </td>
          <td style={{paddingLeft: "15px"}}>
            <Link to={`/product/${key}`}><p style={{margin: 0}}>{cart[key].name}</p></Link>
          </td>
          <td><span>$ {cart[key].eachPrice}</span></td>
          <td>
            <Row>
              <Col md={6}>
                <Input defaultValue={cart[key].qty} 
                  min={1} 
                  name={key} 
                  noLabel 
                  onChange={(e) => 
                  updateCartQty(e, key, cart[key].stock)} 
                  theme="dark" 
                  type="number"/>
              </Col>
              <Col className="left-border" md={6} centerY>
                <h5>{cart[key].stock} <span>in stock</span></h5>
              </Col>
            </Row>
          </td>
          <td style={{textAlign: "right"}}><span>$ {cart[key].qty*cart[key].eachPrice}</span></td>
          <td style={{textAlign: "center"}}><Button style={{color: 'rgb(var(--pale-green))'}} onClick={() => deleteCartItem(key)}>Remove</Button></td>
        </tr>
      )
    }
  });

  const calculateTotal = () =>  {
    let totalPrice = 0;
    for(let key of Object.keys(cart)){
      if(key !== "totalQty")
        totalPrice = totalPrice+(cart[key].qty*cart[key].eachPrice);
    }

    return totalPrice;
  };

  const updateCartQty = (e, productId, stock) => {
    let desiredProdQty = e.target.value;

    //I do not know if this is just for capstone project especific validation cases
    //But usually this would be avoided by assigning a max to the number input, right?
    //Didnt do it just to be able to include this validation, same case in the ProductDetail.page
    if(desiredProdQty > stock){
      alert('Not enough stock');
      setStockError(true);
      return;
    }

    setCart(prevState => ({
      ...prevState,
      [productId]: {...cart[productId], qty: desiredProdQty},
      totalQty: parseInt(prevState.totalQty)-parseInt(prevState[productId].qty)+parseInt(desiredProdQty)
    }));
  }

  const deleteCartItem = (productId) => {
    let copyOfCartState = { ...cart };
    delete copyOfCartState[productId];

    setCart(prevState => ({
      ...copyOfCartState,
      totalQty: parseInt(prevState.totalQty)-parseInt(prevState[productId].qty)
    }));
  }
  
  useEffect(() => {
    
  }, []);

  return (
    <section className="content cart-page" style={{height: "auto", padding: "0% 2% 0% 2%"}}>
      <Row> 
        <Col md={12} style={{paddingTop: "5%"}}>
          <h1 style={{paddingBottom: "0"}}>My Cart</h1>
        </Col>
      </Row>
      <Row> 
        <Col md={12} >
          <table>
            <CartTableHead />
            <tbody>
              <RenderRows />
            </tbody>
            <CartTableFooter calculateTotal={calculateTotal}/>
          </table>
        </Col>
      </Row>
      <Row>
        <Col md={12} style={{alignItems: "end"}}>
          <Link to="/checkout">
            <Button className="selected" disabled={(Object.keys(cart).length <= 1) || (stockError) ? true : false}>Proceed to Checkout</Button>
          </Link>
        </Col>
      </Row>
    </section>
  );
}

export default CartPage;