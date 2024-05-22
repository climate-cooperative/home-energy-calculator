import React, { useState } from 'react';
import { Page, Text, StyleSheet } from "@react-pdf/renderer"

// Define stylesheet
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    padding: 10
  },
  mtitle: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20
  },
  text: {
    marginBottom: 5,
    fontSize: 15,
    //padding: 20,
    marginLeft: 30
  },
});


const CalculationGuide = (props) => {

  const score = props.score;
  const {
    zipCode,
    state,
    solarIndex,
    heatingDegreeDays,
    coolingDegreeDays,
    groundWaterTemp,
    homeVolume,
    airChangesPerHour,
    wallRValue,
    atticRValue,
    glazingPercentage,
    heatLoss,
    heatGain
  } = props.data.details;

  let color = 'red';
  if(score < 50) color ='red';
    else if(score<100) color ='yellow';
    else scorecolor = color ='green';

  const MyDocument = () => (
    <Page style={{ padding: '10px', marginTop: '20px', marginBottom: '10px', marginLeft: '10px' }}>
      <Text style={{ textAlign: 'center', fontSize: '30px' }}>
        Calculation Guide
      </Text>
      <Text style={{ textAlign: 'center', color: color, margin:'5px'}}>{score} out of 100 </Text>
      <Text style={{ textAlign: 'center', margin:'10px'}}>Your score is based on the estimated CO2 emissions of your home </Text>
      <Text style={{ textAlign: 'center', color: 'red',margin:'5px' }}>0 = the highest possible emissions</Text>
      <Text style={{ textAlign: 'center', color: 'yellow',margin:'5px' }}>50 = an average home</Text>
      <Text style={{ textAlign: 'center', color: 'green',margin:'5px' }}>100 = a zero-emissions home</Text>
      <Text style={styles.title}>The Science Behind Your Score:</Text>
      <Text style={styles.text}>Many things go into estimating the CO₂ emissions of a home - the size of your home, the outside temperature through the year, the materials and insulation in your home, and much more! Here's a look at what we estimated some of those factors to be based on your answers.</Text>

      <Text style={styles.title}>What we estimate</Text>

      <Text style={styles.mtitle}>Your location</Text>
      <Text style={styles.text}>- Zipcode: {zipCode}</Text>
      <Text style={styles.text}>- State: {state}</Text>
      <Text style={styles.text}>- Annual Heating Degree Days: {heatingDegreeDays}</Text>
      <Text style={styles.text}>- Annual Cooling Degree Days: {coolingDegreeDays}</Text>
      <Text style={styles.text}>- Average Ground Water Temp: {groundWaterTemp}</Text>

      <Text style={styles.mtitle}>Your Home</Text>
      <Text style={styles.text}>- Home Volume:  {homeVolume}</Text>
      <Text style={styles.text}>- Air Changes per Hour (ACH): {airChangesPerHour}</Text>
      <Text style={styles.text}>- Insulated Wall R Value: {wallRValue}</Text>
      <Text style={styles.text}>- Insulated Attic/Roof R Value: {atticRValue}</Text>
      <Text style={styles.text}>- Glazing Percentage: {glazingPercentage}</Text>
      <Text style={styles.text}>- Annual BTUs of Heat Loss: {heatLoss}</Text>
      <Text style={styles.text}>- Annual BTUs of Solar Heat Gain: {heatGain}</Text>


    </Page>

  );
  console.log(props.data);

  return (
    <MyDocument />
  );
};

export default CalculationGuide;