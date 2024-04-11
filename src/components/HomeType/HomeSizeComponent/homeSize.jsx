import React from 'react';
import ImageQuestion from '../../ImageQuestion';
import { Cottage, Apartment, HolidayVillage, Gite, Bungalow } from '@mui/icons-material';

function ManufacturedHomeIcon(props) {
  return (
    <img
      src="//s3.amazonaws.com/appforest_uf/f1658986700983x355747656802685160/Icons_ManufacturedHome_Grey.svg"
      alt="Half Built Home"
      {...props}
    />
  );
}

const HomeSize = ({ homeSize, setHomeSize }) => {
  const homeTypes = [
    { values: 'Single Family House', label: 'Single Family House', icon: Cottage },
    { values: 'Apartment or Condo', label: 'Apartment or Condo', icon: Apartment },
    { values: 'Manufactured Home', label: 'Manufactured Home', icon: ManufacturedHomeIcon },
    { values: 'Townhouse', label: 'Townhouse', icon: HolidayVillage },
    { values: 'Multi-Family', label: 'Multi-Family', icon: Gite },
    { values: 'Tiny Home', label: 'Tiny Home', icon: Bungalow }
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
