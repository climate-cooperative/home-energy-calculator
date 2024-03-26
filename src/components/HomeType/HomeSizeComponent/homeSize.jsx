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
