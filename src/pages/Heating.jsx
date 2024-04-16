import React, { useContext, useState } from 'react';
import { HasSecondary, Heat, HeatedFloors, InstallationYear, Source } from '../components/Heating';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/Submit';
import { FormDataContext } from '../context/FormDataContext';

const Heating = (props) => {
  const { formData } = useContext(FormDataContext);

  const [primaryHeat, setPrimaryHeat] = useState(formData.primaryHeat || '');
  const [primarySource, setPrimarySource] = useState(formData.primarySource || '');
  const [heatInstallYear, setHeatInstallYear] = useState(formData.heatInstallYear || '');
  const [hasSecondary, setHasSecondary] = useState(formData.hasSecondaryHeat || 'No');
  const [secondaryHeat, setSecondaryHeat] = useState(formData.secondaryHeat || '');
  const [secondarySource, setSecondarySource] = useState(formData.primarySource || '');
  const [heatedFloors, setHeatedFloors] = useState(formData.heatedFloors || { Rooms: 0 });
  const [error, setError] = useState(null);

  const validateAndProceed = () => {
    if (!primaryHeat || !primarySource || !heatInstallYear || !heatedFloors) {
      setError('All fields must be filled out');
      return null;
    } else {
      setError(null);
      props.handleNext();
      return {
        primaryHeat,
        primarySource,
        heatInstallYear,
        hasSecondary,
        secondaryHeat,
        secondarySource,
        heatedFloors
      };
    }
  };

  return (
    <div className="page">
      <BackButton pageName={'Insulation'} route={'/insulation'} />
      <Source source={primarySource} setSource={setPrimarySource} />
      <Heat
        question="What is the primary source of heat for your home?"
        label="You'll have the option to enter a fuel type for a secondary system later."
        popup="What is the primary fuel source of the unit that you use to heat your home most of the time?"
        heat={primaryHeat}
        setHeat={setPrimaryHeat}
        source={primarySource}
      />
      <InstallationYear
        installationYear={heatInstallYear}
        setInstallationYear={setHeatInstallYear}
      />
      <HasSecondary hasSecondary={hasSecondary} setHasSecondary={setHasSecondary} />
      {hasSecondary.includes('Yes') ? (
        <>
          <Heat
            question="What is the secondary source of heat for your home?"
            heat={secondaryHeat}
            setHeat={setSecondaryHeat}
            source={secondarySource}
          />
          <Source source={secondarySource} setSource={setSecondarySource} />
        </>
      ) : null}
      <HeatedFloors heatedFloors={heatedFloors} setHeatedFloors={setHeatedFloors} />
      <SubmitButton handleNext={validateAndProceed} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Heating;
