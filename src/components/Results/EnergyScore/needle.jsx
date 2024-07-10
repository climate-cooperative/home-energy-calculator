import React, { useState, useEffect, useRef } from 'react';

const Needle = ({ desiredScore, scoreLabel, width, height }) => {
  const needleRef = useRef(null);
  const [angle, setAngle] = useState(150);
  const [score, setScore] = useState(0);
  const [radius, setRadius] = useState(0);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const startAngle = 140;

  const calculateEndAngle = (score) => {
    const effectiveScore = Math.min(100, Math.max(0, score));
    let rawEndAngle;
    if (effectiveScore <= 33) {
      rawEndAngle = startAngle + (effectiveScore / 33) * 80;
    } else if (effectiveScore <= 66) {
      rawEndAngle = startAngle + 90 + ((effectiveScore - 33) / 33) * 80;
    } else {
      rawEndAngle = startAngle + 180 + ((effectiveScore - 66) / 33) * 80;
    }
    return rawEndAngle;
  };

  const endAngle = calculateEndAngle(desiredScore);

  const calculatePosition = (angle) => {
    const x = center.x + radius * Math.cos((angle * Math.PI) / 180);
    const y = center.y + radius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };

  const calculateRotation = (angle) => {
    return angle + 90;
  };

  useEffect(() => {
    setAngle(endAngle);
    setScore(desiredScore);
  }, [endAngle]);

  useEffect(() => {
    setRadius((0.75 * Math.min(width, height)) / 2);
    setCenter({ x: width / 2, y: height / 2 });
  }, [width, height]);

  const position = calculatePosition(angle);
  const rotation = calculateRotation(angle);

  return (
    <div style={{ width: '100%', height: '100%' }} ref={needleRef}>
      <svg width="100%" height="100%" style={{ position: 'absolute', left: 0, top: 0, zIndex: 20 }}>
        <circle cx={center.x} cy={center.y} r={radius} fill="white"></circle>
      </svg>
      <svg width="100%" height="100%" style={{ position: 'absolute', left: 0, top: 0, zIndex: 25 }}>
        <circle
          cx={center.x}
          cy={center.y}
          r={0.85 * radius}
          stroke="#ddd"
          strokeWidth={2}
          fill="white"
        ></circle>
      </svg>
      <svg width="100%" height="100%" style={{ position: 'absolute', left: 0, top: 0, zIndex: 10 }}>
        <polygon
          points={`${position.x}, ${position.y - 7} ${position.x - 7},${position.y + 5} ${position.x + 7},${position.y + 5}`}
          fill="black"
          transform={`rotate(${rotation} ${position.x} ${position.y})`}
        />
      </svg>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 30,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <span style={{ fontSize: '40px', fontWeight: 'bold' }}>{parseInt(score)}</span>
        <span style={{ fontWeight: 'bold' }}>{scoreLabel}</span>
      </div>
    </div>
  );
};

export default Needle;
