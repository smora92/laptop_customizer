import React from 'react'
import Specs from './Specs';

export default function Features({ features, updateFeature, selected }) {
    return Object.keys(features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <Specs
          feature={feature} 
          features={features}
          selected={selected} 
          updateFeature={updateFeature}/>
      </fieldset>
    );
    })
}
