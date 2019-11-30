import React, { Component } from 'react';

export default class Header extends Component {
    constructor(){
        super();
      }


      render() {
          return (
              <div 
                style={{
                    backgroundColor: '#fafafa',
                    border: '1px solid #ccc',
                    padding: '0 1rem',
                    margin: '1rem',
                    textAlign:'center'
                    }}>  
                <h2 >BIENVENIDO.</h2>

              </div>
          );
      }
}
