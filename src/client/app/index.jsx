import React from 'React';
import {render} from 'react-dom';
import Header from './Header/Header.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
    	<Header />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));