import './index.scss';
import React from 'react';

function App() {

  const [counter, setCounter] = React.useState(0);

  const Inc = () => {
    setCounter(counter+1);
  }
  const Dec = () => {
    setCounter(counter-1);
  }

  return (
    <div className="App">
      <div>
        <h2>Лічильник:</h2>
        <h1>{counter}</h1>
        <button onClick={Dec} className="minus">- Мінус</button>
        <button onClick={Inc} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
