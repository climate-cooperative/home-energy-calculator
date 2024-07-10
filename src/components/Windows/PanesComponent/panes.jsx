import React from 'react';
import ImageQuestion from '../../ImageQuestion';

const Single = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    style={{
      enableBackground: 'new 0 0 48 48'
    }}
    viewBox="0 0 48 48"
    {...props}
  >
    <style>
      {
        '.st7{fill:none;stroke:#7c7c7c;stroke-width:.397;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st9{fill:#eaeaea}'
      }
    </style>
    <path
      d="m16.7 2 13.6 13.3v24.2L16.7 26.6z"
      style={{
        fill: '#fff',
        stroke: '#7c7c7c',
        strokeWidth: 0.5293,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10
      }}
    />
    <path d="m20.3 22.7 6.3-5.9M19.7 25.2l6.2-5.9" className="st7" />
    <path
      d="M13.8 4.5v24.3l13.5 13.8v3.3L12 30.6V2.8zM27.8 46v-3.4l2.4-2.3h1.4l2 2.3V46z"
      className="st9"
    />
    <path d="M15.7 7v20.1l13.8 13.1-1.9 1.9-13.3-13.5V5.3z" className="st9" />
  </svg>
);

const Double = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    style={{
      enableBackground: 'new 0 0 48 48'
    }}
    viewBox="0 0 48 48"
    {...props}
  >
    <style>
      {
        '.st7{fill:none;stroke:#7c7c7c;stroke-width:.397;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st9{fill:#eaeaea}'
      }
    </style>
    <path d="m19.3 2 13.6 13.3v24.2L19.3 26.6z" className="st6" />
    <path d="m29.5 31 2.8-2.5M28.9 33.6l2.8-2.6" className="st7" />
    <path d="m16.7 2 13.6 13.3v24.2L16.7 26.6z" className="st6" />
    <path d="m20.3 22.7 6.3-5.9M19.7 25.2l6.2-5.9" className="st7" />
    <path
      d="M13.8 4.5v24.3l13.5 13.8v3.3L12 30.6V2.8zM27.8 46v-3.4l2.4-2.3H34l2 2.3V46z"
      className="st9"
    />
    <path d="M15.7 7v20.1l13.8 13.1-1.9 1.9-13.3-13.5V5.3z" className="st9" />
  </svg>
);

const Triple = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    style={{
      enableBackground: 'new 0 0 48 48'
    }}
    viewBox="0 0 48 48"
    {...props}
  >
    <style>
      {
        '.st6,.st7{fill:#fff;stroke:#7c7c7c;stroke-width:.5293;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st7{fill:none;stroke-width:.397}.st9{fill:#eaeaea}'
      }
    </style>
    <path d="m20.8 1.9 13.7 13.4v24.2L20.8 26.6z" className="st6" />
    <path d="m27.1 25.3 6.2-5.9M26.4 27.8l6.3-5.9" className="st7" />
    <path d="m18.2 1.9 13.6 13.4v24.2L18.2 26.6z" className="st6" />
    <path d="m28.4 31 2.8-2.6M27.8 33.5l2.8-2.6" className="st7" />
    <path d="m15.6 1.9 13.6 13.4v24.2L15.6 26.6z" className="st6" />
    <path d="m19.2 22.7 6.3-5.9M18.6 25.2l6.2-5.9" className="st7" />
    <path
      d="M12.7 4.5v24.3l13.5 13.8v3.3L10.9 30.5V2.7zM26.7 45.9v-3.3l2.4-2.3h5.7l2.2 2.3v3.3z"
      className="st9"
    />
    <path d="M14.6 7v20.1l13.9 13.1-2 1.9-13.3-13.5V5.3z" className="st9" />
  </svg>
);

const Panes = (props) => {
  const { panes, setPanes } = props;

  return (
    <ImageQuestion
      question="What is the number of panes in your windows?"
      popup="An easy way to tell whether or not you have single, double or triple pane windows is to shine a flashlight through the window.  If you see 1 one reflection back you have single pane windows, if you see 2 reflections back you have double pane windows and if you see 3 reflections back you have triple pane windows."
      content={[
        { values: 1, label: 'Single', icon: Single },
        { values: 2, label: 'Double', icon: Double },
        { values: 3, label: 'Triple', icon: Triple }
      ]}
      state={panes}
      setState={setPanes}
    />
  );
};

export default Panes;
