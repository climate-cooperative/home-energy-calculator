import React from 'react';
import ImageQuestion from '../../ImageQuestion';

const Low = ({color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_0"
    x={0}
    y={0}
    style={{
      enableBackground: "new 0 0 48 35",
    }}
    viewBox="0 0 48 35"
  >
    <style>{`.st0{fill:${color}}`}</style>
    <path
      d="M15.9 28V12.9l8-5.9 8.1 5.9V28h-4.9v-9.3h-6.5V28h-4.7zM28.1 9.3h16.8l1.5 3.1h-14zM19.7 9.3H3.1l-1.5 3.1h13.9zM3.1 13v15h12.2V13H3.1zm8.8 9.8H6.4v-5.6H12v5.6zM32.7 13v15h12.2V13H32.7zm8.9 9.8H36v-5.6h5.6v5.6z"
      className="st0"
    />
  </svg>
)

const Medium = ({color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    style={{
      enableBackground: "new 0 0 48 35",
    }}
    viewBox="0 0 48 35"
  >
    <style>{`.st1{fill:${color}}`}</style>
    <path
      d="M28.8 7.1h17.5l1.5 3.1H34zM19 7.1H1.7L.2 10.2H14zM1.7 10.8v19.4h12.1V10.8H1.7zm8.8 8.1H5v-2c0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7v2zm0 7.6H5v-4.8h5.5v4.8zM34.2 10.8v19.4h12.1V10.8H34.2zm8.9 7.7h-5.5v-2c0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7v2zm0 7.6h-5.5v-4.8h5.5v4.8zM23.9 4.8l-9.4 5.9v19.5h6V21H27v9.2h6.4V10.7l-9.5-5.9zm5.2 12.4H18.8v-4.4H29v4.4z"
      className="st1"
    />
  </svg>
)

const High = ({color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_2"
    x={0}
    y={0}
    style={{
      enableBackground: "new 0 0 48 35",
    }}
    viewBox="0 0 48 35"
  >
    <style>{`.st2{fill:${color}}`}</style>
    <path
      d="M20.9 33.8h24.3V8.7L33 1.2 21 8.7v25.1zm11.7-1.9h-9.5V18.3h9.5v13.6zm10.4 0h-9.3V18.3H43v13.6zm0-14.8H23.1v-5.9H43v5.9zM23.1 10l10-6.3L43 10H23.1z"
      className="st2"
    />
    <path
      d="M33.8 24.5h9.3v1.1h-9.3zM29.2 5.3h.9v4.9h-.9zM26.8 4.1l-22.1.1-1.9 3.9h17.7zM4.7 8.9v24.9h4.7V23.6h6.1v10.2h4.7V8.9H4.7zm7.1 8.8H6.7v-6.8h5.1v6.8zm6.1 0h-5.1v-6.8h5.1v6.8z"
      className="st2"
    />
  </svg>
)

const WindowConverage = (props) => {
  const { windows, setWindows } = props;

  return (
    <ImageQuestion
      question="What is the window coverage of your home?"
      label="Most homes have medium window coverage.  Select Low if your home has very few windows.  Select High if your home has a lot of windows."
      content={[
        { values: 'Low', label: 'Low', icon: Low },
        { values: 'Medium', label: 'Medium', icon: Medium },
        { values: 'High', label: 'High', icon: High }
      ]}
      state={windows}
      setState={setWindows}
    />
  );
};

export default WindowConverage;
