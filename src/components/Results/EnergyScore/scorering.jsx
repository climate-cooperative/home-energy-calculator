import React, { useState, useEffect, useRef } from 'react';
import Needle from './needle';
import Arc from './arc';
import backgroundImage from '../../../assets/dial_bg.png';

const COLORS = ['#f00', '#ffbf00', '#00ff00'];

const ScoreRing = ({ value, scoreLabel }) => {
  const dialRef = useRef(null);
  const score = Math.min(Math.max(value, 0), 100);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const getDimensions = () => {
      if (dialRef.current) {
        setWidth(dialRef.current.offsetWidth);
        setHeight(dialRef.current.offsetHeight);
      }
    };
    getDimensions();

    const resizeObserver = new ResizeObserver(getDimensions);
    if (dialRef.current) {
      resizeObserver.observe(dialRef.current);
    }

    return () => {
      if (dialRef.current) {
        resizeObserver.unobserve(dialRef.current);
      }
    };
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      position: 'relative'
    }} ref={dialRef}>
      <Needle desiredScore={score} scoreLabel={scoreLabel} width={width} height={height} />
      <Arc score={score} width={width} height={height} />
    </div >
  );
};

export default ScoreRing;
