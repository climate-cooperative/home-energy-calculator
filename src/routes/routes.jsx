import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { HomeType, Location, HomeSize } from '../pages';
import './main.css';

const MainRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathToStep = useMemo(
    () => ({
      '/': 0,
      '/location': 1,
      '/homesize': 2
      // add more paths as needed
    }),
    []
  );

  const [step, setStep] = useState(pathToStep[location.pathname]);

  useEffect(() => {
    setStep(pathToStep[location.pathname]);
  }, [location.pathname, pathToStep]);

  const handleNext = () => {
    const currentPath = window.location.pathname;
    let nextPath;

    switch (currentPath) {
      case '/':
        nextPath = '/location';
        break;
      case '/location':
        nextPath = '/homesize';
        break;
      case '/homesize':
        nextPath = '/nextPage'; // replace with the path to the next page
        break;
      // add more cases as needed
      default:
        nextPath = '/';
    }

    setStep(pathToStep[nextPath]);
    navigate(nextPath);
  };

  return (
    <div>
      <Navbar className="navbar" index={step} />
      <Routes>
        <Route path="/" element={<HomeType className="page" handleNext={handleNext} />} />
        <Route path="/location" element={<Location handleNext={handleNext} />} />
        <Route path="/homesize" element={<HomeSize handleNext={handleNext} />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default MainRoutes;
