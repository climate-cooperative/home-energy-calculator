import React, { useState, useEffect, useContext, useRef } from 'react';
import { Grid } from '@mui/material';
import { EnergyScore, Save, IndividualScore } from '../components/Results';
import { FormDataContext } from '../context/FormDataContext';
import handleCalculation from '../helpers/calculation.js';
import '../styles/page.css';
import Header from '../components/Results/Header';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
import { Oval } from 'react-loader-spinner';
import PDFGenerator from '../components/Results/PdfGenerator/pdfgenerator.js';
import { useSelector } from 'react-redux';
const Results = () => {
  const  formData  = useSelector(state=>state.formdatacontext);
  const [ data, setData ] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const calculate = async () => {
      const calc_data = await handleCalculation(formData);
      setData(calc_data);
    };
  
    calculate();
  }, [formData]);
 

  const saveToPdf = () => {
    console.log("saving");
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "mm", "a4")
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save("Result.pdf");
    })
  }


  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Capture the HTML element as an image using html2canvas
    const captureImage = async () => {
      const canvas = await html2canvas(document.getElementById('result'));
      setImageData(canvas.toDataURL('image/png'));
    };
    captureImage();
  }, []);


  if (data === null) {
    return(
      <div className='spinner-container '>
        <Oval
          visible={true}
          height="30"
          width="100"
          color="#4A6CF7"
          secondaryColor='#3C56C0'
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
          className="oval"
        />
        <div>Loading...</div>
      </div>
    )
  }
  const score  = Math.floor(100 * (16000 / (data.co2_total + data.avgHome)));
  return (
    <div className="results" ref={inputRef} id="result">
      <Header />
      <Grid container spacing={4} style={{ padding: '20px' }}>
        <Grid item xs={12} md={4.5}>
          <EnergyScore 
            yourHomeValue={data.co2_total}
            avgHomeState={data.avgHome}
            avgHomeUS={16000}
            details={data.details}
            score = {score}
          />
        </Grid>
        <Grid item xs={12} md={7.5}>
          <Grid container spacing={2} minHeight={ "573.97px"}>
            {data.grades && data.grades.map((score, index) => (
              <Grid  item xs={12} sm={6} key={index} >
                <IndividualScore                  
                  title={score.title}
                  icon={score.icon}
                  grade={score.grade}
                  content={score.content}
                  rows={score.rows}
                  current={score.current}
                  recommended={score.recommended}
                  minHeight = {"300px"}
                />
              </Grid>
            ))}
            <Grid  item xs={12} sm={6} >
              <PDFGenerator formData={formData} data={data} score = {score} handleSave = {saveToPdf}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Results;