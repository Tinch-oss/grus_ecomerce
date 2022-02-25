/*

Todos los componentes de React son funciones

Este es único: 


1. tener la variable React en el scope
import React from 'react'; 
Creame una variable llamda React en este archivo index.js que tenga todo lo que hay en la libreria react en su archivo index.js  --> la línea de arriba

2. Tener la variable ReactDom en el scope
import ReactDom from 'react-dom';



3. Tener la variable ap en el scope
tener un component de React
en este caso el function app 


4. Rendirizar App en el Dom

Componentes:
1 Todos los componentes son funciones
2 Todos los componentes obligatoriamente arrancan en mayúscula. 
3 Todos los componentes tienen que retornar un elmento, no se puede más de un elemento. 
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './estilos.scss';

ReactDOM.render(<App />, document.getElementById('root'));
