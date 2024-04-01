import React from 'react';
import ImageQuestion from '../../ImageQuestion';
import { Cottage, Apartment, HolidayVillage, Gite, Bungalow } from '@mui/icons-material';

function ManufacturedHomeIcon(props) {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" style={{enableBackground: "new 0 0 48 48"}}>
      <path className="st0" style={{fill: props.color}} d="M31,13l-13.7,4.5H2.8v1.6l1.6,0v13.5h1.3C5.8,33.9,6.9,35,8.3,35s2.5-1,2.6-2.4H12c0.1,1.3,1.2,2.4,2.6,2.4  s2.5-1,2.6-2.4H28l-0.1-10.8h6l0.1,10.8h7.5v1.9h1.7V19.1l1.9,0.7v-1.5L31,13z M9.9,32.6C9.9,32.6,9.9,32.6,9.9,32.6  c-0.1,0.4-0.3,0.7-0.5,1c0,0,0,0,0,0c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0  c-0.1,0-0.2,0.1-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0S8.1,34,8,34c0,0,0,0,0,0c-0.1,0-0.2,0-0.2-0.1c0,0,0,0,0,0  c-0.1,0-0.2-0.1-0.2-0.1c0,0,0,0,0,0c-0.1,0-0.1-0.1-0.2-0.2c0,0,0,0,0,0c-0.3-0.3-0.5-0.7-0.5-1.2c0-0.9,0.7-1.6,1.6-1.6  s1.6,0.7,1.6,1.6C9.9,32.5,9.9,32.5,9.9,32.6L9.9,32.6z M16.2,32.6C16.2,32.6,16.2,32.6,16.2,32.6c-0.1,0.4-0.3,0.7-0.5,1  c0,0,0,0,0,0c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.2,0.1-0.2,0.1c0,0,0,0,0,0  c-0.1,0-0.2,0-0.3,0c0,0,0,0,0,0h0c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0c0,0,0,0,0,0c-0.1,0-0.2,0-0.2-0.1c0,0,0,0,0,0  c-0.1,0-0.2-0.1-0.2-0.1c0,0,0,0,0,0c-0.1,0-0.1-0.1-0.2-0.2c0,0,0,0,0,0c-0.3-0.2-0.5-0.6-0.5-1c0,0,0,0,0,0h0c0-0.1,0-0.2,0-0.2  c0-0.9,0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6C16.2,32.5,16.2,32.5,16.2,32.6L16.2,32.6z M25.2,26.5h-3.8v-4.6h3.8V26.5z M40.5,26.5h-3.8  v-4.6h3.8V26.5z"/>
    </svg>
  );
}

const HomeSize = ({ homeSize, setHomeSize }) => {
  const homeTypes = [
    { values: 'Single', label: 'Single Family House', icon: Cottage },
    { values: 'Apartment', label: 'Apartment or Condo', icon: Apartment },
    { values: 'Manufactured', label: 'Manufactured Home', icon: ManufacturedHomeIcon },
    { values: 'Townhouse', label: 'Townhouse', icon: HolidayVillage },
    { values: 'Multi', label: 'Multi-Family', icon: Gite },
    { values: 'Tiny', label: 'Tiny Home', icon: Bungalow }
  ];

  return (
    <ImageQuestion
      question="What type of home do you have?"
      content={homeTypes}
      state={homeSize}
      setState={setHomeSize}
    />
  );
};

export default HomeSize;
