import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://localhost:3000/users').then((response) => {
      console.log(response.data);
    });
  });

  return (
    <div className='app'>
      <h2>HERE WE ARE</h2>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
