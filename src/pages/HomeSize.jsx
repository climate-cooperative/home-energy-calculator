import React, { useState, useContext } from 'react';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/Submit';
import '../styles/page.css';
import { SqrFeet, Rooms, Layout, CrawlSpace } from '../components/HomeSize';
import { useSelector } from 'react-redux';
const HomeSize = (props) => {
  const  formData  = useSelector(state=>state.formdatacontext);
  const [sqrfeet, setSqrfeet] = useState(formData.sqrfeet || '');
  const [rooms, setRooms] = useState(
    formData.rooms || {
      Bedrooms: 0,
      Bathrooms: 0,
      Kitchens: 0
    }
  );
  const [crawlspace, setCrawlspace] = useState(formData.crawlspace || '');
  const [layout, setLayout] = useState(
    formData.layout || {
      stories: 0,
      basement: 0
    }
  );
  const [error, setError] = useState(null);

  const validateAndProceed = () => {
    if (!sqrfeet || !rooms || !crawlspace || !layout) {
      setError('All fields must be filled out');
      return null;
    } else if (sqrfeet < 100) {
      setError('Home size must be at least 100 square feet');
      return null;
    } else {
      setError(null);
      props.handleNext();
      return { sqrfeet, rooms, crawlspace, layout };
    }
  };

  return (
    <div className="page">
      <BackButton pageName={'Location'} route={'/location'} />
      <SqrFeet sqrfeet={sqrfeet} setSqrfeet={setSqrfeet} />
      <Rooms rooms={rooms} setRooms={setRooms} />
      <CrawlSpace crawlspace={crawlspace} setCrawlspace={setCrawlspace} />
      <Layout layout={layout} setLayout={setLayout} />
      <SubmitButton handleNext={validateAndProceed} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default HomeSize;
