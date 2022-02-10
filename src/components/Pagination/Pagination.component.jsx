import React from 'react';

import Button from '../Button';
import { PaginationLayout } from './Pagination.styles';

function Pagination() {
  const RenderButtons = () => {
    const temp = ["Prev",0,1,2,3,"Next"];
    
    const renderedButtons = temp.map((btn, index) => {
      return(
        <Button key={`pag_${index}`} className="selected" style={{ alignText: "center", borderRadius: "30px", padding: "5px 15px"}}>
          <span style={{color: "rgb(var(--pale-green))"}}>{typeof(btn) === "number" ? btn+1 : btn}</span>
        </Button>
      )
    })

    return renderedButtons;
  }

  return (
    <PaginationLayout className="pagination-layout" >
      <RenderButtons />
    </PaginationLayout>
  );
}

export default Pagination;
