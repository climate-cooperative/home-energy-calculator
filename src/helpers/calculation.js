import { convertZipToState, getAPIData } from './api.js';
import {
<<<<<<< HEAD
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
} from './equations.js';

const handleCalculation = async (formData) => {
    try {
        const zip = formData.zipcode;
        const state = convertZipToState(zip);
        const apiData = await getAPIData(state, zip, formData.rooms, formData.kitchen, formData.laundry. formData.homeBuilt, formData.primaryHeat, formData.coolingSystem, formData.waterHeating);
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
        hvac_water_heating_efficiency,
        btu_gas_appliances,
        home_decades
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
        // hasAirCond,
        // coolingSystem,
        waterHeating,
        // fuelSource,
        // efficiency,
        // kitchen,
        // laundry,
        energy,
        // slider
    } = formdata;

    const window_ee_r = treatments.includes('Low-E Coating') ? 1 : 0;
    const window_gas_r = treatments.includes('Gas-Filled (e.g. Argon) Windows') ? 1 : 0;
    const window_tinting_coeff = treatments.includes('Tinting / Smart Glass') ? .5 : 1;
    const south_facing_window = sun === 'Yes' ? .4 : sun === 'No' ? .2 : .25;
    const window_coverage = windows === 'Low' ? .12 : windows === 'Medium' ? .16 : .2;

    const recent = home_decades.filter(home => home.decade === '2020+');
    const actual = home_decades.filter(home => home.decade === homeBuilt);
    const insulation_r = insulation.includes('Walls') ? recent["Wall Insulation R"] : actual["Wall Insulation R"];
    const attic_r = insulation.includes('Attic') ? recent["Attic Insulation R"] : actual["Attic Insulation R"];

    const led_lighting = energy.includes('All') ? 1 : energy.includes('Most') ? 0.8 : energy.includes('Some') ? 0.6 : energy.includes('Not Sure') ? 0.35 : 0;

    // begin calculations
    // const carbon_intensity_cooling = carbonIntensityCooling(grid_carbon_intesity, hvac_cooling_efficiency);
    const coeff_primary_heating = coeffPrimaryHeating(hasSecondarySystem);
    const hasTintedWindowsOrEECoating = treatments.includes('Low-E Coating', 'Tinted Windows');
    const coeff_solar_heat_gain = coeffSolarHeatGain(hasTintedWindowsOrEECoating);
    const water_heating_modifier = coeffWaterHeatingModifier(waterHeating);
    // const percent = (energy.length > 0) ? slider : 0;
    // const generation_non_solar = generationNonSolar(percent);
    const solar_insolation_summer = solarInsolationSummer(latitude);
    const solar_insolation_winter = solarInsolationWinter(latitude);
    const sqft_floor = sqftCalc(crawlSpace, homeSize, layout.basements, layout.stories);
    const sqft_roof = sqftCalc(exposedCeiling, homeSize, layout.basements, layout.stories);
    // const unit_cooling_age = unitAge(airCondYear);
    // const unit_heating_age = unitAge(primaryHeatYear);
    const above_ground_percent = houseAboveGroundPercent(layout.stories, layout.basements);
    const house_volume = houseVolume(sqrfeet);
    const sqft_windows = sqftWindows(window_coverage, sqrfeet, exposedWallsPercent);
    const sqft_walls = sqftWalls(homeSize, above_ground_percent, exposedWallsPercent, window_coverage);
    const house_window_exposed = houseWindowExposed(south_facing_window, sqft_windows);
    const solar_heat_gain_summer = solarHeatGain(solar_insolation_summer, house_window_exposed, coeff_solar_heat_gain);
    const primary_conversion = getConversionFactor(primarySource, grid_carbon_intesity);
    const secondary_conversion = getConversionFactor(secondarySource, grid_carbon_intesity);
    const carbon_intensity_primary_heating = carbonIntensityHeating(hvac_heating_efficiency, primary_conversion); // fix
    const carbon_intensity_secondary_heating = carbonIntensityHeating(hvac_heating_efficiency, secondary_conversion); // fix
    const solar_heat_gain_winter = solarHeatGain(solar_insolation_winter, house_window_exposed, coeff_solar_heat_gain);
    const rvalue_walls = rvalueWalls(r_wall_construction, insulation_r, r_wall_siding);
    const rvalue_windows = rvalueWindows(panes, window_ee_r, window_gas_r, window_tinting_coeff);
    const carbon_intensity_heating_total = carbonIntensityHeatingTotal(coeff_primary_heating, carbon_intensity_primary_heating, carbon_intensity_secondary_heating);
    const carbon_intensity_water_heating = carbonIntensityWaterHeating(grid_carbon_intesity, hvac_water_heating_efficiency);
    const rvalue_roof = rvalueRoof(r_probability_insulation, attic_r, r_attic_joist, r_attic_roof);
    const btu_heating_through_wall = btuHeatingThroughSurface(sqft_walls, region_hdd, rvalue_walls);
    const btu_heating_through_windows = btuHeatingThroughSurface(sqft_windows, region_hdd, rvalue_windows);
    const btu_heating_through_roof = btuHeatingThroughSurface(sqft_roof, region_hdd, rvalue_roof);
    const btu_heating_through_floor = btuHeatingThroughSurface(sqft_floor, region_hdd, rvalue_walls);
    const btu_cooling_through_wall = btuHeatingThroughSurface(sqft_walls, region_cdd, rvalue_walls);
    const btu_cooling_through_windows = btuHeatingThroughSurface(sqft_windows, region_cdd, rvalue_windows);
    const btu_cooling_through_roof = btuHeatingThroughSurface(sqft_roof, region_cdd, rvalue_roof);
    const btu_cooling_through_floor = btuHeatingThroughSurface(sqft_floor, region_cdd, rvalue_walls);
    const surface_heat_gain = surfaceHeatGainOrLoss(btu_heating_through_wall, btu_heating_through_windows, btu_heating_through_roof, btu_heating_through_floor);
    const surface_heat_loss = surfaceHeatGainOrLoss(btu_cooling_through_wall, btu_cooling_through_windows, btu_cooling_through_roof, btu_cooling_through_floor);
    const infiltration_heat_gain = infiltrationHeatGainOrLoss(house_volume, ach, region_hdd);
    const infiltration_heat_loss = infiltrationHeatGainOrLoss(house_volume, ach, region_cdd);
    const btu_heating = btuHeatingOrCooling(surface_heat_gain, infiltration_heat_gain, solar_heat_gain_summer);
    const btu_cooling = btuHeatingOrCooling(surface_heat_loss, infiltration_heat_loss, solar_heat_gain_winter);
    const btu_water_heating = btuWaterHeating(water_heating_modifier, region_water_temp, hvac_water_heating_efficiency);
    const co2_electric_appliances = co2ElectricAppliances(rooms.kitchen, rooms.bedroom, electricAppliancesBTU, carbonIntensityGrid);
    const co2_gas_appliances = co2GasAppliances(btu_gas_appliances);
    const co2_lighting = co2Lighting(led_lighting, homeSize, grid_carbon_intesity);
    const co2_water_heating = co2WaterHeating(btu_water_heating, carbon_intensity_water_heating);
    const co2_cooling = co2Cooling(btu_cooling, grid_carbon_intesity);
    const co2_heating = co2Heating(heatedFloors, btu_heating, carbon_intensity_heating_total);
    const co2_total = co2Total(co2_heating, co2_cooling, co2_water_heating, co2_electric_appliances, co2_gas_appliances, co2_lighting);
    const score = Score(co2_average_home, co2_total);

    console.log({
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
        hvac_water_heating_efficiency,
        btu_gas_appliances,
        home_decades,
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
        // hasAirCond,
        // coolingSystem,
        waterHeating,
        // fuelSource,
        // efficiency,
        // kitchen,
        // laundry,
        energy,
        // slider,
        window_ee_r,
        window_gas_r,
        window_tinting_coeff,
        south_facing_window,
        window_coverage,
        recent,
        actual,
        insulation_r,
        attic_r,
        led_lighting,
        // carbon_intensity_cooling,
        coeff_primary_heating,
        hasTintedWindowsOrEECoating,
        coeff_solar_heat_gain,
        water_heating_modifier,
        // percent,
        // generation_non_solar,
        solar_insolation_summer,
        solar_insolation_winter,
        sqft_floor,
        sqft_roof,
        // unit_cooling_age,
        // unit_heating_age,
        above_ground_percent,
        house_volume,
        sqft_windows,
        sqft_walls,
        house_window_exposed,
        solar_heat_gain_summer,
        primary_conversion,
        secondary_conversion,
        carbon_intensity_primary_heating,
        carbon_intensity_secondary_heating,
        solar_heat_gain_winter,
        rvalue_walls,
        rvalue_windows,
        carbon_intensity_heating_total,
        carbon_intensity_water_heating,
        rvalue_roof,
        btu_heating_through_wall,
        btu_heating_through_windows,
        btu_heating_through_roof,
        btu_heating_through_floor,
        btu_cooling_through_wall,
        btu_cooling_through_windows,
        btu_cooling_through_roof,
        btu_cooling_through_floor,
        surface_heat_gain,
        surface_heat_loss,
        infiltration_heat_gain,
        infiltration_heat_loss,
        btu_heating,
        btu_cooling,
        btu_water_heating,
        co2_electric_appliances,
        co2_gas_appliances,
        co2_lighting,
        co2_water_heating,
        co2_cooling,
        co2_heating,
        co2_total,
        score
    });

    return score;
=======
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
};

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
  const carbon_intensity_cooling = carbonIntensityCooling(
    grid_carbon_intesity,
    hvac_cooling_efficiency
  );
  const coeff_primary_heating = coeffPrimaryHeating(formdata.hasSecondarySystem);
  const hasTintedWindowsOrEECoating = treatments.includes('Low-E Coating', 'Tinted Windows');
  const coeff_solar_heat_gain = coeffSolarHeatGain(hasTintedWindowsOrEECoating);
  const water_heating_modifier = coeffWaterHeatingModifier(waterHeating);
  const percent = energy.length > 0 ? slider : 0;
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
  const solar_heat_gain_summer = solarHeatGainSummer(
    solar_insolation_summer,
    houseWindowExposed,
    coeff_solar_heat_gain
  );
>>>>>>> edfdce6b7e2ba1aca6e877cfe4ea8210b39c90db
}

export default handleCalculation;
