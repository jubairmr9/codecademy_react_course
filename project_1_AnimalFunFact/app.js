import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

let title = '';

const background = (
  <img 
    className='background'
    alt='ocean'
    src='/images/ocean.jpg' />
)


const images = [];
for (const animal in animals) {
  images.push(<img 
    onClick={displayFact}
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role='button' />)
}

const animalFacts = (
  <div>
    <h1>
      {title || 'Click an animal for a fun fact'}
    </h1>
    {!showBackground && background}
    <div className='animals'>
      {images}
    </div>
    <p id='fact'>

    </p>
  </div>
);

function displayFact(e) {
  let facts = animals[e.target.alt].facts;
  let rand = Math.floor(Math.random() * facts.length);
  let fact = animals[e.target.alt].facts[rand];
  document.getElementById('fact').innerHTML = fact;
}
const showBackground = false;


ReactDOM.render(animalFacts, document.getElementById('root'));
