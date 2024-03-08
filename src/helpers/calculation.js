import { convertZipToState, getAPIData } from './api';
import {
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
    solarHeatGainSummer,
    carbonIntensityHeating,
    solarHeatGainWinter,
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
} from './equations';

const handleCalculation = async (formData) => {
    try {
        const zip = formData.zipcode;
        const state = convertZipToState(zip);
        const apiData = await getAPIData(state, zip);
        const co2Emission = CO2Emission(formData, apiData);
        return co2Emission;
    } catch (error) {
        console.error('Error handling calculation', error);
    }
}

function CO2Emission(formdata, apiData) {
    // destructure apiData
    const {
        grid_carbon_intesity,
        latitude,
        longitude,
        region_hdd,
        region_cdd,
        region_water_temp,
        ach,
        r_probability_insulation,
        r_attic_roof,
        r_attic_joist,
        r_attic_insulation,
        r_wall_construction,
        r_wall_insulation,
        r_wall_siding,
        hvac_heating_efficiency,
        hvac_cooling_efficiency,
        hvac_water_heating_efficiency
    } = apiData;
    // destructure formdata
    const {
        owner,
        homeSize,
        homeBuilt,
        zipcode,
        sqrfeet,
        rooms,
        crawlspace,
        layout,
        windows,
        panes,
        sun,
        treatments,
        siding,
        insulation,
        primaryHeat,
        primarySource,
        installationYear,
        hasSecondary,
        secondaryHeat,
        secondarySource,
        heatedFloors,
        hasAirCond,
        coolingSystem,
        waterHeating,
        fuelSource,
        efficiency,
        kitchen,
        laundry,
        energy,
        slider
    } = formdata;

    // derive values from formdata


    // begin calculations
    const carbon_intensity_cooling = carbonIntensityCooling(grid_carbon_intesity, hvac_cooling_efficiency);
    const coeff_primary_heating = coeffPrimaryHeating(formdata.hasSecondarySystem);
    const hasTintedWindowsOrEECoating = treatments.includes('Low-E Coating', 'Tinted Windows');
    const coeff_solar_heat_gain = coeffSolarHeatGain(hasTintedWindowsOrEECoating);
    const water_heating_modifier = coeffWaterHeatingModifier(waterHeating);
    const percent = (energy.length > 0) ? slider : 0;
    const generation_non_solar = generationNonSolar(percent);
    const solar_insolation_summer = solarInsolationSummer(latitude);
    const solar_insolation_winter = solarInsolationWinter(latitude);
    const sqft_floor = sqftCalc(crawlSpace, homeSize, basements, stories);
    const sqft_roof = sqftCalc(exposedCeiling, homeSize, basements, stories);
    const unit_cooling_age = unitAge(airCondYear);
    const unit_heating_age = unitAge(primaryHeatYear);
    const unit_water_heater_age = unitAge(waterHeatingYear);
    const above_ground_percent = houseAboveGroundPercent(stories, basements);
    const house_volume = houseVolume(sqrfeet);
    const sqft_windows = sqftWindows(windowCoverage, sqrfeet, exposedWallsPercent);
    const sqft_walls = sqftWalls(homeSize, above_ground_percent, exposedWallsPercent, windowCoverage);
    const house_bed_plus_bath = houseBedPlusBath(rooms.Bedrooms, rooms.Bathrooms);
    const solar_heat_gain_summer = solarHeatGainSummer(solar_insolation_summer, houseWindowExposed, coeff_solar_heat_gain);

}

export default handleCalculation;