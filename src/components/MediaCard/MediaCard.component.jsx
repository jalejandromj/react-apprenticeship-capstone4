import React from 'react';

import { Figure, Image, Li, Ul } from './MediaCard.styles';

function MediaCard({ description, headerSize, isVideo, media, mini, onClick, style, title }) {
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
      onClick={onClick}
      mini={mini}
      style={style}
    >
      <Li style={{marginBottom: "10px"}}>
        <RenderMedia />
      </Li>
      <Li className="videoTitle">
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
        <span className="">{description}</span>
      </Li>
    </Ul>
  );
}

export default MediaCard;