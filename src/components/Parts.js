import React from 'react';
import slugify from "slugify";
import { USCurrencyFormat } from "../constants";



 function Specs({ selected, updateFeature, features, feature }) {
   return features[feature].map((item) => {
    const price =  USCurrencyFormat.format(item.cost)
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === selected[feature].name}
            onChange={(e) => updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({price})
          </label>
        </div>
      );
    });

 }
export default  Specs;

