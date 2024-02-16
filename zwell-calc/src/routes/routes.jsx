import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { HomeType, Location, HomeSize, Windows, Insulation, Heating, Cooling, WaterHeating, Lighting, Appliances, Energy, Results } from '../pages';
import './main.css';

const MainRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const paths = ['/', '/location', '/homesize', '/windows', '/insulation', '/heating', '/cooling', '/waterheating', '/lighting', '/appliances', '/energy', '/score'];
  const pathToStep = new Map(paths.map((path, index) => [path, index]));

  const [step, setStep] = useState(pathToStep.get(location.pathname));

  useEffect(() => {
    setStep(pathToStep.get(location.pathname));
  }, [location.pathname]);

  const handleNext = () => {
    const currentPath = window.location.pathname;
    const currentIndex = paths.indexOf(currentPath);
    const nextPath = paths[(currentIndex + 1) % paths.length];

    setStep(pathToStep.get(nextPath));
    navigate(nextPath);
  };

  return (
    <div>
      {location.pathname !== '/score' && <Navbar className="navbar" index={step}/>}
      <Routes>
        {paths.map((path, index) => {
          const Component = [HomeType, Location, HomeSize, Windows, Insulation, Heating, Cooling, WaterHeating, Lighting, Appliances, Energy, Results][index];
          return <Route key={path} path={path} element={<Component handleNext={handleNext} />} />;
        })}
        <Route path="/score" element={<Results />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;