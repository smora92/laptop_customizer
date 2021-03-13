import React from "react";

import Features from "./Features";

// This object will allow us to
// easily convert numbers into US dollar values

function Customize(props) {

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <Features 
        features={props.features}
        selected={props.selected}
        updateFeature={props.updateFeature} />
    </form>
  );
}

export default Customize;
