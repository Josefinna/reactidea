import React, { useState } from 'react';
import './contador.css'

function Contador() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='container-contador'> {/*agregar .css, listo!*/}
      <p>Cantidad: </p>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Contador;