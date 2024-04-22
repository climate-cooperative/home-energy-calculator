// General Function to Map Score to Grade
function getGrade(score) {
    const grades = {
        8: 'A+',
        7: 'A-',
        6: 'B+',
        5: 'B-',
        4: 'C+',
        3: 'C-',
        2: 'D+',
        1: 'D-',
        0: 'F',
    };
    return grades[score] || 'F'; // Defaults to 'F' if the score isn't found
}

// HVAC Grading Functions
function gradeHvacUnitEfficiency(efficiency) {
    if (efficiency > 1.0) return 3;
    if (efficiency > 0.8) return 1;
    return 0;
}

function gradeHvacFuel(fuel) {
    console.log(fuel);
    switch (fuel) {
        case 'Electric':
            return 3;
        case 'Natural Gas':
            return 2;
        case 'Propane':
            return 1;
        case 'Kerosene':
            return 1;
        default:
            return 0;
    }
}

function gradeHvacLocalGrid(fuel, gridCarbonIntensity) {
    if (fuel === 'Electric') {
        return gridCarbonIntensity < 0.00025 ? 1 : 0;
    }
    return 0;
}

function gradeHvacLocalClimate(HDD, CDD) {
    return HDD + CDD < 5618 ? 1 : 0;
}

// Water Heating Grading Functions
function gradeWaterHeatingAll() {
    return 2;
}

function gradeWaterHeatingUnitEfficiency(efficiency) {
    if (efficiency > 1.0) return 2;
    if (efficiency > 0.75) return 1;
    return 0;
}

function gradeWaterHeatingFuel(fuel) {
    switch (fuel) {
        case 'Electric':
            return 2;
        case 'Natural Gas':
            return 1;
        default:
            return 0;
    }
}

function gradeWaterHeatingLocalGrid(fuel, gridCarbonIntensity) {
    return gradeHvacLocalGrid(fuel, gridCarbonIntensity);
}

function gradeWaterHeatingLocalClimate(waterTemperature) {
    return waterTemperature > 58.5 ? 1 : 0;
}

function gradeAppliancesUnitEfficiency(inductionCooktops, heatPumpDryers) {
    return (inductionCooktops > 0 ? 1 : 0) + (heatPumpDryers > 0 ? 1 : 0);
}

function gradeAppliancesFuel(kitchen, laundry) {
    const electric = kitchen['Electric Cooktop'] + kitchen['Electric Oven'] + kitchen['Induction Cooktop'] + kitchen['Dishwasher'] + laundry['Electric Dryer'] + laundry['Heat Pump Dryer'] + laundry['Washers'];
    const gas = kitchen['Natural Gas Cooktop'] + kitchen['Natural Gas Oven'] + laundry['Natural Gas Dryer'];

    if (electric > 0 && gas === 0) {
        return 2; // all electric
    } else if (electric > 0 && gas > 0) {
        return 1; // both natural gas and electric
    } else {
        return 0; // only natural gas
    }
}

function gradeAppliancesLocalGrid(isElectric, gridCarbonIntensity) {
    return isElectric ? gradeWaterHeatingLocalGrid('Electric', gridCarbonIntensity) : 0;
}

function gradeAppliancesOther(numberOfKitchens) {
    return numberOfKitchens < 2 ? 1 : 0;
}

// Sealing & Insulation Grading Functions
function gradeSealingACH(ACH) {
    if (ACH < 0.5) return 4;
    if (ACH < 0.7) return 2;
    return 0;
}

function gradeInsulation(rRoof, rWalls, rFloor) {
    const totalRValue = rRoof + rWalls + rFloor;
    if (totalRValue > 80) return 4;
    if (totalRValue > 53) return 2;
    return 0;
}

// Windows Grading Functions
function gradeWindowsInsulation(rWindows) {
    if (rWindows > 2) return 4;
    if (rWindows > 1) return 2;
    return 0;
}

function gradeWindowCoverage(windowCoverage) {
    if (windowCoverage < 0.13) return 4;
    if (windowCoverage < 0.20) return 2;
    return 0;
}

// Lighting Grading Functions
function gradeLedLighting(ledLightingPercent) {
    switch (ledLightingPercent) {
        case 'All':
            return 8;
        case 'Most':
            return 7;
        case 'Some':
            return 6;
        case 'Not Sure':
            return 5;
        default:
            return 3;
    }
}

export {
    getGrade,
    gradeHvacUnitEfficiency,
    gradeHvacFuel,
    gradeHvacLocalGrid,
    gradeHvacLocalClimate,
    gradeWaterHeatingAll,
    gradeWaterHeatingUnitEfficiency,
    gradeWaterHeatingFuel,
    gradeWaterHeatingLocalGrid,
    gradeWaterHeatingLocalClimate,
    gradeAppliancesUnitEfficiency,
    gradeAppliancesFuel,
    gradeAppliancesLocalGrid,
    gradeAppliancesOther,
    gradeSealingACH,
    gradeInsulation,
    gradeWindowsInsulation,
    gradeWindowCoverage,
    gradeLedLighting,
};