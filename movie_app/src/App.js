
import React from 'react';

function Food({name, picture}){
  return (
  <div>
    <h1>I like { name }</h1>
    <img src= { picture } />  
  </div>
);
}

const foodILIke= [
  {
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-/jpg',
  },
  {
    name: 'Samgyeopsal',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-/jpg',
  },
  {
    name: 'Doncasu',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-/jpg',
  },  
];

function App() {
  return (
  <div>
    {foodILIke.map(dish => (<Food name={dish.name} picture={dish.image} />))}
  </div>
  );
}

export default App;
