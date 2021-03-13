import React from "react";
import CartItem from "./CartItem";

import { USCurrencyFormat } from "../constants";

function Cart(props) {
  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );

  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];

    return (
      <CartItem
        feature={feature}
        featureHash={featureHash}
        selectedOption={selectedOption}
      />
    );
  });

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    </section>
  );
}

export default Cart;

