import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';


const Filter = ({ search, setRate, newRate }) => {
    const onStarClick=(nextValue, prevValue, name) => {
        setRate(nextValue);
      };
    return (
        <div>
            <input type="text" 
            placeholder="search for a movie"
            onChange={(e) => search(e.target.value)} />
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newRate}
          onStarClick={onStarClick}
        />
        </div>
    );
}

export default Filter;