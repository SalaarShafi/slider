import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value === people.length) {
        setValue(1);
      } else {
        setValue(value + 1);
      }
    }, 3000);
    return ()=> clearInterval(interval);
  }, [value])

  const handleNext = ()=> {
    if (value === people.length) {
      setValue(1)
    } else{
      setValue( value + 1 );

    }
  }
  const handlePrev = ()=> {
  if (value === 1) {
      setValue(people.length)
    } else{
      setValue( value - 1 );

    }
  }

  return (<section className='section'>
    <div className='title'>
      <h2><span>/</span>Reviews</h2>
    </div>
    
    <article className='section-center'>
      
      {people.map((person)=> {
      const {id, image, name, title, quote} = person;
      let slideClass = 'nextSlide';

      if (person.id === value) {
        slideClass = 'activeSlide';
      } 
      if (person.id === value-1 || value === 1 && id === people.length) {
        slideClass = 'lastSlide';
      }
      if (person.id === value+1) {
        slideClass = 'nextSlide';
      }
      console.log(slideClass);

      return (
        <article key={id} className={slideClass} >
          <h3 className='title'>{title}</h3>
          <img className='person-img' src={image} alt=  {name}/>
          <h4>{name}</h4>
          <FaQuoteRight className='icon'></FaQuoteRight>
          <p className='text'>{quote}</p>
        </article>
      )
      })}
      <FiChevronLeft onClick={handlePrev} className='prev'></FiChevronLeft>
      <FiChevronRight onClick={handleNext} className='next'></FiChevronRight>
    </article>
    
  </section>
  )
}

export default App;
