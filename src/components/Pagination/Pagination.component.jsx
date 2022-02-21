import React, { useEffect } from 'react';

import Button from '../Button';
import { PaginationLayout } from './Pagination.styles';

function Pagination({content, handlePagination}) {
  
  const RenderButtons = () => {
    let length = 6;
    let current = content.page;

    const renderedButtons = [...Array(length)].map((_, i) => {
      if(i === 0){// Prev button
        return(
          <Button key={`pag_${i}`} className="selected" style={{ alignText: "center", borderRadius: "30px", padding: "5px 15px"}} onClick={() => handlePagination(current, current-1)}>
            <span style={{color: "rgb(var(--pale-green))"}}>Prev</span>
          </Button>
        )
      }else if(i === length-1) { // Next button
        return(
          <Button key={`pag_${i}`} className="selected" style={{ alignText: "center", borderRadius: "30px", padding: "5px 15px"}} onClick={() => handlePagination(current, current+1)}>
            <span style={{color: "rgb(var(--pale-green))"}}>Next</span>
          </Button>
        )
      }else { // Normal number buttons
        return(
          <Button key={`pag_${i}`} className={current+(i-1) === current ? "selected" : null} style={{ alignText: "center", borderRadius: "30px", padding: "5px 15px"}} onClick={() => handlePagination(current, current+(i-1))}>
            <span style={{color: "rgb(var(--pale-green))"}}>{current+(i-1)}</span>
          </Button>
        )
      }
    })

    return renderedButtons;
  }

  useEffect(() => {
    
  }, [content.page]);

  return (
    <PaginationLayout className="pagination-layout" >
      <RenderButtons />
    </PaginationLayout>
  );
}

export default Pagination;
