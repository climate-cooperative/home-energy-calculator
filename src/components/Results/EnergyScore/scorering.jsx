import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#f00', '#ffbf00', '#00ff00'];

const ScoreRing = ({ value, scoreLabel }) => {
  const score = Math.min(Math.max(value, 0), 100);
  const colorIndex = score === 100 ? COLORS.length - 1 : Math.floor(score / (100 / COLORS.length));

  const data = [
    { value: score, fill: COLORS[colorIndex] },
    { value: 100 - score, fill: '#ccc' }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          startAngle={90}
          endAngle={-270}
          isAnimationActive={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: '1.5em', fontWeight: 'bold' }}
        >
          {score}
        </text>
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: '1em' }}
        >
          {scoreLabel}
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ScoreRing;
