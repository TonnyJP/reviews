import React from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [ idxActual, setIdxActual ]= React.useState(0)
  const { name, job, image, text } = people[idxActual]

  const nextReview = () => {
    setIdxActual((prev) => {
      if(prev === people.length - 1){
        return 0
      }
      return prev + 1;
    })
  }

  const prevReview = () => {
    if(idxActual === 0){
      setIdxActual(people.length - 1)
    }else{
      setIdxActual(idxActual - 1)
    }
  }
  const surpriseReview = () => {
    let numb = 0;
    do {
      numb = Math.floor(Math.random() * people.length);
    }while(numb === idxActual);
    
    setIdxActual(numb)
  }
  
  return (
  <article className="review">
    <div>
      <div className="img-container" >
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author"> {name} </h4>
      <p className="job"> {job} </p>
      <p className="info">{text} </p>
    </div>
    <div className="">
      <button onClick={nextReview} className="prev-btn">< FaChevronLeft /> </button>
      <button onClick={prevReview} className="next-btn"> < FaChevronRight/> </button>
    </div>
    <button onClick={surpriseReview} className="random-btn"> surprise me </button>
  </article>)
};

export default Review;
