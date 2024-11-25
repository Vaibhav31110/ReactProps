import React from 'react';

function FunctionProps(props) {
    return(
      <div>
        <h3>This is a function component</h3>
        <h1>
          Hello {props.name} from {props.place}. Welcome to React JS props
         </h1>
      </div>
    );
}
export default FunctionProps;