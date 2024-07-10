function homeConvert(houseSize) {
  switch (houseSize) {
    case 'Single Family House':
    case 'Manufactured Home':
    case 'Tiny Home':
      return {
        exposedWall: 1,
        exposedCeiling: 1
      };
    case 'Apartment or Condo':
      return {
        exposedWall: 0.25,
        exposedCeiling: 0
      };
    case 'Townhouse':
      return {
        exposedWall: 0.5,
        exposedCeiling: 1
      };
    case 'Multi-Family':
      return {
        exposedWall: 0.75,
        exposedCeiling: 1
      };
    default:
      return null;
  }
}

function getConversionFactor(conversionType, grid_carbon_intensity) {
  const conversionFactors = {
    Electric: grid_carbon_intensity,
    Propane: 0.000139,
    'Fuel Oil': 0.000163,
    'Natural Gas': 0.000117,
    'Bio Fuel': 0.000239
  };

  return conversionFactors[conversionType];
}

function carbonIntensityCooling(carbonIntensityGrid, efficiencyHVAC) {
  return carbonIntensityGrid / efficiencyHVAC;
}

function coeffPrimaryHeating(hasSecondarySystem) {
  return hasSecondarySystem ? 0.9 : 1;
}

function coeffSolarHeatGain(hasTintedWindowsOrEECoating) {
  return hasTintedWindowsOrEECoating ? 0.35 : 0.61;
}

function coeffWaterHeatingModifier(system) {
  return system === 'ground source heat pump' ? 20 : 0;
}

function generationNonSolar(generationSolarPanels) {
  return generationSolarPanels * -1 + 1;
}

function solarInsolationSummer(latitude) {
  return latitude * 0.007586206897 + 0.9448275862;
}

function solarInsolationWinter(latitude) {
  return Math.sqrt(latitude * -0.01082996433 + 1.00979786);
}

function sqftCalc(houseSpace, houseHomeSize, houseBasements, houseStories) {
  // houseCrawlSpace or houseExposedCeiling for houseSpace
  return (houseSpace * Number(houseHomeSize)) / (Math.ceil(houseBasements) + houseStories);
}

function unitAge(unitInstallDate) {
  const currentDate = new Date();
  const installDate = new Date(unitInstallDate);
  return (currentDate - installDate) / (365 * 24 * 60 * 60 * 1000); // Convert milliseconds to years
}

function houseAboveGroundPercent(houseStories, houseBasements) {
  return houseStories / (houseStories + houseBasements);
}

function houseVolume(houseHomeSize) {
  return houseHomeSize * 9;
}

function sqftWindows(windowCoverage, houseHomeSize, houseExposedWallsPercent) {
  return windowCoverage * houseHomeSize * houseExposedWallsPercent;
}

function sqftWalls(houseHomeSize, houseAboveGroundPercent, houseExposedWallsPercent, sqftWindows) {
  return (
    Math.sqrt(houseHomeSize / 1.5) * 5 * 9 * houseAboveGroundPercent * houseExposedWallsPercent -
    sqftWindows
  );
}

function houseBedPlusBath(bedrooms, bathrooms) {
  return bedrooms + bathrooms;
}

function solarHeatGain(solarInsolation, houseWindowExposed, coeffSolarHeatGain) {
  return (solarInsolation * 3412.14 * houseWindowExposed * coeffSolarHeatGain * 183) / 10.764;
}

function carbonIntensityHeating(efficiency, co2PerBtu) {
  return co2PerBtu / efficiency; // Replace 'efficiencyPrimary' with actual lookup value
}

function houseWindowExposed(southFacingWindowsPercent, sqftWindows) {
  return southFacingWindowsPercent * sqftWindows;
}

function rvalueWalls(
  probInsulation,
  rValueWallInsulation,
  rValueWallConstruction,
  rValueSidingMaterial
) {
  return rValueWallInsulation * probInsulation + rValueWallConstruction + rValueSidingMaterial;
}

function rvalueWindows(houseWindowPanes, houseWindowEECoatingR, houseWindowGasFilledR) {
  return houseWindowPanes + houseWindowEECoatingR + houseWindowGasFilledR;
}

function carbonIntensityHeatingTotal(
  coeffPrimaryHeating,
  carbonIntensityPrimary,
  carbonIntensitySecondary
) {
  return (
    coeffPrimaryHeating * carbonIntensityPrimary +
    (1 - coeffPrimaryHeating) * carbonIntensitySecondary
  );
}

function carbonIntensityWaterHeating(carbonIntensityGrid, efficiencyHVAC) {
  return carbonIntensityGrid / efficiencyHVAC; // Add logic for 'unitWaterHeaterAgeCoefficient'
}

function rvalueRoof(probInsulation, rValueAtticInsulation, rValueJoist, rValueAtticRoof) {
  return probInsulation * rValueAtticInsulation + rValueJoist + rValueAtticRoof; // Adjust for actual roof values
}

function btuHeatingThroughSurface(sqftArea, regionDD, rvalue) {
  if (rvalue === 0) {
    return 0;
  }
  return (sqftArea * regionDD * 24) / rvalue;
}
function surfaceHeatGainOrLoss(walls, windows, roof, floor) {
  return walls + windows + roof + floor;
}

function infiltrationHeatGainOrLoss(houseVolume, houseAirChangesPerHour, regionDD) {
  return houseVolume * houseAirChangesPerHour * regionDD * 24 * 0.018;
}
co2Heating;
function btuHeatingOrCooling(surfaceHeatGainOrLoss, infiltrationHeatGainOrLoss, solarHeatGain) {
  // summer is positive, winter is negative
  return surfaceHeatGainOrLoss + infiltrationHeatGainOrLoss + solarHeatGain;
}

function btuWaterHeating(regionGroundwaterTemp, waterHeatingModifier, houseBedPlusBath) {
  return (
    ((120 - regionGroundwaterTemp - waterHeatingModifier) * houseBedPlusBath * 8.33 * 17 * 365) / 2
  );
}

function co2ElectricAppliances(
  houseKitchens,
  houseBedrooms,
  electricAppliancesBTU,
  carbonIntensityGrid
) {
  return (
    (houseKitchens * 645 * 3, 412.14) +
    (houseBedrooms * 250 * 3, 412.14) +
    electricAppliancesBTU * carbonIntensityGrid
  );
}

function co2GasAppliances(btuGasAppliances) {
  return btuGasAppliances * 0.000117;
}

function co2Lighting(houseLEDLightingPercent, houseHomeSize, carbonIntensityGrid) {
  return (
    (131 - houseLEDLightingPercent * 105) * 6 * 0.001 * houseHomeSize * 3,
    412.14 * carbonIntensityGrid
  );
}

function co2WaterHeating(btuWaterHeating, carbonIntensityWaterHeating) {
  return btuWaterHeating * carbonIntensityWaterHeating;
}

function co2Cooling(btuCooling, carbonIntensityGrid) {
  return btuCooling * carbonIntensityGrid;
}

function co2Heating(houseHeatedFloors, btuHeating, carbonIntensityHeating, carbonIntensityGrid) {
  console.log(houseHeatedFloors, btuHeating, carbonIntensityHeating, carbonIntensityGrid);
  return houseHeatedFloors * 896683 * carbonIntensityGrid + btuHeating * carbonIntensityHeating;
}

function co2Total(
  co2Heating,
  co2Cooling,
  co2WaterHeating,
  co2ElectricAppliances,
  co2GasAppliances,
  co2Lighting
) {
  return (
    co2Heating +
    co2Cooling +
    co2WaterHeating +
    co2ElectricAppliances +
    co2GasAppliances +
    co2Lighting
  );
}

function Score(co2_total) {
  return 100 * (16000 / (16000 + co2_total));
}

export {
  homeConvert,
  getConversionFactor,
  carbonIntensityCooling,
  coeffPrimaryHeating,
  coeffSolarHeatGain,
  coeffWaterHeatingModifier,
  generationNonSolar,
  solarInsolationSummer,
  solarInsolationWinter,
  sqftCalc,
  unitAge,
  houseAboveGroundPercent,
  houseVolume,
  sqftWindows,
  sqftWalls,
  houseBedPlusBath,
  solarHeatGain,
  carbonIntensityHeating,
  houseWindowExposed,
  rvalueWalls,
  rvalueWindows,
  carbonIntensityHeatingTotal,
  carbonIntensityWaterHeating,
  rvalueRoof,
  btuHeatingThroughSurface,
  surfaceHeatGainOrLoss,
  infiltrationHeatGainOrLoss,
  btuHeatingOrCooling,
  btuWaterHeating,
  co2ElectricAppliances,
  co2GasAppliances,
  co2Lighting,
  co2WaterHeating,
  co2Cooling,
  co2Heating,
  co2Total,
  Score
};
