/*
https:/.zwellhome.com/state_table/state/Washington
https:/.zwellhome.com/api/zip_table/zipcode/98059
https://api.zwellhome.com/api/appliances
etc...

/appliances
/hvac_appliances
/home_decades
/home_type

/state_table
/state_table/state/:state:

/zip_table
/zip_table/zipcode/:zipcode:
/zip_table/state/:state:

/wood_table
*/

const states = [
  { min: 35000, max: 36999, code: 'AL', long: 'Alabama' },
  { min: 99500, max: 99999, code: 'AK', long: 'Alaska' },
  { min: 85000, max: 86999, code: 'AZ', long: 'Arizona' },
  { min: 71600, max: 72999, code: 'AR', long: 'Arkansas' },
  { min: 90000, max: 96699, code: 'CA', long: 'California' },
  { min: 80000, max: 81999, code: 'CO', long: 'Colorado' },
  { min: 6000, max: 6999, code: 'CT', long: 'Connecticut' },
  { min: 19700, max: 19999, code: 'DE', long: 'Deleware' },
  { min: 32000, max: 34999, code: 'FL', long: 'Florida' },
  { min: 30000, max: 31999, code: 'GA', long: 'Georgia' },
  { min: 96700, max: 96999, code: 'HI', long: 'Hawaii' },
  { min: 83200, max: 83999, code: 'ID', long: 'Idaho' },
  { min: 60000, max: 62999, code: 'IL', long: 'Illinois' },
  { min: 46000, max: 47999, code: 'IN', long: 'Indiana' },
  { min: 50000, max: 52999, code: 'IA', long: 'Iowa' },
  { min: 66000, max: 67999, code: 'KS', long: 'Kansas' },
  { min: 40000, max: 42999, code: 'KY', long: 'Kentucky' },
  { min: 70000, max: 71599, code: 'LA', long: 'Louisiana' },
  { min: 3900, max: 4999, code: 'ME', long: 'Maine' },
  { min: 20600, max: 21999, code: 'MD', long: 'Maryland' },
  { min: 1000, max: 2799, code: 'MA', long: 'Massachusetts' },
  { min: 48000, max: 49999, code: 'MI', long: 'Michigan' },
  { min: 55000, max: 56999, code: 'MN', long: 'Minnesota' },
  { min: 38600, max: 39999, code: 'MS', long: 'Mississippi' },
  { min: 63000, max: 65999, code: 'MO', long: 'Missouri' },
  { min: 59000, max: 59999, code: 'MT', long: 'Montana' },
  { min: 27000, max: 28999, code: 'NC', long: 'North Carolina' },
  { min: 58000, max: 58999, code: 'ND', long: 'North Dakota' },
  { min: 68000, max: 69999, code: 'NE', long: 'Nebraska' },
  { min: 88900, max: 89999, code: 'NV', long: 'Nevada' },
  { min: 3000, max: 3899, code: 'NH', long: 'New Hampshire' },
  { min: 7000, max: 8999, code: 'NJ', long: 'New Jersey' },
  { min: 87000, max: 88499, code: 'NM', long: 'New Mexico' },
  { min: 10000, max: 14999, code: 'NY', long: 'New York' },
  { min: 43000, max: 45999, code: 'OH', long: 'Ohio' },
  { min: 73000, max: 74999, code: 'OK', long: 'Oklahoma' },
  { min: 97000, max: 97999, code: 'OR', long: 'Oregon' },
  { min: 15000, max: 19699, code: 'PA', long: 'Pennsylvania' },
  // { min: 300, max: 999, code: 'PR', long: 'Puerto Rico' }, // we dont have any of this data :(
  { min: 2800, max: 2999, code: 'RI', long: 'Rhode Island' },
  { min: 29000, max: 29999, code: 'SC', long: 'South Carolina' },
  { min: 57000, max: 57999, code: 'SD', long: 'South Dakota' },
  { min: 37000, max: 38599, code: 'TN', long: 'Tennessee' },
  { min: 75000, max: 79999, code: 'TX', long: 'Texas' },
  { min: 88500, max: 88599, code: 'TX', long: 'Texas' },
  { min: 84000, max: 84999, code: 'UT', long: 'Utah' },
  { min: 5000, max: 5999, code: 'VT', long: 'Vermont' },
  { min: 22000, max: 24699, code: 'VA', long: 'Virgina' },
  { min: 20000, max: 20599, code: 'DC', long: 'Washington DC' },
  { min: 98000, max: 99499, code: 'WA', long: 'Washington' },
  { min: 24700, max: 26999, code: 'WV', long: 'West Virginia' },
  { min: 53000, max: 54999, code: 'WI', long: 'Wisconsin' },
  { min: 82000, max: 83199, code: 'WY', long: 'Wyoming' }
];

const BASE_URL = 'https://api.zwell.io';

const convertZipToState = (zipcode) => {
  const state = states.find(function (s) {
    return s.min <= zipcode && s.max >= zipcode;
  });
  return state;
};

const getState = async (state) => {
  const url = `${BASE_URL}/state/${state}`;
  const response = await fetch(url);
  const data = await response.json();

  const result = {}

  if (data.length > 0) {
    result.emissions = data[0]['state_emissions'][0];
    result.costs = data[0]['state_energy_costs'][0];
    result.breakdown = data[0]['state_energy_breakdown'][0];
  }

  return {
    ...result
  };
};

const getZip = async (zipcode) => {
  const url = `${BASE_URL}/zipcode/${zipcode}`;

  const response = await fetch(url);
  const data = await response.json();

  const latitude = data[0]["latitude"];
  const longitude = data[0]["longitude"];
  const degree_days = data[0]["degree_days"];
  const water_temp = data[0]["water_temperature_data"];
  return {
    latitude,
    longitude,
    degree_days,
    water_temp
  };
}

const validateZipCode = async (zipcode) => {
  const url = `${BASE_URL}/zipcode/${zipcode}`;

  const response = await fetch(url);
  const data = await response.json();
  if (data && data.length > 0) {
    return true;
  }
  return false;
}

const getAppliances = async () => {
  const url = `${BASE_URL}/appliances`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getHvacAppliances = async (heating_appliance, cooling_appliance, water_heating_appliance) => {
  const heating_url = `${BASE_URL}/hvac/${encodeURIComponent(heating_appliance)}`;
  const water_heating_url = `${BASE_URL}/hvac/${encodeURIComponent(water_heating_appliance)}`;
  const response_1 = await fetch(heating_url);
  const data_1 = await response_1.json();

  let hvac_cooling_efficiency = 0;
  if (cooling_appliance !== "") {
    const cooling_url = `${BASE_URL}/hvac/${encodeURIComponent(cooling_appliance)}`;
    const response_2 = await fetch(cooling_url);
    const data_2 = await response_2.json();
    hvac_cooling_efficiency = data_2[0]["efficiency"];
  }

  const response_3 = await fetch(water_heating_url);
  const data_3 = await response_3.json();

  const hvac_heating_efficiency = data_1[0]["efficiency"];
  const hvac_water_heating_efficiency = data_3[0]["efficiency"];

  return {
    hvac_heating_efficiency,
    hvac_cooling_efficiency,
    hvac_water_heating_efficiency
  };
};

const getHomeDecades = async (home_decade) => {
  const url = `${BASE_URL}/home_decade/${home_decade}`;
  const response = await fetch(url);
  const data = await response.json();
  return data[0];
};

const getHomeType = async () => {
  const url = `${BASE_URL}/home_type`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

async function getAPIData(state, zipcode, rooms, kitchen, laundry, home_decade, heating_appliance, cooling_appliance, water_heating_appliance) {
  // API lookups
  // get state table 
  const { emissions, costs, breakdown } = await getState(state);
  const grid_carbon_intensity = emissions["co2_lbs/btu"];
  const avg_home = emissions["co2_net_emission_estimate"];

  // get zip table
  const { latitude, longitude, degree_days, water_temp } = await getZip(zipcode);
  const region_hdd = degree_days["heating_degree_days"];
  const region_cdd = degree_days["cooling_degree_days"];
  const region_water_temp = water_temp["water_temperature"];

  const home = await getHomeDecades(home_decade);
  const ach = home["ach"];
  const r_probability_insulation = home["prob_of_insulation"];
  const r_attic_roof = home["attic_r"];
  const r_attic_joist = home["joist"];
  const r_attic_insulation = home["attic_insulation_r"];
  const r_wall_construction = home["wall_construction"];
  const r_wall_insulation = home["wall_insulation_r"];
  // hard coded value
  const r_wall_siding = 0.5;

  // hvac appliances
  const { hvac_heating_efficiency, hvac_cooling_efficiency, hvac_water_heating_efficiency } = await getHvacAppliances(heating_appliance, cooling_appliance, water_heating_appliance);
  const appliances = await getAppliances();

  const natural_gas_stove = appliances.filter(appliance => appliance["fuel_type"] === "natural gas" && appliance.appliance === "stove")[0]['per_year'] * kitchen['Natural Gas Cooktop'];
  const natural_gas_oven = appliances.filter(appliance => appliance["fuel_type"] === "natural gas" && appliance.appliance === "oven")[0]['per_year'] * kitchen['Natural Gas Oven'];
  const natural_gas_dryer = appliances.filter(appliance => appliance["fuel_type"] === "natural gas" && appliance.appliance === "dryer")[0]['per_year'] * laundry['Natural Gas Dryer'];
  const electric_stove = appliances.filter(appliance => appliance["fuel_type"] === "electricity" && appliance.appliance === "stove")[0]['per_year'] * kitchen['Electric Cooktop'];
  const electric_oven = appliances.filter(appliance => appliance["fuel_type"] === "electricity" && appliance.appliance === "oven")[0]['per_year'] * kitchen['Electric Oven'];
  const electric_dryer = appliances.filter(appliance => appliance["fuel_type"] === "electricity" && appliance.appliance === "dryer")[0]['per_year'] * laundry['Electric Dryer'];
  const dishwasher = appliances.filter(appliance => appliance["fuel_type"] === "electricity" && appliance.appliance === "dishwasher")[0]['per_year'] * kitchen['Dishwasher'];
  const washing_machine = appliances.filter(appliance => appliance["fuel_type"] === "electricity" && appliance.appliance === "washing machine")[0]['per_year'] * laundry['Washers'];
  const heat_pump_dryer = appliances.filter(appliance => appliance["fuel_type"] === "electricity" && appliance.appliance === "heat pump dryer")[0]['per_year'] * laundry['Heat Pump Dryer'];
  const induction_stove = appliances.filter(appliance => appliance["fuel_type"] === "electricity" && appliance.appliance === "induction stove")[0]['per_year'] * kitchen['Induction Cooktop'];
  const refrigerator_freezer = appliances.filter(appliance => appliance.appliance === "refrigerator/freezer")[0]['per_year'] * rooms.Kitchens;

  const btu_gas_appliances = natural_gas_stove + natural_gas_oven + natural_gas_dryer;
  const btu_electric_appliances = electric_stove + electric_oven + electric_dryer + dishwasher + washing_machine + heat_pump_dryer + induction_stove + refrigerator_freezer;

  const home_decades = {
    recent: await getHomeDecades('2020+'),
    actual: await getHomeDecades(home_decade),
  }

  return {
    grid_carbon_intensity,
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
    btu_electric_appliances,
    home_decades,
    avg_home
  }
}

export {
  convertZipToState,
  getState,
  getZip,
  validateZipCode,
  getAppliances,
  getHvacAppliances,
  getHomeDecades,
  getHomeType,
  getAPIData
};
