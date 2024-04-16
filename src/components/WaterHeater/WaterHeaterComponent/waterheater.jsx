import React from 'react';
import ImageQuestion from '../../ImageQuestion';
import { Apple } from '@mui/icons-material';


const tank = ({color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    style={{
      enableBackground: "new 0 0 48 48",
    }}
    viewBox="0 0 48 48"
  >
    <path
      d="M24 8.4c-4.8 0-8.7-.8-8.7-1.8v37.9c0 1 3.9 1.8 8.7 1.8s8.7-.8 8.7-1.8v-38c0 1-3.9 1.9-8.7 1.9zm.6 33.7h-1.2c-.4 0-.8-.3-.8-.8v-3.5c0-.4.3-.8.8-.8h1.2c.4 0 .8.3.8.8v3.5c-.1.4-.4.8-.8.8zm0-10h-1.2c-.4 0-.8-.3-.8-.8v-3.5c0-.4.3-.8.8-.8h1.2c.4 0 .8.3.8.8v3.5c-.1.5-.4.8-.8.8z"
      style={{fill: color}}
    />
    <path
      d="M24 5.2c5 0 7.9.8 8.2 1.3-.3.5-3.2 1.4-8.2 1.4-5 0-7.9-.8-8.2-1.3.3-.6 3.2-1.4 8.2-1.4m0-.5c-4.8 0-8.7.8-8.7 1.8s3.9 1.8 8.7 1.8 8.7-.8 8.7-1.8-3.9-1.8-8.7-1.8z"
      style={{fill: color}}
    />
    <path
      d="M27.4 6V1.7h-1.5V6h-.3v.9h2.1V6zM22.1 6V1.7h-1.5V6h-.3v.9h2.1V6z"
      style={{fill: color}}
    />
  </svg>
);

const tankless = ({color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    style={{
      enableBackground: "new 0 0 48 48",
    }}
    viewBox="0 0 48 48"
  >
    <style>
      {
        ".st0{fill:#adadad}.st2,.st3{fill:none;stroke:#fff;stroke-width:2.6947;stroke-linejoin:round;stroke-miterlimit:10}.st3{stroke:#adadad}.st4{stroke:#fff;stroke-width:2}.st4,.st5,.st6,.st7,.st8,.st9{fill:none;stroke-miterlimit:10}.st5{stroke:#adadad;stroke-width:2}.st6,.st7,.st8,.st9{stroke-linecap:round}.st6{stroke:#adadad;stroke-width:2}.st7,.st8,.st9{stroke:#fff}.st8,.st9{stroke:#adadad}.st9{stroke:#fff;stroke-width:2}"
      }
    </style>
    <path
      d="M34 7.1H14c-1.2 0-2.1 1-2.1 2.1v24.5c0 1.2 1 2.1 2.1 2.1h3.2v.8h.7V41h1.5v-4.3h.7v-.8h6.4v.8h.7V41h1.5v-4.3h.7v-.8H34c1.2 0 2.1-1 2.1-2.1V9.2c0-1.2-1-2.1-2.1-2.1zm-10 4.4c1.9 0 3.5 1.6 3.5 3.5 0 1.7-1.3 3.2-2.9 3.4v-1.9h-1v1.9c-1.7-.3-2.9-1.7-2.9-3.4-.2-1.9 1.4-3.5 3.3-3.5zM31.7 33H16.3v-1.6h15.5V33z"
      style={{
        fill: color,
      }}
    />
  </svg>
);

const pump = ({color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    style={{
      enableBackground: "new 0 0 48 48",
    }}
    viewBox="0 0 48 48"
  >
    <style>{`.st1{fill:${color}}`}</style>
    <path
      d="M24 8.4c-4.8 0-8.7-.8-8.7-1.8v37.9c0 1 3.9 1.8 8.7 1.8s8.7-.8 8.7-1.8v-38c0 1-3.9 1.9-8.7 1.9zm.6 33.7h-1.2c-.4 0-.8-.3-.8-.8v-3.5c0-.4.3-.8.8-.8h1.2c.4 0 .8.3.8.8v3.5c-.1.4-.4.8-.8.8zm0-10h-1.2c-.4 0-.8-.3-.8-.8v-3.5c0-.4.3-.8.8-.8h1.2c.4 0 .8.3.8.8v3.5c-.1.5-.4.8-.8.8zm.2-21h3.1c.2 0 .4.2.4.5s-.2.5-.4.5h-3.1c-.2 0-.4-.2-.4-.5s.1-.5.4-.5zm0 1.9H29c.2 0 .4.2.4.5s-.2.5-.4.5h-4.2c-.2 0-.4-.2-.4-.5s.1-.5.4-.5zm-1.6 6.9h-3.1c-.2 0-.4-.2-.4-.5s.2-.5.4-.5h3.1c.2 0 .4.2.4.5s-.1.5-.4.5zm0-1.9H19c-.2 0-.4-.2-.4-.5s.2-.5.4-.5h4.2c.2 0 .4.2.4.5 0 .2-.1.5-.4.5zm0-2h-5.4c-.2 0-.4-.2-.4-.5s.2-.5.4-.5h5.4c.2 0 .4.2.4.5s-.1.5-.4.5zm0-1.9H19c-.2 0-.4-.2-.4-.5s.2-.5.4-.5h4.2c.2 0 .4.2.4.5s-.1.5-.4.5zm0-1.9h-3.1c-.2 0-.4-.2-.4-.5s.2-.5.4-.5h3.1c.2 0 .4.2.4.5 0 .2-.1.5-.4.5zm4.6 7.7h-3.1c-.2 0-.4-.2-.4-.5s.2-.5.4-.5h3.1c.2 0 .4.2.4.5 0 .2-.2.5-.4.5zm-3.4-2.5c0-.3.2-.5.4-.5H29c.2 0 .4.2.4.5s-.2.5-.4.5h-4.2c-.3 0-.4-.2-.4-.5zm5.7-1.4h-5.4c-.2 0-.4-.2-.4-.5s.2-.5.4-.5h5.4c.2 0 .4.2.4.5s-.2.5-.4.5z"
      className="st1"
    />
    <path
      d="M24 5.2c5 0 7.9.8 8.2 1.3-.3.5-3.2 1.4-8.2 1.4-5 0-7.9-.8-8.2-1.3.3-.6 3.2-1.4 8.2-1.4m0-.5c-4.8 0-8.7.8-8.7 1.8s3.9 1.8 8.7 1.8 8.7-.8 8.7-1.8-3.9-1.8-8.7-1.8z"
      className="st1"
    />
  </svg>
);

const WaterHeater = (props) => {
  const { waterHeating, setWaterHeating } = props;

  return (
    <ImageQuestion
      question="What type of water heater do you have?"
      content={[
        { values: 'Tank', label: 'Tank', icon: tank },
        { values: 'Tankless', label: 'Tankless', icon: tankless },
        { values: 'Heat Pump', label: 'Heat Pump', icon: pump }
      ]}
      state={waterHeating}
      setState={setWaterHeating}
    />
  );
};

export default WaterHeater;
