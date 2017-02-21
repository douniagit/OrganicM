import React from 'React';
import {render} from 'react-dom';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
    	<Header />
      <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
