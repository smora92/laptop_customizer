import React from 'react'
import { USCurrencyFormat } from '../constants';
import { calculateTotal } from '../utils/utils';

function Total({selected}) {
    const total = calculateTotal(selected);
    return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
            </div>
      </div>
    )
}

export default Total
