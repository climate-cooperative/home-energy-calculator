import React from 'react';
import ImageQuestion from '../../ImageQuestion';
import {
  ElectricBolt,
  GasMeter,
  Propane,
  OilBarrel,
  QuestionMark
} from '@mui/icons-material';

const Wood = ({color}) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="Layer_1"
      x={0}
      y={0}
      style={{
      enableBackground: "new 0 0 48 22.3",
      }}
      viewBox="0 0 48 22.3"
  >
      <style>{`.st1{fill:${color}}`}</style>
      <path
      d="m30.3 14.4-4.1.7 3.3-.3c.4.1.7-.1.8-.4zM29.2 10.5h-.4l1.4.6c-.1-.4-.5-.6-1-.6zM15.7 16c.1 0 .1 0 0 0l5.8-.5c-.1-.3-.4-.6-.8-.7l-6.2-1.2.1 1.4c.1.6.6 1 1.1 1z"
      className="st1"
      />
      <path
      d="M15.9 17h-.2c-1.1 0-2-.8-2.1-1.9l-.1-1.7-6.3-1.2c-.6-.1-1.2.3-1.3.9l-.4 2.2c-.1.6.3 1.2.9 1.3l13.5 2.7c.6.1 1.2-.3 1.3-.9l.3-1.8-5.6.4zM40.5 16.2c-.3 0-.5-.1-.8-.2L34 13.7l-2.6.5c-.2.9-.9 1.6-1.9 1.7l-4.4.4v.2l.4 2.2c.1.6.7 1 1.3.9l13.6-2.4c.5-.1.9-.5.9-1-.2-.1-.5 0-.8 0zM40.5 15.2c.3 0 .5-.1.7-.3l-.2-1.3c-.1-.6-.7-1-1.3-.9l-3.8.7 4.2 1.7c.2.1.3.1.4.1zM24.4 10.9l-4.8.4h4c.3 0 .6-.2.8-.4z"
      className="st1"
      />
      <path
      d="M30.4 12.3 27 10.9c-.1 0-.2-.1-.3-.2l-1.1.1c-.3.9-1 1.5-2 1.5h-9c-.1.2-.1.3-.1.5l.2 2.2c0 .6.6 1 1.2 1l13.7-1.1c.6 0 1-.6 1-1.2l-.2-1.4zM30.5 7.2H16.7c-.6 0-1.1-.5-1.1-1.1V3.9c0-.6.5-1.1 1.1-1.1h13.8c.6 0 1.1.5 1.1 1.1v2.2c0 .6-.5 1.1-1.1 1.1z"
      className="st1"
      />
      <path
      d="M31.3 6.8 29 5.9c-.6-.2-1.2 0-1.4.6l-.3.7h3.2c.3 0 .6-.2.8-.4zM41.8 11.1l-9.5-3.9c-.4.6-1 1-1.8 1h-3.6l-.2.4c-.2.6 0 1.2.6 1.4l12.8 5.2c.6.2 1.2 0 1.4-.6l.8-2.1c.3-.6 0-1.2-.5-1.4zM16.7 8.2c-.9 0-1.6-.5-1.9-1.3h-5c-.6 0-1.1.5-1.1 1.1v2.2c0 .6.5 1.1 1.1 1.1h13.8c.6 0 1.1-.5 1.1-1.1v-2h-8z"
      className="st1"
      />
      <path
      d="M24.2 7.2c-.2-.2-.4-.3-.6-.3H16c.2.2.4.3.7.3h7.5z"
      className="st1"
      />
  </svg>
);

const Source = (props) => {
  const { waterHeating, source, setSource } = props;

  const sourceOptions = [
    { values: 'Electric', label: 'Electric', icon: ElectricBolt },
    { values: 'Natural Gas', label: 'Natural Gas', icon: GasMeter },
    { values: 'Propane', label: 'Propane', icon: Propane },
    { values: 'Fuel Oil', label: 'Fuel Oil / Kerosene', icon: OilBarrel },
    { values: 'Bio Fuel', label: 'Bio Fuel', icon: Wood },
    { values: 'Not Sure', label: 'Not Sure', icon: QuestionMark }
  ];

  const tanklessOptions = [sourceOptions[0], sourceOptions[1], sourceOptions[5]];

  return (
    <ImageQuestion
      question="What is the primary fuel source for heating your home?"
      label="You'll have the option to enter a fuel type for a secondary system later."
      popup="What is the primary fuel source of the unit that you use to heat your home most of the time?"
      content={waterHeating === 'Tankless' ? tanklessOptions : sourceOptions}
      state={source}
      setState={setSource}
    />
  );
};

export default Source;
