import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <div 
              style={{
              backgroundColor: '#fafafa',
              border: '1px solid #ccc',
              padding: '0 1rem',
              margin: '1rem',
              textAlign:'center'
            }}>
            <table id="table">
                    <tr>
                        <td>
                            <label>Empresa: </label>
                        </td>
                        <td>
                        <Input/>
                        </td>
                        <td>
                            <label>Producto: </label>
                        </td>
                        <td>
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <label>Titulo: </label>
                        </td>
                        <td>
                        <Input/>
                        </td>
                        <td>
                            <label>Descripción: </label>
                        </td>
                        <td>
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <label>Precio: </label>
                        </td>
                        <td>
                        <Input/>
                        </td>
                        <td>
                            <label>Imagen: </label>
                        </td>
                        <td>
                        <Input/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <label>Moneda: </label>
                        </td>
                        <td>
                        <Input/>
                        </td>
                        <td>
                            
                        </td>
                        <td>
                        <button>Guardar: </button>
                        </td>
                    </tr>
                </table>
          </div>
        </div>
      
    );
  }
}

export default App;
