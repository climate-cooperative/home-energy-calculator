import React from 'react';
import SimpleQuestion from '../../SimpleQuestion';

const Treatments = (props) => {
  const { treatments, setTreatments } = props;
    return (
        <SimpleQuestion
            question="Do your windows have any special energy efficiency treatment?"
            subtext="Select all that apply"
            popup="Place a lit lighter or match or even a laser close to the window. If all the reflections are the same color, you do not have Low E glass."
            options={['Low-E Coating', 'Gas-Filled (e.g. Argon) Windows', 'Tinting / Smart Glass', 'Not Sure']}
            answer={treatments}
            setAnswer={setTreatments}
            selectMultiple={true}
        />
    ); 
}

export default Treatments;
