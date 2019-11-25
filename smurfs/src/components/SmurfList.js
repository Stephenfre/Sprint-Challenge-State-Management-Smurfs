import React, { useState, useEffects } from "react";
import Smurf from "./Smurf";

const SmurfsList = props => {
  return (
    <div>
      <h1>smurfs</h1>
      <div>
        {props.smurfs.map(smurf => {
          return <Smurf key={smurf.name} smurf={smurf} />;
        })}
      </div>
    </div>
  );
};

export default SmurfsList;

// const mapStateToProps = state => {
//   return {
//     titleOnProps: state.title
//   };
// };

// export default connect(
//   mapStateToProps,
//   { updateTitle } // {updateTitle: updateTitle }
// )(Title);
