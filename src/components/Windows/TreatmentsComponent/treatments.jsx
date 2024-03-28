import SimpleQuestion from '../../SimpleQuestion';

const Treatments = (props) => {
  const { treatments, setTreatments } = props;

<<<<<<< HEAD
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
=======
  return (
    <SimpleQuestion
      question="Do your windows have any special energy efficiency treatment?"
      subtext="Select all that apply"
      popup="Place a lit lighter or match or even a laser close to the window. If all the reflections are the same color, you do not have Low E glass."
      options={[
        'Low-E Coating',
        'Gas-Filled (e.g. Argon) Windows',
        'Tinting / Snart Glass',
        'Not Sure'
      ]}
      answer={treatments}
      setAnswer={setTreatments}
      selectMultiple={true}
    />
  );
};
>>>>>>> edfdce6b7e2ba1aca6e877cfe4ea8210b39c90db

export default Treatments;
