import React from 'react';

const DrawOption = ({ Icon, text }) => {
  return (
    <div style={{
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: '20px 1fr',
      gap: '5px'
    }}>
      <Icon></Icon>
      <span>{text}</span>
    </div>
  )
}

export default DrawOption;
