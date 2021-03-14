import React from 'react'
import CartItem from './CartItem';

function Summary({ selected }) {
    return Object.keys(selected).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        const selectedOption = selected[feature];
        return (
        <CartItem
            feature={feature}
            featureHash={featureHash}
            selectedOption={selectedOption}
        />
        );
  });
}

export default Summary
