import { convertZipToState, getAPIData } from './api.js';
import { checkmark, alert, close, hammer, thermometer, water, home, bulb } from 'ionicons/icons';
import {
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
} from './equations.js';
import {
    getGrade,
    gradeHvacUnitEfficiency,
    gradeHvacFuel,
    gradeHvacLocalGrid,
    gradeHvacLocalClimate,
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
  } from './grading.js';

const handleCalculation = async (formData) => {
    try {
        const zip = formData.zipcode;
        const state = convertZipToState(zip);
        const apiData = await getAPIData(state.long, zip, formData.rooms, formData.kitchen, formData.laundry, formData.homeBuilt, formData.primaryHeat, formData.coolingSystem, formData.waterHeater);
        const {co2_total, rvalue_roof, rvalue_walls, rvalue_floor, rvalue_windows} = CO2Emission(formData, apiData);
        const grades = getGrades(formData, apiData, rvalue_roof, rvalue_walls, rvalue_floor, rvalue_windows);
        let avgHome = Number(apiData['avg_home'].replace(/,/g, ''));
        return { co2_total, grades, avgHome };
    } catch (error) {
        console.error('Error handling calculation', error);
    }
}

function CO2Emission(formdata, apiData) {
    // destructure apiData
    const {
        grid_carbon_intensity,
        latitude,
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
        btu_electric_appliances,
        home_decades
    } = apiData
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

    const insulation_r = insulation.includes('Walls') ? home_decades.recent["wall_insulation_r"] : home_decades.actual["wall_insulation_r"];
    const attic_r = insulation.includes('Attic') ? home_decades.recent["attic_insulation_r"] : home_decades.actual["attic_insulation_r"];

    const led_lighting = energy.includes('All') ? 1 : energy.includes('Most') ? 0.8 : energy.includes('Some') ? 0.6 : energy.includes('Not Sure') ? 0.35 : 0;

    const exposed = homeConvert(homeSize);
    const has_crawl_space = crawlspace === 'Yes' ? 1 : 0;
    const sqrft = Number(sqrfeet);

    // begin calculations
    // const carbon_intensity_cooling = carbonIntensityCooling(grid_carbon_intensity, hvac_cooling_efficiency);
    const coeff_primary_heating = coeffPrimaryHeating(hasSecondary);
    const hasTintedWindowsOrEECoating = treatments.includes('Low-E Coating', 'Tinted Windows');
    const coeff_solar_heat_gain = coeffSolarHeatGain(hasTintedWindowsOrEECoating);
    const water_heating_modifier = coeffWaterHeatingModifier(waterHeating);
    // const percent = (energy.length > 0) ? slider : 0;
    // const generation_non_solar = generationNonSolar(percent);
    const solar_insolation_summer = solarInsolationSummer(latitude);
    const solar_insolation_winter = solarInsolationWinter(latitude);
    const sqft_floor = sqftCalc(has_crawl_space, sqrft, layout.basements, layout.stories);
    const sqft_roof = sqftCalc(exposed.exposedCeiling, sqrft, layout.basements, layout.stories);
    // const unit_cooling_age = unitAge(airCondYear);
    // const unit_heating_age = unitAge(primaryHeatYear);
    const above_ground_percent = houseAboveGroundPercent(layout.stories, layout.basements);
    const house_volume = houseVolume(sqrft);
    const sqft_windows = sqftWindows(window_coverage, sqrft, exposed.exposedWall);
    const sqft_walls = sqftWalls(sqrft, above_ground_percent, exposed.exposedWall, window_coverage);
    const house_window_exposed = houseWindowExposed(south_facing_window, sqft_windows);
    const solar_heat_gain_summer = solarHeatGain(solar_insolation_summer, house_window_exposed, coeff_solar_heat_gain);
    const primary_conversion = getConversionFactor(primarySource, grid_carbon_intensity);
    const secondary_conversion = getConversionFactor(secondarySource, grid_carbon_intensity);
    const carbon_intensity_primary_heating = carbonIntensityHeating(hvac_heating_efficiency, primary_conversion); // fix
    const carbon_intensity_secondary_heating = carbonIntensityHeating(hvac_heating_efficiency, secondary_conversion); // fix
    const solar_heat_gain_winter = solarHeatGain(solar_insolation_winter, house_window_exposed, coeff_solar_heat_gain);
    const rvalue_walls = rvalueWalls(r_probability_insulation, r_wall_construction, insulation_r, r_wall_siding);
    const rvalue_floor = (crawlspace == 'Yes') ? rvalue_walls : 0;
    const rvalue_windows = rvalueWindows(panes, window_ee_r, window_gas_r, window_tinting_coeff);
    const carbon_intensity_heating_total = carbonIntensityHeatingTotal(coeff_primary_heating, carbon_intensity_primary_heating, carbon_intensity_secondary_heating);
    const carbon_intensity_water_heating = carbonIntensityWaterHeating(grid_carbon_intensity, hvac_water_heating_efficiency);
    const rvalue_roof = rvalueRoof(r_probability_insulation, attic_r, r_attic_joist, r_attic_roof);
    const btu_heating_through_wall = btuHeatingThroughSurface(sqft_walls, region_hdd, rvalue_walls);
    const btu_heating_through_windows = btuHeatingThroughSurface(sqft_windows, region_hdd, rvalue_windows);
    const btu_heating_through_roof = btuHeatingThroughSurface(sqft_roof, region_hdd, rvalue_roof);
    const btu_heating_through_floor = btuHeatingThroughSurface(sqft_floor, region_hdd, rvalue_floor);
    const btu_cooling_through_wall = btuHeatingThroughSurface(sqft_walls, region_cdd, rvalue_walls);
    const btu_cooling_through_windows = btuHeatingThroughSurface(sqft_windows, region_cdd, rvalue_windows);
    const btu_cooling_through_roof = btuHeatingThroughSurface(sqft_roof, region_cdd, rvalue_roof);
    const btu_cooling_through_floor = btuHeatingThroughSurface(sqft_floor, region_cdd, rvalue_floor);
    const surface_heat_gain = surfaceHeatGainOrLoss(btu_heating_through_wall, btu_heating_through_windows, btu_heating_through_roof, btu_heating_through_floor);
    const surface_heat_loss = surfaceHeatGainOrLoss(btu_cooling_through_wall, btu_cooling_through_windows, btu_cooling_through_roof, btu_cooling_through_floor);
    const infiltration_heat_gain = infiltrationHeatGainOrLoss(house_volume, ach, region_hdd);
    const infiltration_heat_loss = infiltrationHeatGainOrLoss(house_volume, ach, region_cdd);
    const btu_heating = btuHeatingOrCooling(surface_heat_gain, infiltration_heat_gain, solar_heat_gain_summer);
    const btu_cooling = btuHeatingOrCooling(surface_heat_loss, infiltration_heat_loss, solar_heat_gain_winter);
    const btu_water_heating = btuWaterHeating(region_water_temp, water_heating_modifier, rooms.Bedrooms + rooms.Bathrooms); //regionGroundwaterTemp, waterHeatingModifier, bedrooms, bathrooms
    const co2_electric_appliances = co2ElectricAppliances(rooms.Kitchens, rooms.bedroom, btu_electric_appliances, grid_carbon_intensity);
    const co2_gas_appliances = co2GasAppliances(btu_gas_appliances);
    const co2_lighting = co2Lighting(led_lighting, sqrft, grid_carbon_intensity);
    const co2_water_heating = co2WaterHeating(btu_water_heating, carbon_intensity_water_heating);
    const co2_cooling = co2Cooling(btu_cooling, grid_carbon_intensity);
    const co2_heating = co2Heating(heatedFloors.Rooms, btu_heating, carbon_intensity_heating_total, grid_carbon_intensity);
    const co2_total = co2Total(co2_heating, co2_cooling, co2_water_heating, co2_electric_appliances, co2_gas_appliances, co2_lighting);

    console.log('window_ee_r:', window_ee_r);
    console.log('window_gas_r:', window_gas_r);
    console.log('window_tinting_coeff:', window_tinting_coeff);
    console.log('south_facing_window:', south_facing_window);
    console.log('window_coverage:', window_coverage);
    console.log('insulation_r:', insulation_r);
    console.log('attic_r:', attic_r);
    console.log('led_lighting:', led_lighting);
    console.log('exposed:', exposed);
    console.log('has_crawl_space:', has_crawl_space);
    console.log('sqrft:', sqrft);
    console.log('coeff_primary_heating:', coeff_primary_heating);
    console.log('hasTintedWindowsOrEECoating:', hasTintedWindowsOrEECoating);
    console.log('coeff_solar_heat_gain:', coeff_solar_heat_gain);
    console.log('water_heating_modifier:', water_heating_modifier);
    console.log('solar_insolation_summer:', solar_insolation_summer);
    console.log('solar_insolation_winter:', solar_insolation_winter);
    console.log('sqft_floor:', sqft_floor);
    console.log('sqft_roof:', sqft_roof);
    console.log('above_ground_percent:', above_ground_percent);
    console.log('house_volume:', house_volume);
    console.log('sqft_windows:', sqft_windows);
    console.log('sqft_walls:', sqft_walls);
    console.log('house_window_exposed:', house_window_exposed);
    console.log('solar_heat_gain_summer:', solar_heat_gain_summer);
    console.log('primary_conversion:', primary_conversion);
    console.log('secondary_conversion:', secondary_conversion);
    console.log('carbon_intensity_primary_heating:', carbon_intensity_primary_heating);
    console.log('carbon_intensity_secondary_heating:', carbon_intensity_secondary_heating);
    console.log('solar_heat_gain_winter:', solar_heat_gain_winter);
    console.log('rvalue_walls:', rvalue_walls);
    console.log('rvalue_floor:', rvalue_floor);
    console.log('rvalue_windows:', rvalue_windows);
    console.log('carbon_intensity_heating_total:', carbon_intensity_heating_total);
    console.log('carbon_intensity_water_heating:', carbon_intensity_water_heating);
    console.log('rvalue_roof:', rvalue_roof);
    console.log('btu_heating_through_wall:', btu_heating_through_wall);
    console.log('btu_heating_through_windows:', btu_heating_through_windows);
    console.log('btu_heating_through_roof:', btu_heating_through_roof);
    console.log('btu_heating_through_floor:', btu_heating_through_floor);
    console.log('btu_cooling_through_wall:', btu_cooling_through_wall);
    console.log('btu_cooling_through_windows:', btu_cooling_through_windows);
    console.log('btu_cooling_through_roof:', btu_cooling_through_roof);
    console.log('btu_cooling_through_floor:', btu_cooling_through_floor);
    console.log('surface_heat_gain:', surface_heat_gain);
    console.log('surface_heat_loss:', surface_heat_loss);
    console.log('infiltration_heat_gain:', infiltration_heat_gain);
    console.log('infiltration_heat_loss:', infiltration_heat_loss);
    console.log('btu_heating:', btu_heating);
    console.log('btu_cooling:', btu_cooling);
    console.log('btu_water_heating:', btu_water_heating);
    console.log('co2_electric_appliances:', co2_electric_appliances);
    console.log('co2_gas_appliances:', co2_gas_appliances);
    console.log('co2_lighting:', co2_lighting);
    console.log('co2_water_heating:', co2_water_heating);
    console.log('co2_cooling:', co2_cooling);
    console.log('co2_heating:', co2_heating);
    console.log('co2_total:', co2_total);

    return { co2_total, rvalue_roof, rvalue_walls, rvalue_floor, rvalue_windows };
}

function getGrades(formData, apiData, rvalue_roof, rvalue_walls, rvalue_floor, rvalue_windows) {
    const { 
        primaryHeat, 
        waterHeating,
        kitchen,
        laundry,
        windows,
        slider,
        rooms
    } = formData;
    const { 
        hvac_heating_efficiency, 
        hvac_cooling_efficiency,
        hvac_water_heating_efficiency, 
        grid_carbon_intensity, 
        region_hdd, 
        region_cdd,
        ach
    } = apiData;

    // heating and cooling
    const hvac_efficiency = gradeHvacUnitEfficiency(hvac_heating_efficiency);
    const hvac_fuel = gradeHvacFuel(primaryHeat);
    const hvac_local_grid = gradeHvacLocalGrid(primaryHeat, grid_carbon_intensity);
    const hvac_local_climate = gradeHvacLocalClimate(region_hdd, region_cdd);
    const hvac_all = getGrade(hvac_heating_efficiency + hvac_cooling_efficiency + hvac_fuel + hvac_local_grid + hvac_local_climate);
    // water heating
    const water_heating_efficiency = gradeWaterHeatingUnitEfficiency(hvac_water_heating_efficiency);
    const water_heating_fuel = gradeWaterHeatingFuel(waterHeating);
    const water_heating_local_grid = gradeWaterHeatingLocalGrid(waterHeating, grid_carbon_intensity);
    const water_heating_local_climate = gradeWaterHeatingLocalClimate(region_hdd, region_cdd);
    const water_heating_all = getGrade(2 + water_heating_efficiency + water_heating_fuel + water_heating_local_grid + water_heating_local_climate);
    // appliances
    const appliances_efficiency = gradeAppliancesUnitEfficiency(kitchen['Induction Cooktops'], laundry['Heat Pump Dryers']);
    const appliances_fuel = gradeAppliancesFuel(kitchen, laundry);
    const appliances_local_grid = gradeAppliancesLocalGrid((appliances_fuel > 0), grid_carbon_intensity);
    const appliances_other = gradeAppliancesOther(rooms.Kitchens);
    const appliances_all = getGrade(2 + appliances_efficiency + appliances_fuel + appliances_local_grid + appliances_other);
    // sealing and insulation
    const sealing_ach = gradeSealingACH(ach);
    const insulation = gradeInsulation(rvalue_roof, rvalue_walls, rvalue_floor)
    const sealing_all = getGrade(sealing_ach + insulation);
    // windows
    const windows_insulation = gradeWindowsInsulation(rvalue_windows);
    const window_coverage = gradeWindowCoverage(windows === 'Low' ? .12 : windows === 'Medium' ? .16 : .2);
    const windows_all = getGrade(windows_insulation + window_coverage);
    // lighting
    const led_lighting = gradeLedLighting(slider);
    const led_all = getGrade(led_lighting);

    return[{ 
          title: 'Heating & Cooling', 
          icon: thermometer, 
          current: formData.heatingCooling, 
          grade: hvac_all,
          recommended: 'Heat Pump with Ductless Mini-Splits',
          content: [
            { title: 'Unit Efficiency', icon: hvac_efficiency === 3 ? checkmark : hvac_efficiency === 1 ? alert : close},
            { title: 'Local Climate', icon: hvac_local_climate === 3 ? checkmark : hvac_local_climate > 0 ? alert : close},
            { title: 'Fuel Source', icon: hvac_fuel === 1 ? checkmark : close},
            { title: 'Local Grid', icon: hvac_local_grid === 1 ? checkmark : close},
          ],
          rows: [
            { name: 'Function(s)', userValue: 'Heating', recommendedValue: 'Heating & Cooling'},
            { name: 'Annual Energy Cost', userValue: '$0', recommendedValue: '$232'},
            { name: 'Tons of CO2 per Year', userValue: '0.00', recommendedValue: '0.29'},
            { name: 'Clean Energy Score', userValue: 'A+', recommendedValue: 'A+'},
            { name: 'Home Value Added', userValue: '-', recommendedValue: '$18.4k'},
            { name: 'Rebates & Incentives', userValue: '-', recommendedValue: 'Check it out!'},
          ]
        },
        { 
          title: 'Water Heaters', 
          icon: water, 
          current: formData.waterHeating, 
          grade: water_heating_all,
          recommended: 'Hybrid Heat Pump Water Heater',
          content: [
            { title: 'Unit Efficiency', icon: water_heating_efficiency === 2 ? checkmark : water_heating_efficiency === 1 ? alert : close},
            { title: 'Ground Water Temp.', icon: water_heating_local_climate === 1 ? checkmark : close},
            { title: 'Fuel Source', icon: water_heating_fuel === 2 ? checkmark : water_heating_fuel === 1 ? alert : close},
            { title: 'Local Grid', icon: water_heating_local_grid === 1 ? checkmark: close},
          ],
          rows: [
            { name: 'Annual Energy Cost', userValue: '$0', recommendedValue: '$32'},
            { name: 'Tons of CO2 per Year', userValue: '0.00', recommendedValue: '0.04'},
            { name: 'Clean Energy Score', userValue: 'F', recommendedValue: 'A-'},
            { name: 'Rebates & Incentives', userValue: '-', recommendedValue: 'Check it out!'},
          ]
        },
        { 
          title: 'Appliances', 
          icon: hammer, 
          current: formData.appliances, 
          grade: appliances_all,
          recommended: 'Energy Star Appliances',
          content: [
            { title: 'High Efficiency Appliance', icon: appliances_efficiency === 0 ? close : checkmark},
            { title: 'Electric Appliances', icon: appliances_fuel === 2 ? checkmark : appliances_fuel === 1 ? alert : close},
            { title: 'Local Grid', icon: appliances_local_grid === 1 ? checkmark: close},
          ],
          rows:[]
        },
        { 
          title: 'Sealing & Insulation', 
          icon: home, 
          current: 'Annual Cost Savings', 
          grade: sealing_all,
          recommended: 'Annual CO2 Savings',
          content: [
            { title: 'Sealing', icon: sealing_ach === 4 ? checkmark : sealing_ach === 2 ? alert : close},
            { title: 'Insulation', icon: insulation === 4 ? checkmark : insulation === 2 ? alert : close},
          ],
          rows: [
            { name: 'Add Attic Insulation', userValue: 'Save $4', recommendedValue: 'Down 100 lbs'},
            { name: 'Add Crawl Space Insulation', userValue: 'Save $4', recommendedValue: 'Down 4 lbs'},
            { name: 'Seal Aur Leaks', userValue: 'Save $100', recommendedValue: 'Down 607 lbs'},
          ]
        },
        { 
          title: 'Lighting', 
          icon: bulb, 
          current: formData.lighting, 
          grade: led_all,
          recommended: 'All LED Bulbs',
          content: [
            { title: 'Efficient Bulbs', icon: led_lighting === 8 ? checkmark : led_lighting <= 5 ? close : alert},
          ],
          rows: [
            { name: 'Annual Energy Cost', userValue: '$0', recommendedValue: '$13'},
            { name: 'Tons of CO2 per Year', userValue: '0.00', recommendedValue: '0.02'},
            { name: 'Clean Energy Score', userValue: 'A+', recommendedValue: 'A+'},
            { name: 'Rebates & Incentives', userValue: '-', recommendedValue:'Check it out!'},
          ]
    }];
}


export default handleCalculation;
