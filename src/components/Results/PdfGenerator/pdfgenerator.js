import React from 'react';
import { Page,Text, Document, PDFDownloadLink,Image} from "@react-pdf/renderer"
import SurveyAnswer from './SurveyAnswer';
import SaveResultsBox from '../SaveComponent/save';
import ResultPage from './resultpage';
import CalculationGuide from './caclulationguide';

const PDFGenerator = (props) => {
  const imageData =props.imageData;
  const MyDocument = () => (
    <Document style={{padding:'20px', marginTop:'20px', marginBottom: '10px'}}>
      <SurveyAnswer formData={props.formData}/>
      <CalculationGuide data = {props.data} score = {props.score}/>
      <ResultPage data={props.data} score = {props.score}/> 
    </Document>
  );

  return (
    <div>
      <PDFDownloadLink document={<MyDocument />} fileName="myDocument.pdf">
          <button onClick={props.handleSave}><SaveResultsBox/></button>
      </PDFDownloadLink>
    </div>
  );
};

export default PDFGenerator;