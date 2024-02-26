import React from 'react';
import CounterItem from '../CounterItem';
import PopupHint from '../PopupHint';
import Typography from '@mui/material/Typography';

const CounterQuestion = ({ question, label=null, popup=null, content, state, setState }) => {
    return (
        <div  className="component" style={{width: '70%'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h2">{question}</Typography>
                {popup && <PopupHint content={popup} />}
            </div>
            {label && <Typography variant="h3">{label}</Typography>}
            <div>
                {content.map((item, index) => (
                    <CounterItem 
                        key={index}
                        label={item.label}
                        count={state[item.label]}
                        incrementValue={item.incrementValue}
                        decrementValue={item.decrementValue}
                        setCount={setState}
                    />
                ))}
            </div>
        </div>
    );
}

export default CounterQuestion;