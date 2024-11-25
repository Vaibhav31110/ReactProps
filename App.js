import React from 'react';
import Classprops from './classprops';
import Functionprops from './functionprops';

class App extends React.Component{
  render() {
    return (
      <div>
        <Classprops name="learner 1" place="bagepalli" />
        <p>child Component</p>
        <Classprops name ="learner 2" place="banglore" />
        <button>click</button>
        <Classprops name="learner 3" place="mysore" />
        <Functionprops name="learner 4" place="madikeri" />
      </div>
    );
  }
}

export default App;