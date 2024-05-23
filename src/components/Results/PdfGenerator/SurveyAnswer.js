import React, { useState, useContext } from 'react';
import { Page,Text, Document, PDFDownloadLink,StyleSheet} from "@react-pdf/renderer"
import { fontSize } from '@mui/system';

// Define stylesheet
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    padding: 10
  },
  text: {
    marginBottom: 5,
    fontSize: 15,
    //padding: 20,
    marginLeft: 30
  },
});

const SurveyAnswer = (props) => {
  const formData = props.formData;
  const MyDocument = () => (
    <Page style={{padding:'10px', marginTop:'20px', marginBottom:'10px', marginLeft:'10px'}}>
        <Text style={{ textAlign: 'center', fontSize: '30px' }}>
          Your Survey Answers
        </Text>
        <Text style={styles.title}>Home Type:</Text>
        <Text style={styles.text}>Owner: {formData.owner}</Text>
        <Text style={styles.text}>Built: {formData.homeBuilt}</Text>
        
        <Text style={styles.title}>Location:</Text>
        <Text style={styles.text}>Zipcode: {formData.zipcode}</Text>
        
        <Text style={styles.title}>Home Size:</Text>
        <Text style={styles.text}>Size: {formData.homeSize}</Text>
        <Text style={styles.text}>Bedrooms: {formData.rooms.Bedrooms}</Text>
        <Text style={styles.text}>Bathrooms: {formData.rooms.Bathrooms}</Text>
        <Text style={styles.text}>Kitchens: {formData.rooms.Kitchens}</Text>
        <Text style={styles.text}>Basements: {formData.layout.basements}</Text>

        <Text style={styles.title}>Windows:</Text>
        <Text style={styles.text}>Windows: {formData.windows}</Text>
        <Text style={styles.text}>Panes: {formData.panes}</Text>
        <Text style={styles.text}>Treatments: {formData.treatments}</Text>

        <Text style={styles.title}>Insulation:</Text>
        <Text style={styles.text}>Windows: {formData.windows}</Text>
        <Text style={styles.text}>Panes: {formData.panes}</Text>
        <Text style={styles.text}>Treatments: {formData.treatments}</Text>

        <Text style={styles.title}>Heating:</Text>
        <Text style={styles.text}>Heating: {formData.primaryHeat}</Text>
        <Text style={styles.text}>Heating Source: {formData.primarySource}</Text>
       
        <Text style={styles.title}>Secondary Heating:</Text>
        {formData.secondaryHeating ? (
          <>
            <Text style={styles.text}>Secondary Heating: {formData.secondaryHeating}</Text>
            <Text style={styles.text}>Heating Type: {formData.secondaryHeatingType}</Text>
          </>
          ) : (
            <Text style={styles.text}>No Secondary Heating</Text>
        )}

        <Text style={styles.title}>Cooling:</Text>
        {formData.hasAirCond ? (
            <Text style={styles.text}>Cooling: {formData.coolingSystem}</Text>
          ) : (
        <Text style={styles.text}>No Cooling</Text>
        )}

        <Text style={styles.title}>Water Heater:</Text>
        <Text style={styles.text}>Water Heater: {formData.waterHeater}</Text>
        <Text style={styles.text}>Heating Type: {formData.fuelSource}</Text>

        <Text style={styles.title}>Lighting:</Text>
        <Text style={styles.text}>Lighting: {formData.efficiency}</Text>

        <Text style={styles.title}>Appliances:</Text>
        {Object.keys(formData.kitchen).map((appliance, index) => (
          <Text key={index} style={styles.text}>
            {appliance}: {formData.kitchen[appliance]}
          </Text>
        ))}

        <Text style={styles.title}>Energy:</Text>
        <Text style={styles.text}>Energy: {formData.energy}</Text>
        
    </Page>
    
  );
  console.log(formData);

  return (
    <MyDocument/>
  );
};

export default SurveyAnswer;