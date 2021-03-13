import React from 'react';
import slugify from "slugify";
import { USCurrencyFormat } from "../constants";
import Part from './Part';



 function Specs({ selected, updateFeature, features, feature }) {
   return features[feature].map((item) => {
    const price =  USCurrencyFormat.format(item.cost)
      const itemHash = slugify(JSON.stringify(item));
      return (
          <Part
            itemHash={itemHash}
            item={item}
            feature={feature}
            updateFeature={updateFeature}
            selected={selected}
            price={price}
          />
      );
    });

 }
export default  Specs;

