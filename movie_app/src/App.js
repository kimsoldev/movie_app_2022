
import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating }){
  return (
  <div>
    <h1>I like { name }</h1>
    <h4>{rating}/5.0np</h4>
    <img src= { picture } art={ name }/>  
    
  </div>
);
}

const foodILIke= [
  {
    id:1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-/jpg',
    rating: 5,
  },
  {
    id:2,
    name: 'Samgyeopsal',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-/jpg',
    rating: 4,
  },
  {
    id:3,
    name: 'Doncasu',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-/jpg',
    rating: 3.5,
  },  
];


function App() {

  return (
  <div>
    {foodILIke.map(dish => ( <Food name={dish.name} picture={dish.image} key={dish.id} rating={dish.rating} />))}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  picture: PropTypes.string
};

export default App;
