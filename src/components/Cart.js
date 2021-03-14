import React from "react";

import Total from "./Total";
import Summary from "./Summary";


function Cart({selected}) {
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      <Summary  selected={selected} />
      <Total selected={selected} />
    </section>
  );
}

export default Cart;

