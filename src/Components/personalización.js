import React, { useState } from 'react';
import './personalización.css'
import Contador from './contador';

const GridBordado = () => {
    // Define dos estados con el hook useState
  const [selectedCell, setSelectedCell] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  // Función que se ejecuta cuando se hace clic en una celda del grid
  const handleCellClick = (index) => {
    setSelectedCell(index);
  };

  // Función para manejar la carga de una imagen
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Cuando la imagen se carga con éxito, actualiza el estado "backgroundImage" con la URL de la imagen
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    // Contenedor principal del componente con la clase "grid-container"
    <div className="grid-container">
      {/* Contenedor para el grid y el botón con la clase "grid-and-button" */}
      <div className="grid-and-button">
        {/* Contenedor del grid con la clase "grid" */}
        <div className="grid">
          {/* Genera un grid de 3x3 celdas utilizando bucles */}
          {Array.from({ length: 3 }).map((_, rowIndex) => (
            <div className="grid-row" key={rowIndex}>
              {Array.from({ length: 3 }).map((_, colIndex) => {
                const index = rowIndex * 3 + colIndex;
                return (
                  // Cada celda con la clase "cell" y maneja clics
                  <div
                    key={index}
                    className={`cell ${selectedCell === index ? 'selected' : ''}`}
                    onClick={() => handleCellClick(index)}
                    style={{ backgroundImage: selectedCell === index ? `url(${backgroundImage})` : 'none' }}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
        {/* Input para cargar una imagen */}
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
      {/* Contenedor para el título con la clase "title-container" */}
      <div className="title-container">
        {/* Título del componente */}
        <h2>Customización Bordado</h2>
        <p>Carga la imagen y posiciónala sobre la toalla</p>
      </div>
    </div>
  );
};


const Personalizar = () => {
    const [showGridBordado, setShowGridBordado] = useState (false)
    
    const toggleGridBordado = () => {
        setShowGridBordado(!showGridBordado);
    };

    return(
        <body>
          <div className='todo'>
            <div className='container-ventana'>
              <div className='imgmasprod'>
               <div className='imagen-prod'></div>
               <div className='especificación-prod'>
                <h1 className='nombre-prod'>
                    Toalla Ducha 
                </h1> 
                <div className='estrellitas'> {/* consultar backend con prof  */}
                </div>

                <p className='descripción'> Toalla de algodón turco</p>
                <p className='precio-prod'>Desde $9.990 <br className='line-break-color'/>Color</p>
               <div className='colores'>
                    <div className='Rosa'>
                    </div>
                    <div className='Verde'>
                    </div>
                    <div className='Blanco'></div>
                    <div className='Gris'> </div>
               </div>
               <Contador/>
               </div>
               </div>
                <button className='boton-bordado' onClick={toggleGridBordado}>Tu bordado aquí</button>
                {showGridBordado && <GridBordado/>}
            </div>
            </div>
        </body>
    );
}
export default Personalizar;