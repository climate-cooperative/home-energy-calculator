import React, { useState, useEffect, useRef } from 'react';

const Arc = ({ score, width, height }) => {
    const maxScore = 100;
    const scorePerArc = maxScore / 3;
    const arcPathsRef = useRef([]);
    const [circleInfo, setCircleInfo] = useState({ x: 0, y: 0, color: '#fff' });
    const [center, setCenter] = useState({ x: 0, y: 0 });
    const [circleRadius, setCircleRadius] = useState(0);

    const gradientColors = {
        gradient1: "#F27374",
        gradient2: "#FFA685",
        gradient3: "#4892A7"
    };

    const arcsInfo = [
        { startAngle: 230, endAngle: 310, gradientId: "gradient1" },
        { startAngle: 320, endAngle: 400, gradientId: "gradient2" },
        { startAngle: 50, endAngle: 130, gradientId: "gradient3" }
    ];

    const scoreToAngle = (arcScore, arcIndex) => {
        const arcLength = arcsInfo[arcIndex].endAngle - arcsInfo[arcIndex].startAngle;
        return arcsInfo[arcIndex].startAngle + (arcScore / scorePerArc) * arcLength;
    };

    const describeArc = (radius, startAngle, endAngle) => {
        const start = polarToCartesian(center.x, center.y, radius, startAngle);
        const end = polarToCartesian(center.x, center.y, radius, endAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

        return [
            'M', start.x, start.y,
            'A', radius, radius, 0, largeArcFlag, 1, end.x, end.y
        ].join(' ');
    };

    const calculateScores = (totalScore) => {
        let remainingScore = totalScore;
        return arcsInfo.map((_, index) => {
            if (remainingScore > scorePerArc) {
                remainingScore -= scorePerArc;
                return scorePerArc;
            } else {
                const scoreForArc = remainingScore;
                remainingScore = 0;
                return scoreForArc;
            }
        });
    };

    useEffect(() => {
        setCenter({ x: width / 2, y: height / 2 });
        setCircleRadius(0.95 * Math.min(width, height) / 2 - 1);
    }, [score, width, height]);

    useEffect(() => {
        const scores = calculateScores(score);
        const scoresToArr = scores.filter(score => score > 0);
        scoresToArr.forEach((score, index) => {
            const pathElement = arcPathsRef.current[index];
            if (pathElement && score > 0) {
                const endAngle = scoreToAngle(score, index);
                const arcPath = describeArc(circleRadius, arcsInfo[index].startAngle, endAngle);
                pathElement.setAttribute('d', arcPath);

                if (index === scoresToArr.length - 1) {
                    const { x, y } = polarToCartesian(center.x, center.y, circleRadius, endAngle);
                    setCircleInfo({ x: x - 12, y: y - 12, color: gradientColors[arcsInfo[index].gradientId] });
                }
            }
        });
    }, [center, circleRadius, score]);

    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <svg width="100%" height="100%">
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FE8E60" />
                            <stop offset="100%" stopColor="#F27374" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#E1BE45" />
                            <stop offset="52%" stopColor="#FF8B60" />
                            <stop offset="100%" stopColor="#FFA685" />
                        </linearGradient>
                        <linearGradient id="gradient3" x1="100%" y1="100%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#E8B34C" />
                            <stop offset="86%" stopColor="#4892A7" />
                        </linearGradient>
                    </defs>
                    {arcsInfo.map((arc, index) => (
                        <path
                            key={index}
                            ref={el => (arcPathsRef.current[index] = el)}
                            fill="none"
                            stroke={`url(#${arc.gradientId})`}
                            strokeWidth="8"
                            strokeLinecap="round"
                        />
                    ))}
                </svg>
                <div style={{ position: 'absolute', left: circleInfo.x, top: circleInfo.y }}>
                    <svg>
                        <circle
                            cx={12}
                            cy={12}
                            r="7"
                            fill="white"
                            stroke={circleInfo.color}
                            strokeWidth="5"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
    };
};

export default Arc;