import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGeneralContext } from '../../state/GeneralContext';
import { useProductDetail } from '../../utils/hooks/useProductDetail';
import Badge from '../../components/Badge';
import Button from "../../components/Button";
import Carousel from '../../components/Carousel';
import Col from "../../components/Col";
import Input from '../../components/Input';
import Row from "../../components/Row";
import { BuyPanel, CarouselPanel, Figure, Image, SpecsList, TagsList } from './ProductDetail.styles';
import { capitalizeFirstLetter } from "../../utils/utils.js";

function ProductDetailPage() {
  const { cart, setCart } = useGeneralContext();
  const [qty, setQty] = useState(1);
  const [productDetail, setProductDetail] = useState(null);
  const { productId } = useParams();
  const productDetailResp = useProductDetail(productId);

  const renderSlides = () => productDetail[0].data.images.map((item, index) => {
    return(
      <Row key={`row-${index}`}>
        <Col md={12}>
          <Figure>
            <Image src={item.image.url}/>
          </Figure>
        </Col>
      </Row>
    )
  });

  function handleSubmit(e) {
    e.preventDefault();
    let stock = productDetail ? productDetail[0].data.stock : stock = null;

    if(qty > stock){
      alert('Not enough stock');
      return;
    }
    console.log(cart);
    setCart(prevState => ({
      ...prevState,
      [productId]: {each: productDetail[0].data.price, qty: qty},
      totalQty: prevState.totalQty+parseInt(qty)
    }));
  }

  useEffect(() => {
    if (Object.keys(productDetailResp.data).length !== 0)
      setProductDetail(productDetailResp.data.results);
  }, [ productDetailResp ]);
  
  return (
    <section className="content productdetail-page" style={{padding: "0% 2% 0% 2%"}}>
      <section id="main-product-detail">
        <Row> 
          <Col md={12} style={{paddingTop: "5%"}}>
            <h1 style={{paddingBottom: "0.3em"}}>{productDetail && productDetail[0].data.name}</h1>
          </Col>
        </Row>
        <Row style={{height: "80%"}}> 
          <CarouselPanel md={6} style={{width: "50%"}}>
            {productDetail && <Carousel renderSlidesFunct={renderSlides()} slidesPerView={1} />}
          </CarouselPanel>
          <BuyPanel className="left-border" md={6} >
            <Row>
              <Col md={4} lg={3}>
                <label><span>Top seller in</span></label>
              </Col>
              <Col md={8} lg={9} centerY>
                <label><h5 style={{margin: 0}}>{productDetail && capitalizeFirstLetter(productDetail[0].data.category.slug)}</h5></label>
              </Col>
            </Row>
            <Row>
              <Col md={12}><h5 style={{paddingBottom: "0"}}>Tags</h5></Col>
            </Row>
            <Row>
              <Col md={12}>
              {productDetail && (
                <TagsList className='list-none' elemNumb={productDetail[0].tags.length}>
                  {productDetail[0].tags.map((tag, index) =>
                    <li key={`badge-${index}`}><Badge>{tag}</Badge></li>
                  )}
                </TagsList>
              )}
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <label><h3>$ {productDetail && productDetail[0].data.price} pc.</h3></label>
              </Col>
            </Row>
            <form data-testid="add-cart-form" onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <Col md={6}>
              <Input label="Units" name="qty" type="number" value={qty} onChange={(e) => setQty(e.target.value)} required theme="dark"/>
              </Col>
              <Col className="left-border" md={6} centerY>
                <h5>{productDetail && productDetail[0].data.stock} <span>in stock</span></h5>
              </Col>
            </Row>
            <Row style={{position: "absolute", bottom: "2%", left: "4%"}}>
              <Col md={12}>
                {productDetail &&
                  <Button className="selected" style={{width: "92%"}}>Add to cart - ${qty*productDetail[0].data.price}</Button>
                }
              </Col>
            </Row>
            </form>
          </BuyPanel>
        </Row>
      </section>
      <section id="product-description">
        <Row> 
          <Col className="left-border" md={5} style={{paddingTop: "6.3%"}}>
            <Row>
              <Col md={12}><h5 style={{paddingBottom: "0"}}>Product details</h5></Col>
            </Row>
            <Row>
              <Col md={12}>
                <p>{productDetail && productDetail[0].data.description[0].text}</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}><h5 style={{paddingBottom: "0"}}>Specs</h5></Col>
            </Row>
            <Row>
              <Col md={12}>
                <SpecsList className='list-none' elemNumb={2}>
                  {productDetail &&
                      productDetail[0].data.specs.map((spec, index) =>
                      <li key={`spec-${index}`}>
                        <p>{spec.spec_name} : {spec.spec_value}</p>
                      </li>
                    )
                  } 
                </SpecsList>
              </Col>
            </Row>
            <Row>
              <Col md={2} centerY>
                <h5 style={{margin: 0, paddingBottom: "0"}}>SKU</h5>
              </Col>
              <Col md={10}>
                <label>
                  <span>{productDetail && productDetail[0].data.sku}</span>
                </label>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </section>
  );
}

export default ProductDetailPage;