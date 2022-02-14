import React from 'react';

import Button from '../../components/Button';
import Col from "../../components/Col";
import Row from "../../components/Row";
import { Figure, Image, Li, Ul } from './MediaCard.styles';

function MediaCard({ description, headerSize, isVideo, media, mini, onClick, showButton, style, title }) {
  const RenderMedia = () => {
    if(isVideo === "video"){
      return (
        <iframe
            id="ytplayer"
            title="watchVideoIframe"
            type="text/html"
            width="100%"
            height="100%"
            src={media}
            frameBorder="0"
            allowFullScreen
          />
      );
    }else{
       return (
          <Figure>
            <Image src={media} alt="" />
          </Figure>
      );
    }
  }

  return (
    <Ul
      mini={mini}
      showButton={showButton}
      style={style}
    >
      <Li onClick={onClick} style={{marginBottom: "10px"}}>
        <RenderMedia />
      </Li>
      <Li className="videoTitle" onClick={onClick}>
        {headerSize === "small" ?
          <h5 className="">
            {title}
          </h5>
          :
          <h3 className="">
            {title}
          </h3>
        }
      </Li>
      <Li className="videoDescr">
        <Row style={{padding: 0}}>
          <Col md={6} style={{padding: 0}} centerY>
            <span className="">{description}</span>
          </Col>
          {showButton &&
            <Col md={6} style={{alignItems: "end", padding: 0}}>
              <Button className="selected" style={{padding: "8px 10px"}}><span>{showButton}</span></Button>
            </Col>
          }
        </Row>
      </Li>
    </Ul>
  );
}

export default MediaCard;