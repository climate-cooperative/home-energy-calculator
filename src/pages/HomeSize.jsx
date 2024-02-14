import { useState } from 'react';
import SubmitButton from '../components/Submit';
import '../styles/page.css';
import { SqrFeet, Rooms, Layout, CrawlSpace } from '../components/HomeSize';

const HomeSize = (props) => {
  const [sqrfeet, setSqrfeet] = useState(props.homeSize || '');
  const [rooms, setRooms] = useState(
    props.rooms || {
      bedrooms: 0,
      bathrooms: 0,
      kitchens: 0
    }
  );
  const [crawlspace, setCrawlspace] = useState(props.layout || '');
  const [layout, setLayout] = useState(
    props.crawlspace || {
      stories: 0,
      basement: 0
    }
  );
  const [error, setError] = useState(null);

  const validateAndProceed = () => {
    if (!sqrfeet || !rooms || !crawlspace || !layout) {
      setError('All fields must be filled out');
      return null;
    } else {
      if (sqrfeet < 100) {
        setError('Home size must be at least 100 square feet');
        return null;
      }
      setError(null);
      props.handleNext();
      return { sqrfeet, rooms, crawlspace, layout };
    }
  };

  return (
    <div className="page">
      {error && <div className="error">{error}</div>}
      <SqrFeet sqrfeet={sqrfeet} setSqrfeet={setSqrfeet} />
      <Rooms rooms={rooms} setRooms={setRooms} />
      <CrawlSpace crawlspace={crawlspace} setCrawlspace={setCrawlspace} />
      <Layout layout={layout} setLayout={setLayout} />
      <SubmitButton handleNext={validateAndProceed} />
    </div>
  );
};

export default HomeSize;
