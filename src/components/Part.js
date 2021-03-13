import React from 'react'
import slugify from "slugify";

export default function Part({itemHash, item, feature, selected, updateFeature, price}) {
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
            
    )
}
