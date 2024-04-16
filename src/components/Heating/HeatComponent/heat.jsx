import React,{ useEffect } from 'react';
import ImageQuestion from '../../ImageQuestion';
import { Fireplace } from '@mui/icons-material';

const furnace = ({color}) => (
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
        d="M12.4 6.3v35.4c0 .6.5 1.1 1.1 1.1h21c.6 0 1.1-.5 1.1-1.1V6.3c0-.6-.5-1.1-1.1-1.1h-21c-.6 0-1.1.5-1.1 1.1zm16.1 20.6h4.6c.3 0 .6.4.6.9s-.3.9-.6.9h-4.6c-.3 0-.6-.4-.6-.9s.3-.9.6-.9zm0 3.5h4.6c.3 0 .6.4.6.9s-.3.9-.6.9h-4.6c-.3 0-.6-.4-.6-.9s.3-.9.6-.9zm-6.7-3.5h4.6c.3 0 .6.4.6.9s-.3.9-.6.9h-4.6c-.3 0-.6-.4-.6-.9s.3-.9.6-.9zm0 3.5h4.6c.3 0 .6.4.6.9s-.3.9-.6.9h-4.6c-.3 0-.6-.4-.6-.9s.3-.9.6-.9zm-6.7-3.5h4.6c.3 0 .6.4.6.9s-.3.9-.6.9h-4.6c-.3 0-.6-.4-.6-.9-.1-.5.2-.9.6-.9zm0 3.5h4.6c.3 0 .6.4.6.9s-.3.9-.6.9h-4.6c-.3 0-.6-.4-.6-.9-.1-.5.2-.9.6-.9zm-.1 3.4h4.6c.3 0 .6.4.6.9s-.3.9-.6.9H15c-.3 0-.6-.4-.6-.9s.2-.9.6-.9zm4.7 5.3h-4.6c-.3 0-.6-.4-.6-.9s.3-.9.6-.9h4.6c.3 0 .6.4.6.9s-.3.9-.6.9zm2-5.3h4.6c.3 0 .6.4.6.9s-.3.9-.6.9h-4.6c-.3 0-.6-.4-.6-.9s.3-.9.6-.9zm4.7 5.3h-4.6c-.3 0-.6-.4-.6-.9s.3-.9.6-.9h4.6c.3 0 .6.4.6.9.1.5-.2.9-.6.9zm2-5.3H33c.3 0 .6.4.6.9s-.3.9-.6.9h-4.6c-.3 0-.6-.4-.6-.9s.3-.9.6-.9zm4.8 5.3h-4.6c-.3 0-.6-.4-.6-.9s.3-.9.6-.9h4.6c.3 0 .6.4.6.9s-.3.9-.6.9z"
        style={{
          fill: color,
        }}
      />
    </svg>
);

const floor = ({color}) => (
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
    <path
      d="M7.6 16.7h4.5v1.2H7.6zM35.9 16.7h4.5v1.2h-4.5zM44.1 4.4H3.9c-.7 0-1.4.6-1.4 1.4v9.5c0 .8.6 1.4 1.4 1.4H44c.8 0 1.4-.6 1.4-1.4V5.8c.1-.8-.6-1.4-1.3-1.4zM13.8 9.9H6.6c-.3 0-.5-.3-.5-.6s.2-.6.5-.6h7.2c.3 0 .5.3.5.6s-.3.6-.5.6zm0-2.4H6.6c-.3 0-.5-.3-.5-.6s.2-.6.5-.6h7.2c.3 0 .5.3.5.6s-.3.6-.5.6zM23 9.9h-7.2c-.3 0-.5-.3-.5-.6s.2-.6.5-.6H23c.3 0 .5.3.5.6s-.3.6-.5.6zm0-2.4h-7.2c-.3 0-.5-.3-.5-.6s.2-.6.5-.6H23c.3 0 .5.3.5.6s-.2.6-.5.6zm2-1.3h7.2c.3 0 .5.3.5.6s-.2.6-.5.6H25c-.3 0-.5-.3-.5-.6s.2-.6.5-.6zm7.2 3.7H25c-.3 0-.5-.3-.5-.6s.2-.6.5-.6h7.2c.3 0 .5.3.5.6s-.2.6-.5.6zm9.2 0h-7.2c-.3 0-.5-.3-.5-.6s.2-.6.5-.6h7.2c.3 0 .5.3.5.6s-.2.6-.5.6zm0-2.4h-7.2c-.3 0-.5-.3-.5-.6s.2-.6.5-.6h7.2c.3 0 .5.3.5.6s-.2.6-.5.6z"
      style={{
        fill: color,
      }}
    />
  </svg>
);

const raidant = ({color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    style={{
      enableBackground: "new 0 0 48 25.2",
    }}
    viewBox="0 0 48 25.2"
  >
    <style>
      {`.st7{fill:none;stroke:${color};stroke-linecap:round;stroke-miterlimit:10}`}
    </style>
    <path
      d="M2.4 14.5v7.4h43.8v-7.4H2.4zm40.1 4.7c-.3.3-.6.5-.9.6-.3.1-.7.2-1.1.2-.4 0-.7-.1-1.1-.2-.4-.1-.7-.3-1-.6L37.1 18c-.2-.2-.4-.3-.6-.4-.2-.1-.5-.1-.7-.1-.2 0-.5 0-.7.1-.2.1-.4.2-.6.4l-1.1 1-.1.1c-.3.3-.6.5-.9.6-.4.2-.8.3-1.2.3-.4 0-.7-.1-1.1-.2-.4-.1-.7-.3-1-.6L27.8 18c-.2-.2-.4-.3-.6-.4-.2-.1-.5-.1-.7-.1-.2 0-.5 0-.7.1-.2.1-.4.2-.6.4l-1 1-.2.2c-.3.3-.6.5-.9.6-.3.1-.7.2-1.1.2-.4 0-.7-.1-1.1-.2-.4-.1-.7-.3-1-.6L18.6 18c-.2-.2-.4-.3-.6-.4-.2-.1-.5-.1-.7-.1-.2 0-.5 0-.7.1-.2.1-.4.2-.6.4l-1 1-.1.1c-.3.3-.6.5-.9.6-.3.1-.7.2-1.1.2s-.7-.1-1.1-.2c-.4-.1-.7-.3-1-.6l-1.3-1.2c-.2-.2-.4-.3-.6-.4-.2-.1-.5-.1-.7-.1-.2 0-.5 0-.7.1-.2.1-.4.2-.6.4L5.7 19l-.7-.6 1.1-1.1c.3-.3.6-.5.9-.6.3-.1.7-.2 1.1-.2s.7.1 1.1.2c.4.1.7.3 1 .6l1.2 1.2c.2.2.4.3.6.4.2.1.5.1.7.1s.5 0 .7-.1c.2-.1.4-.2.6-.4l1.1-1.1.1-.1c.3-.3.6-.5.9-.6.3-.1.7-.2 1.1-.2s.7.1 1.1.2.7.3 1 .6l1.2 1.2c.2.2.4.3.6.4.4.1.7.1.9.1.3 0 .5 0 .7-.1.2-.1.4-.2.6-.4l1.1-1.1.1-.1c.3-.3.6-.5.9-.6.3-.1.7-.2 1.1-.2s.7.1 1.1.2.7.3 1 .6l1.2 1.2c.2.2.4.3.6.4.3.1.6.1.8.1.3 0 .5 0 .7-.1.2-.1.4-.2.6-.4l1.1-1.1.1-.1c.3-.3.6-.5.9-.6.3-.1.7-.2 1.1-.2s.7.1 1.1.2.7.3 1 .6l1.2 1.2c.2.2.4.3.6.4.4.1.6.1.9.1.3 0 .5 0 .7-.1.2-.1.4-.2.6-.4l1.1-1.1.7.7-1.1 1.1z"
      style={{
        fill: color,
      }}
    />
    <path
      d="m9.8 10.8-.5-.9c-.2-.2-.3-.4-.3-.7-.1-.3-.1-.6-.1-.8 0-.3 0-.5.1-.8 0-.3.1-.5.3-.8l.5-.9c.1-.1.2-.3.2-.5s.1-.4.1-.5 0-.4-.1-.6-.1-.3-.2-.4c0 0-.4-.7-.5-.9M17 10.8l-.5-.9c-.1-.2-.2-.5-.3-.7-.1-.3-.1-.5-.1-.8 0-.3 0-.5.1-.8.1-.3.2-.5.3-.7L17 6c.1-.1.1-.3.2-.5 0-.2.1-.4.1-.5s0-.4-.1-.6c0-.2-.1-.3-.2-.5 0 0-.4-.7-.5-.9M24.3 10.8l-.5-.9c-.1-.2-.2-.5-.3-.7-.1-.3-.1-.5-.1-.8 0-.3 0-.5.1-.8.1-.3.2-.5.3-.7l.5-.9c.1-.1.1-.3.2-.5s.1-.4.1-.5 0-.4-.1-.6-.1-.4-.2-.5c0 0-.4-.7-.5-.9M31.6 10.8l-.5-.9c-.1-.2-.2-.5-.3-.7-.1-.3-.1-.5-.1-.8 0-.3 0-.5.1-.8.1-.3.2-.5.3-.7l.5-.9c.1-.1.1-.3.2-.5s.1-.4.1-.5 0-.4-.1-.6-.1-.4-.2-.5c0 0-.4-.7-.5-.9M38.8 10.8l-.5-.9c-.1-.2-.2-.5-.3-.7-.1-.3-.1-.5-.1-.8 0-.3 0-.5.1-.8.1-.3.2-.5.3-.7l.5-.9c.2-.2.2-.4.3-.6 0-.2.1-.4.1-.5s0-.4-.1-.6c-.1-.1-.1-.3-.2-.4 0 0-.4-.7-.5-.9"
      className="st7"
    />
  </svg>
);

const air_source = ({color}) => (
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
      d="M23 34.5v-8.1l-5.7 5.7c.8.7 1.6 1.2 2.6 1.7 1 .3 2 .6 3.1.7zm2 0c1.1-.1 2.1-.3 3-.7 1-.4 1.9-1 2.7-1.6L25 26.4v8.1zm7.1-3.8c.7-.8 1.2-1.7 1.7-2.6.4-1 .6-2 .7-3h-8.1l5.7 5.6zM26.4 23h8.1c-.1-1.1-.3-2.1-.8-3-.4-.9-1-1.8-1.7-2.7L26.4 23zM25 21.6l5.7-5.7c-.8-.7-1.7-1.2-2.6-1.6-1-.4-2-.7-3.1-.7v8zm-1 3.9c.4 0 .8-.1 1.1-.4.3-.3.4-.6.4-1.1s-.1-.8-.4-1.1c-.3-.3-.6-.4-1.1-.4s-.8.1-1.1.4c-.3.3-.4.6-.4 1.1s.1.8.4 1.1c.3.3.7.4 1.1.4zm-1-3.9v-8.1c-1.1 0-2.1.3-3 .7-1 .4-1.9 1-2.6 1.6l5.6 5.8zM13.6 23h8.1L16 17.3c-.7.8-1.2 1.7-1.6 2.6-.5 1-.8 2-.8 3.1zm2.3 7.7 5.7-5.7h-8.1c.1 1.1.3 2.1.7 3 .4 1 1 1.9 1.7 2.7zM9 42c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1V9c0-.8.3-1.5.9-2.1S8.2 6 9 6h30c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v30c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9H9z"
      style={{
        fill: color,
      }}
    />
  </svg>
);

const geothermal = ({color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 48 48",
    }}
    viewBox="0 0 48 48"
  >
    <path 
      d="M13.6 36.7c1.6 0 2.9-.6 4-1.7s1.6-2.4 1.6-4V18.8c0-.7.3-1.4.8-1.9s1.1-.8 1.9-.8 1.4.3 1.9.8.8 1.1.8 1.9V31c0 1.6.6 2.9 1.6 4 1.1 1.1 2.4 1.7 4 1.7s2.9-.6 4-1.7 1.6-2.4 1.6-4V16.7c0-.7.2-1.3.7-1.8s1.1-.7 1.8-.7h4L39.4 17l2.1 2.1 6.5-6.4-6.5-6.5-2.1 2.2 2.8 2.9h-4c-1.5 0-2.8.5-3.9 1.6s-1.6 2.4-1.6 3.9v14.4c0 .7-.2 1.4-.8 1.9s-1.1.8-1.9.8-1.4-.3-1.9-.8-.8-1.1-.8-1.9V18.9c0-1.6-.5-2.9-1.6-4s-2.4-1.7-4-1.7-2.9.6-4 1.6c-1.1 1.1-1.6 2.4-1.6 4V31c0 .7-.2 1.4-.8 1.9-.5.5-1.1.8-1.9.8-.7 0-1.4-.3-1.9-.8-.2-.5-.5-1.1-.5-1.9V13.2H8V31c0 1.6.6 2.9 1.6 4 1.2 1.1 2.5 1.7 4 1.7zM5 43.2c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1V23.5h44v16.8c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9H5z" 
      style={{
        fill: color
      }}
    />
  </svg>
);

const boiler = ({color}) => (
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
      d="M31 4.4H16.4C14 4.4 12 6.3 12 8.7v22.1c0 2.4 1.9 4.3 4.3 4.3H31c2.4 0 4.3-1.9 4.3-4.3V8.7c.1-2.4-1.9-4.3-4.3-4.3zm-1.9 26.2H18.3v-1.9H29v1.9zm-5.4-12.8c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4c0 1.8-1.5 3.4-3.4 3.4z"
      style={{fill: color}}
    />
    <path
      d="M27.6 35.1v4c0 1.1.9 2 2 2h5.7M19.8 35.1v4c0 1.1-.9 2-2 2H12"
      style={{
        fill:"none",
        stroke:color,
        strokeWidth:"2.6947",
        strokeLinejoin: "round",
        strokeMiterlimit: 10
      }}
    />
    <path 
      d="M22.9 15.7h1.5v2.4h-1.5z"
      style={{fill: color}}
    />
  </svg>
);

const space_heater = ({color}) => (
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
      d="M10.3 39.6h2.5v2.5h-2.5zM35.2 39.6h2.5v2.5h-2.5z"
      style={{
        fill: color,
      }}
    />
    <path
      d="M15.6 9V5.7c0-.4.3-.6.6-.6h15.5c.4 0 .6.3.6.6V9"
      style={{
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M34.3 8.8H13.7c-4.1 0-7.3 3.3-7.3 7.3v23.5h35.3V16.1c0-4.1-3.3-7.3-7.4-7.3zm-9 5.6h5.3c.4 0 .6.4.6.9s-.3.9-.6.9h-5.3c-.4 0-.6-.4-.6-.9s.2-.9.6-.9zm0 3.3h7.3c.4 0 .6.4.6.9s-.3.9-.6.9h-7.3c-.4 0-.6-.4-.6-.9s.2-.9.6-.9zm-2.6 11.9h-5.3c-.4 0-.6-.4-.6-.9s.3-.9.6-.9h5.3c.4 0 .6.4.6.9s-.2.9-.6.9zm0-3.4h-7.3c-.4 0-.6-.4-.6-.9s.3-.9.6-.9h7.3c.4 0 .6.4.6.9s-.2.9-.6.9zm0-3.3h-9.3c-.4 0-.6-.4-.6-.9s.3-.9.6-.9h9.3c.4 0 .6.4.6.9s-.2.9-.6.9zm0-3.3h-7.3c-.4 0-.6-.4-.6-.9s.3-.9.6-.9h7.3c.4 0 .6.4.6.9s-.2.9-.6.9zm0-3.4h-5.3c-.4 0-.6-.4-.6-.9s.3-.9.6-.9h5.3c.4 0 .6.4.6.9s-.2.9-.6.9zm7.9 13.3h-5.3c-.4 0-.6-.4-.6-.9s.3-.9.6-.9h5.3c.4 0 .6.4.6.9s-.3.9-.6.9zm-5.9-4.2c0-.5.3-.9.6-.9h7.3c.4 0 .6.4.6.9s-.3.9-.6.9h-7.3c-.4 0-.6-.4-.6-.9zm9.1 11c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4s-.7 1.4-1.4 1.4zm.8-13.5h-9.3c-.4 0-.6-.4-.6-.9s.3-.9.6-.9h9.3c.4 0 .6.4.6.9s-.3.9-.6.9z"
      style={{
        fill: color,
      }}
    />
  </svg>
);

const stove = ({color}) => (
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
        ".st0{fill:#adadad}.st2{stroke:#fff;stroke-width:2.6947;stroke-linejoin:round}.st2,.st3,.st4,.st5{fill:none;stroke-miterlimit:10}.st3{stroke:#adadad;stroke-width:2.6947;stroke-linejoin:round}.st4,.st5{stroke:#fff;stroke-width:2}.st5{stroke:#adadad}.st6{stroke:#fff}.st6,.st7,.st8,.st9{fill:none;stroke-miterlimit:10}.st7{stroke:#fff;stroke-linecap:round}.st8,.st9{stroke:#adadad}.st9{stroke-linecap:round}"
      }
    </style>
    <path
      d="M34.3 20.6h-7.6V5c0-.9-.7-1.6-1.6-1.6h-2.4c-.9 0-1.6.7-1.6 1.6v15.6h-7.6c-.9 0-1.6.7-1.6 1.6V42c0 .9.7 1.6 1.6 1.6h2.4v1.6c0 .4.3.6.6.6h1c.4 0 .6-.3.6-.6v-1.6h11.3v1.6c0 .4.3.6.6.6h1c.4 0 .6-.3.6-.6v-1.6H34c.9 0 1.6-.7 1.6-1.6V22.2c.3-.9-.4-1.6-1.3-1.6zM32.6 24v14.1h-3.8l1.2-.6c.4-.2.6-.7.4-1.1s-.7-.6-1.1-.4l-1.3.7c.7-1.1.9-2.5.4-3.8-.9-2.4-4.2-2.5-3.4-5.9.1-.3-.2-.5-.4-.3-2.1 1.2-3.6 3.7-2.3 7 .1.3-.2.5-.4.3-1.1-.8-1.2-1.9-1.1-2.8 0-.3-.4-.4-.5-.2-.4.6-.8 1.6-.8 3 .1 1 .4 1.8.8 2.4l-1.3-.7c-.4-.2-.9-.1-1.1.4s-.1.9.4 1.1l1.6.8h-4.3V24h17zm-8.3 7.6c.2 1.1 1.9 1.8 1.9 2.9 0 1.5-1.5 2.7-3.2 1.3.8-.2 1.3-.8 1.4-1.3.1-.8-.6-1.6-.1-2.9z"
      style={{fill: color}}
    />
  </svg>
)


const Heat = (props) => {
  const { question, label, heat, setHeat, source, popup } = props;

  const Electricity = [
    { values: 'Electric Baseboard', label: 'Baseboard', icon: floor },
    { values: 'Electric Boiler / Radiator', label: 'Boiler / Radiator', icon: boiler },
    { values: 'Ducted Air Source Heat Pump', label: 'Ducted Air Source Heat Pump', icon: air_source },
    { values: 'Geothermal Heat Pump', label: 'Geothermal Heat Pump', icon: geothermal },
    { values: 'Electric Space Heater', label: 'Space Heater', icon: space_heater },
  ]

  const Gas = [
    { values: 'Natural Gas Forced Air Furnace', label: 'Forced Air Furnace', icon: furnace },
    { values: 'Natural Gas Boiler / Radiator', label: 'Boiler / Radiator', icon: boiler },
    { values: 'Natural Gas Space Heater', label: 'Space Heater', icon: space_heater },
    { values: 'Natural Gas Fireplace Inserts', label: 'Fireplace', icon: Fireplace },
  ]

  const PropaneAndOil = [
    { values: 'Propane Forced Air Furnace', label: 'Forced Air Furnace', icon: furnace },
    { values: 'Propane Boiler / Radiator', label: 'Boiler / Radiator', icon: boiler },
    { values: 'Propane Space Heater', label: 'Space Heater', icon: space_heater },
  ]

  const Wood = [
    { values: 'Wood Stove', label: 'Wood Stove', icon: stove },
    { values: 'Wood Pellet Stove', label: 'Pellet Stove', icon: stove },
    { values: 'Wood Fireplace', label: 'Fireplace', icon: Fireplace },
  ]

  useEffect(() => {
    setHeat('');
  }, [source]);

  return (
    <>
      {source !== '' ? (
        <ImageQuestion
          question={question}
          label={label}
          popup={popup}
          content={
            source === 'Electric'
              ? Electricity
              : source === 'Natural Gas'
                ? Gas
                : source === 'Propane' || source === 'Fuel Oil'
                  ? PropaneAndOil
                  : source === 'Bio Fuel'
                    ? Wood
                    : []
          }
          state={heat}
          setState={setHeat}
        />
      ) : null}
    </>
  );
};

export default Heat;
