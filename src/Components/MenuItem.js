import React from 'react';

function MenuItem({ item }) {
  return (
    <div className="menuItem">
      <img src={item.image} alt={item.name} className="menuItemImg" />
      <div className="menuItemInfo">
        <h3 className="menuItemName">{item.name}</h3>
        <p className="menuItemDescription">{item.description}</p>
        <p className="menuItemPrice">{item.price}</p>
      </div>
    </div>
  );
}

export default MenuItem;
