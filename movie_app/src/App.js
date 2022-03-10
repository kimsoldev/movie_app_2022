
import React from 'react';
import { render } from 'react-dom';

function Food({name, picture}){
  return (
  <div>
    <h1>I like { name }</h1>
    <img src= { picture } art={ name }/>  
  </div>
);
}

const foodILIke= [
  {
    id:1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-/jpg',
  },
  {
    id:2,
    name: 'Samgyeopsal',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-/jpg',
  },
  {
    id:3,
    name: 'Doncasu',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-/jpg',
  },  
];


function App() {

  return (
  <div>
    {foodILIke.map(dish => ( <Food nmae={dish.name} picture={dish.image} key={dish.id}/>))}
  </div>
  );
}

export default App;
