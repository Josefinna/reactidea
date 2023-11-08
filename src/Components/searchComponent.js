import React, { Component } from 'react';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de búsqueda, por ejemplo, redireccionar a una página de resultados
    console.log('Búsqueda realizada:', this.state.searchQuery);
  };

  render() {
    return (
      <form onSubmit={this.handleSearchSubmit} style={{ textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Buscar..."
          value={this.state.searchQuery}
          onChange={this.handleSearchChange}
          className="search-input" // Aplicamos la clase CSS al cuadro de texto
        />
        <button type="submit" className="search-button">Buscar</button> {/* Aplicamos la clase CSS al botón */}
      </form>
    );
  }
}

export default SearchComponent;