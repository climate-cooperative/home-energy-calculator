import React from 'react';
import CounterQuestion from '../../CounterQuestion/counterquestion';

const Rooms = (props) => {
  const { rooms, setRooms } = props;
  const content = [
    { label: 'Bedrooms', incrementValue: 1, decrementValue: 1 },
    { label: 'Bathrooms', incrementValue: 0.5, decrementValue: 0.5 },
    { label: 'Kitchens', incrementValue: 1, decrementValue: 1 }
  ];

  return (
    <CounterQuestion
      question="How many of each room do you have?"
      content={content}
      popup={
        'Bathrooms that have just a toilet and sink (no bathtub or shower) should be counted as half (.5) bathrooms.\nA finished basement is one that is complete and similar to the upstairs living space. It generally includes an electrical system, heat, finished floors, an accessible entrance/stairway, level ceilings, and finished walls.'
      }
      state={rooms}
      setState={setRooms}
    />
  );
};

export default Rooms;
