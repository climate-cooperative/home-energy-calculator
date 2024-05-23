import React, { useState, useContext } from 'react';
import { Page,Text, Document, PDFDownloadLink,StyleSheet, Image} from "@react-pdf/renderer"
import { fontSize } from '@mui/system';
import { Science } from '@mui/icons-material';
import { IonIcon } from '@ionic/react';
// Define stylesheet
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    padding: 10
  },
  text: {
    marginBottom: 10,
    fontSize: 15,
    //padding: 20,
    marginLeft: 30
  },
});


const ResultPage = (props) => {
  
  const data = props.data;

  const gradeColors = {
    'A+': 'green',
    'A-': 'green',
    'B+': 'gold',
    'B-': 'gold',
    'C+': 'red',
    'C-': 'red',
    'D+': 'red',
    'D-': 'red',
    'F': 'black'
  };
  const MyDocument = () => (
    <Page style={{padding:'10px', marginTop:'20px', marginBottom:'10px', marginLeft:'10px'}}>
        <Text style={{ textAlign: 'center', fontSize: '30px' }}>
          Results
        </Text>

        <Text style={{fontSize:'26px', fontWeight:'bold', textAlign:'center', padding:'10px'}}>Your Home's Clean Energy Score:</Text>
        <Text style={{textAlign:'center', marginBottom:'10px'}}>Score: {props.score}</Text>

        {data.grades && data.grades.map((score) => (
              <>
                <Text style={{display:'flex', marginBottom:'20px', padding:'10px'}}>
                    <Text style={{padding:'10px', marginBottom:'20px'}}>{score.title}</Text>
                    <Text style={{color: gradeColors[score.grade], marginLeft:'10px'}}>  Grade: {score.grade}</Text>
                </Text>
                {/* {score.content.map((item) => {
                (
                    <>
                        <Text style={{marginLeft:'30px', fontSize:'15px'}}>{item.title}</Text>
                    </>
                )})}                   */}
                  
              </>
        ))}
        
        
    </Page>
    
  );

  return (
    <MyDocument/>
  );
};

export default ResultPage;