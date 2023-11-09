import React from 'react';
import './textBox.css';

const TextBox = (props) => {
 const { name, label, onChange, placeholder, value, error } = props;

 return (
    <div className="textBox">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        placeholder= "Escribe aquí tu texto  0/50"
        value={value}
        onChange={onChange}
      />
      {error && <p className="error">{error}</p>}
    </div>
 );
};
export default TextBox;

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//  const [inputText, setInputText] = useState('');

//  const handleInputChange = (e) => {
//     const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{1,50}$/;
//     if (e.target.value.match(regex)) {
//       setInputText(e.target.value);
//     }
//  };

//  return (
//     <div className="App">
//       {/* other components */}
//       <input
//         className="botoncito"
//         type="text"
//         value={inputText}
//         onChange={handleInputChange}
//         maxLength="50"
//       />
//     </div>
//  );
// }

// export default App;
