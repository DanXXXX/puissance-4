import React from 'react';
import Grille from './components/Grille';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <>
        <h1>Puissance 4</h1>
       
        <Grille />

      </>
    );
  }
}
 
export default App;