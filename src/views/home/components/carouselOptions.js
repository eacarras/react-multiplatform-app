import React from 'react';

import './carouselOptions.scss';

const CarouselOptions = ({ items }) => {
  return (
    <carousel>
      <input type="radio" id="page1cb" checked name="pages" />
      <input type="radio" id="page2cb" name="pages" />
      <input type="radio" id="page3cb" name="pages" />
      
      <page id="page1">
        <div>{items[0]}</div>
        <label for="page2cb" title="Next Item"><b>NEXT ITEM</b></label>
      </page>
      <page id="page2">
        <div>{items[1]}</div>
        <label for="page3cb" title="Next Item"><b>NEXT ITEM</b></label>
      </page>
      <page id="page3">
        <div>{items[2]}</div>
        <label for="page1cb" title="Previous Item"><b>PROVIOUS ITEM</b></label>
      </page>  
    </carousel>
  );
}

export default CarouselOptions;
